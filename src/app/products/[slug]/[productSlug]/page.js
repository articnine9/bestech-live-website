
import { notFound,redirect } from "next/navigation";
import fs from "fs";
import path from "path";
import ProductDetailsPageClient from "./ProductDetailsPageClient";

// ✅ Next.js 16 SAFE metadata
export async function generateMetadata(props) {
  const params = await props.params;
  const { slug, productSlug } = params || {};

  if (!slug || !productSlug) {
    return {
      title: "Product Not Found",
      description: "The requested product does not exist.",
      robots: "noindex, nofollow",
    };
  }

  const filePath = path.join(process.cwd(), "src", "db", "products.json");
  const fileContents = await fs.promises.readFile(filePath, "utf-8");
  const data = JSON.parse(fileContents);

  const category = data.find(
  (cat) => cat.slug?.toLowerCase() === slug?.toLowerCase()
);

  const product = category?.items?.find((item) => {
    const parts = item.url?.split("/").filter(Boolean);
    const lastSegment = parts?.[parts.length - 1];
    return lastSegment?.toLowerCase() === productSlug?.toLowerCase();
  });

  if (!product) {
    return {
      title: "Product Not Found",
      description: "The requested product does not exist.",
      robots: "noindex, nofollow",
    };
  }

  const url = `https://www.bestechparts.ae/products/${slug}/${productSlug}`;

  // ✅ OG Image fallback
  const ogImage = product.og_image
    ? `https://www.bestechparts.ae${product.og_image}`
    : product.image
      ? `https://www.bestechparts.ae${product.image}`
      : "https://www.bestechparts.ae/images/og-default.jpg";

  return {
    title: product.meta_title || product.name,
    description: product.meta_description,
    keywords: product.keywords || "",
    alternates: {
      canonical: product?.canonical || url,
    },
    robots: product.robots || "index, follow",

    openGraph: {
      type: "website",
      siteName: "Bestech Parts",
      title: product.meta_title || product.name,
      description: product.meta_description,
      url,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: product.meta_title || product.name,
      description: product.meta_description,
      images: [ogImage],
    },
  };
}

// ✅ Next.js 16 SAFE Page
export default async function Page(props) {
  const params = await props.params;
  const { slug, productSlug } = params || {};

  if (!slug || !productSlug) return notFound();

   // ✅ Convert params to lowercase
  const lowerSlug = slug.toLowerCase();
  const lowerProductSlug = productSlug.toLowerCase();

  // ✅ Redirect uppercase URLs to lowercase canonical URL
  if (
    slug !== lowerSlug ||
    productSlug !== lowerProductSlug
  ) {
    redirect(
      `/products/${lowerSlug}/${lowerProductSlug}`
    );
  }

  const filePath = path.join(process.cwd(), "src", "db", "products.json");
  const fileContents = await fs.promises.readFile(filePath, "utf-8");
  const data = JSON.parse(fileContents);

  // ✅ Case-insensitive category match
  const category = data.find(
    (cat) => cat.slug?.toLowerCase() === lowerSlug
  );

  // ✅ Case-insensitive product match
  const product = category?.items?.find((item) => {
    const parts = item.url?.split("/").filter(Boolean);

    const lastSegment =
      parts?.[parts.length - 1]?.toLowerCase();

    return lastSegment === lowerProductSlug;
  });

  if (!product) return notFound();

  return <ProductDetailsPageClient product={product} />;
}

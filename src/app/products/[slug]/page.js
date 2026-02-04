import path from "path";
import fs from "fs";
import { notFound } from "next/navigation";
import ProductPageClient from "./ProductPageClient";

// ✅ Server-side metadata generation
export async function generateMetadata(props) {
  const params = await props.params;
  const slug = params?.slug;

  if (!slug) {
    return {
      title: "Product Not Found",
      robots: "noindex, nofollow",
    };
  }

  const filePath = path.join(process.cwd(), "src/db/products.json");
  const fileContents = await fs.promises.readFile(filePath, "utf-8");
  const data = JSON.parse(fileContents);

  const found = data.find((cat) => cat.slug === slug);

  if (!found) {
    return {
      title: "Product Not Found",
      description: "The product category you are looking for does not exist.",
      alternates: { canonical: "https://www.bestechparts.ae/products" },
      robots: "noindex, nofollow",
      keywords: "",
    };
  }

  const url = `https://www.bestechparts.ae/products/${found.slug}`;

  // ✅ OG Image fallback
  const ogImage = found.og_image
    ? `https://www.bestechparts.ae${found.og_image}`
    : "https://www.bestechparts.ae/images/og-default.jpg";

  return {
    title: found.meta_title || found.page_name,
    description:
      found.meta_description ||
      "Explore our product category for more information.",

    alternates: { canonical: found.canonical || url },
    robots: found.robots || "index, follow",
    keywords: found.keywords || "",

    openGraph: {
      type: "website",
      siteName: "Bestech Parts",
      title: found.meta_title || found.page_name,
      description: found.meta_description,
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
      title: found.meta_title || found.page_name,
      description: found.meta_description,
      images: [ogImage],
    },
  };
}

// ✅ Server Component Page
export default async function Page(props) {
  const params = await props.params;
  const slug = params?.slug;

  if (!slug) return notFound();

  const filePath = path.join(process.cwd(), "src/db/products.json");
  const fileContents = await fs.promises.readFile(filePath, "utf-8");
  const data = JSON.parse(fileContents);

  const initialCategory = data.find((cat) => cat.slug === slug);

  if (!initialCategory) return notFound();

  return <ProductPageClient initialCategory={initialCategory} />;
}

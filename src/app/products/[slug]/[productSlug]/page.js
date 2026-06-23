
import { notFound, redirect } from "next/navigation";
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

  console.log("Category", category)

  const product = category?.items?.find((item) => {
    const parts = item.url?.split("/").filter(Boolean);
    const lastSegment = parts?.[parts.length - 1];
    return lastSegment?.toLowerCase() === productSlug?.toLowerCase();
  });
  console.log("product", product)
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

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.bestechparts.ae/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Products",
        item: "https://www.bestechparts.ae/products",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: category.page_name,
        item: `https://www.bestechparts.ae/products/${slug}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: product.name,
        item:
          product.canonical ||
          `https://www.bestechparts.ae/products/${slug}/${productSlug}`,
      },
    ],
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",

    name: product.name,

    image: product.image
      ? [`https://www.bestechparts.ae${product.image}`]
      : [],

    description:
      product.meta_description || product.name,

    sku: product.code,

    mpn: product.code,

    url:
      product.canonical ||
      `https://www.bestechparts.ae/products/${slug}/${productSlug}`,
    keywords: product.keywords,

    brand: {
      "@type": "Brand",
      name: "Bestech Parts"
    },

    category: category?.page_name || "",
    offers: {
      "@type": "Offer",
      url:
        product.canonical ||
        `https://www.bestechparts.ae/products/${slug}/${productSlug}`,
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "100.00",
        "priceCurrency": "AED"
      },
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema),
        }}
      />

      <ProductDetailsPageClient product={product} />
    </>
  );
}

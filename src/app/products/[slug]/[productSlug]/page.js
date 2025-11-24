import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import ProductDetailsPageClient from "./ProductDetailsPageClient";

export async function generateMetadata({ params }) {
  const { slug, productSlug } = params;

  const filePath = path.join(process.cwd(), "src", "db", "products.json");
  const fileContents = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(fileContents);

  const category = data.find((cat) => cat.slug === slug);

  const product = category?.items?.find((item) => {
    const parts = item.url?.split("/").filter(Boolean);
    const lastSegment = parts?.[parts.length - 1];
    return lastSegment === productSlug;
  });

  // ❗ If product not found, return default metadata and let Page() handle 404
  if (!product) {
    return {
      title: "Product Not Found",
      description: "The requested product does not exist.",
      robots: "noindex, nofollow",
    };
  }

  return {
    title: product.meta_title || product.name,
    description: product.meta_description,
    keywords: product.keywords || "",
    alternates: {
      canonical: product.canonical,
    },
    robots: product.robots || "index, follow",
  };
}

export default function Page({ params }) {
  const { slug, productSlug } = params;

  const filePath = path.join(process.cwd(), "src", "db", "products.json");
  const fileContents = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(fileContents);

  const category = data.find((cat) => cat.slug === slug);

  const product = category?.items?.find((item) => {
    const parts = item.url?.split("/").filter(Boolean);
    const lastSegment = parts?.[parts.length - 1];
    return lastSegment === productSlug;
  });

  // ❌ Product not found → return 404 page
  if (!product) {
    return notFound();
  }

  return <ProductDetailsPageClient product={product} />;
}

import path from "path";
import fs from "fs";
import ProductPageClient from "./ProductPageClient";

// Server-side metadata generation
export async function generateMetadata({ params }) {
  const filePath = path.join(process.cwd(), "src/db/products.json");
  const fileContents = await fs.promises.readFile(filePath, "utf-8");
  const data = JSON.parse(fileContents);

  const found = data.find((cat) => cat.slug === params.slug);

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

  return {
    title: found.meta_title || found.page_name,
    description:
      found.meta_description ||
      "Explore our product category for more information.",
    alternates: { canonical: found.canonical || url },
    robots: found.robots || "index, follow",
    keywords: found.keywords || "",
    openGraph: {
      title: found.meta_title || found.page_name,
      description: found.meta_description,
      url,
      siteName: "Bestech Parts",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: found.meta_title || found.page_name,
      description: found.meta_description,
    },
  };
}

// Server component passes initial category to client component
export default async function Page({ params }) {
  const filePath = path.join(process.cwd(), "src/db/products.json");
  const fileContents = await fs.promises.readFile(filePath, "utf-8");
  const data = JSON.parse(fileContents);

  const initialCategory = data.find((cat) => cat.slug === params.slug) || null;

  return <ProductPageClient initialCategory={initialCategory} />;
}

import path from "path";
import fs from "fs";
import { notFound } from "next/navigation";
import ProductPageClient from "./ProductPageClient";

// ✅ Server-side metadata generation (Next.js 16 SAFE)
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

// ✅ Server Component Page (Next.js 16 SAFE)
export default async function Page(props) {
  const params = await props.params;
  const slug = params?.slug;

  // ✅ If routing ever breaks, fail safely
  if (!slug) {
    return notFound();
  }

  const filePath = path.join(process.cwd(), "src/db/products.json");
  const fileContents = await fs.promises.readFile(filePath, "utf-8");
  const data = JSON.parse(fileContents);

  const initialCategory = data.find((cat) => cat.slug === slug);

  // ❌ If not found → show custom 404 page
  if (!initialCategory) {
    return notFound();
  }

  return <ProductPageClient initialCategory={initialCategory} />;
}

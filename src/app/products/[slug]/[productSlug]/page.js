import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import ProductDetailsPageClient from "./ProductDetailsPageClient";

// ✅ Next.js 16 SAFE metadata
export async function generateMetadata(props) {
  const params = await props.params; // ✅ REQUIRED in Next 16
  const { slug, productSlug } = params || {};

  console.log("🧩 generateMetadata params:", { slug, productSlug });

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

  console.log("✅ Total categories:", data.length);

  const category = data.find((cat) => cat.slug === slug);
  console.log("📂 Matched category:", category);

  const product = category?.items?.find((item) => {
    console.log("🔍 Checking item.url:", item.url);

    const parts = item.url?.split("/").filter(Boolean);
    const lastSegment = parts?.[parts.length - 1];

    console.log("➡ Extracted lastSegment:", lastSegment);
    console.log("➡ Comparing with productSlug:", productSlug);

    return lastSegment === productSlug;
  });

  console.log("✅ Final matched product:", product);

  if (!product) {
    console.log("❌ Product NOT FOUND in generateMetadata");
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

// ✅ Next.js 16 SAFE Page
export default async function Page(props) {
  const params = await props.params; // ✅ REQUIRED in Next 16
  const { slug, productSlug } = params || {};

  console.log("🧩 Page params:", { slug, productSlug });

  if (!slug || !productSlug) {
    console.log("❌ Missing slug or productSlug → 404");
    return notFound();
  }

  const filePath = path.join(process.cwd(), "src", "db", "products.json");
  const fileContents = await fs.promises.readFile(filePath, "utf-8");
  const data = JSON.parse(fileContents);

  console.log("✅ Total categories (Page):", data.length);

  const category = data.find((cat) => cat.slug === slug);
  console.log("📂 Matched category (Page):", category);

  const product = category?.items?.find((item) => {
    console.log("🔍 Page checking item.url:", item.url);

    const parts = item.url?.split("/").filter(Boolean);
    const lastSegment = parts?.[parts.length - 1];

    console.log("➡ Page lastSegment:", lastSegment);
    console.log("➡ Page comparing with:", productSlug);

    return lastSegment === productSlug;
  });

  console.log("✅ Page final matched product:", product);

  if (!product) {
    console.log("❌ Product NOT FOUND → Returning 404");
    return notFound();
  }

  return <ProductDetailsPageClient product={product} />;
}

import fs from "fs";
import path from "path";
import ProductPageClient from "./ProductPageClient";

export async function generateMetadata({ params }) {
  const filePath = path.join(process.cwd(), "src", "db", "products.json");
  const fileContents = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(fileContents);

  const found = data.find((cat) => cat.slug === params.slug);

  if (!found) {
    return {
      title: "Product Not Found",
      description: "The product category you are looking for does not exist.",
      alternates: {
        canonical: "https://www.bestechparts.ae/products", // fallback canonical
      },
      robots: "noindex, nofollow", // fallback robots
    };
  }

  return {
    title: found.meta_title || found.page_name,
    description:
      found.meta_description ||
      "Explore our product category for more information.",
    alternates: {
      canonical: found.canonical || `https://www.bestechparts.ae/${found.slug}`, // dynamic canonical
    },
    robots: found.robots || "index, follow", // take from JSON or fallback
  };
}

export default function Page() {
  return <ProductPageClient />;
}

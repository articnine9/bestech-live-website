import fs from "fs";
import path from "path";
import ProductDetailsPageClient from "./ProductDetailsPageClient";

// ✅ Metadata generation
export async function generateMetadata({ params }) {
  const { slug, productSlug } = params; // ❌ No 'await' needed here!

  const filePath = path.join(process.cwd(), "src", "db", "products.json");
  const fileContents = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(fileContents);

  // ✅ Find category
  const category = data.find((cat) => cat.slug === slug);

  // ✅ Find product
  const product = category?.items?.find((item) => {
    const parts = item.url?.split("/").filter(Boolean);
    const lastSegment = parts?.[parts.length - 1];
    return lastSegment === productSlug;
  });

  if (!product) {
    return {
      title: "Product Not Found",
      description: "The requested product does not exist or has been moved.",
    };
  }

  console.log("✅ meta_title:", product.meta_title);

  return {
    title: product.meta_title || product.name,
    description:
      product.meta_description ||
      `Explore details of ${product.name} from ${
        category?.page_name || "our products"
      }.`,
  };
}

export default function Page() {
  return <ProductDetailsPageClient />;
}

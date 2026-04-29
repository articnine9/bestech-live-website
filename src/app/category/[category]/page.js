import CategoryClient from "./CategoryClient"; // client component
import data from "~/db/blogsData.json";

// No "use client" here
export async function generateMetadata({ params }) {
  const { category } = await params;   // 🔥 FIX HERE

  const categoryParam = category || "";

  const categoryName = categoryParam
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const categoryBlogs = data.filter(
    (blog) =>
      blog.category.toLowerCase().replace(/ /g, "-") === categoryParam
  );

  if (!categoryBlogs.length) {
    return {
      title: "Category Not Found",
      description: "No blogs found in this category",
      robots: "noindex, nofollow",
    };
  }

  const keywordsArray = categoryBlogs
    .map((blog) => blog.title.split(" "))
    .flat()
    .map((word) => word.replace(/[^\w]/g, "").toLowerCase());

  const uniqueKeywords = [...new Set(keywordsArray)]
    .slice(0, 20)
    .join(", ");

  return {
    title: `Blogs in ${categoryName} - Bestech`,
    description: `Explore ${categoryBlogs.length} blog posts in the ${categoryName} category.`,
    keywords: uniqueKeywords,
    alternates: {
      canonical: `https://www.bestechparts.ae/category/${categoryParam}`,
    },
    robots: "index, follow",
  };
}

export default async function CategoryPageWrapper({ params }) {
  const { category } = await params;

  if (!category) {
    return <div>Category not found</div>;
  }

  return <CategoryClient categoryParam={category} />;
}
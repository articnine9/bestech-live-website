import CategoryClient from "./CategoryClient"; // client component
import data from "~/db/blogsData.json";

// No "use client" here
export async function generateMetadata({ params }) {
  const categoryParam = params.category; // e.g., "motors-drives"

  const categoryName = categoryParam
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const categoryBlogs = data.filter((blog) => blog.category === categoryName);

  if (!categoryBlogs.length) {
    return {
      title: "Category Not Found",
      description: "No blogs found in this category",
      robots: "noindex, nofollow",
      keywords: "noindex, nofollow",
    };
  }

  // Generate keywords dynamically from blog titles
  const keywordsArray = categoryBlogs
    .map((blog) => blog.title.split(" "))
    .flat()
    .map((word) => word.replace(/[^\w]/g, "").toLowerCase()); // clean punctuation

  // Take unique keywords and join with commas
  const uniqueKeywords = [...new Set(keywordsArray)].slice(0, 20).join(", "); // limit to 20 words

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

export default function CategoryPageWrapper({ params }) {
  return <CategoryClient categoryParam={params.category} />;
}

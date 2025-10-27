// src/app/category/[category]/generateMetadata.js
import data from "~/db/blogsData.json";

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
    };
  }

  return {
    title: `Blogs in ${categoryName} - Bestech`,
    description: `Explore ${categoryBlogs.length} blog posts in the ${categoryName} category.`,
    alternates: {
      canonical: `https://www.bestechparts.ae/category/${categoryParam}`,
    },
    robots: "index, follow",
  };
}

import fs from "fs";
import path from "path";
import BlogContent from "./BlogContent";

export async function generateMetadata({ params }) {
  const { url: slug } = params;

  const filePath = path.join(process.cwd(), "src", "db", "blogsData.json");
  const fileContents = fs.readFileSync(filePath, "utf-8");
  const blogs = JSON.parse(fileContents);

  const blog = blogs.find((item) => item.link === slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
      description: "The requested blog post does not exist or has been moved.",
      alternates: { canonical: "https://www.bestechparts.ae/blog" },
      robots: "noindex, nofollow",
    };
  }

  return {
    title: blog.meta_title || blog.title,
    description:
      blog.meta_description || `Read more about ${blog.title} on our blog.`,
    keywords: blog.keywords,
    alternates: {
      canonical: blog.canonical || `https://www.bestechparts.ae/blog/${slug}`,
    },
    robots: blog.robots || "index, follow",
  };
}

// Server component renders the client blog content
export default function Page({ params }) {
  return <BlogContent slug={params.url} />;
}

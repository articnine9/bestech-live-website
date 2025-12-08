import fs from "fs";
import path from "path";
import BlogContent from "./BlogContent";

// ✅ Next.js 16 SAFE metadata
export async function generateMetadata(props) {
  const params = await props.params; // ✅ REQUIRED in Next 16
  const slug = params?.url;

  if (!slug) {
    return {
      title: "Blog Not Found",
      description: "Invalid blog URL.",
      alternates: { canonical: "https://www.bestechparts.ae/blog" },
      robots: "noindex, nofollow",
    };
  }

  const filePath = path.join(process.cwd(), "src", "db", "blogsData.json");
  const fileContents = await fs.promises.readFile(filePath, "utf-8");
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
    keywords: blog.keywords || "",
    alternates: {
      canonical: blog.canonical || `https://www.bestechparts.ae/blog/${slug}`,
    },
    robots: blog.robots || "index, follow",
  };
}

// ✅ Next.js 16 SAFE Server Component
export default async function Page(props) {
  const params = await props.params; // ✅ REQUIRED in Next 16
  const slug = params?.url;

  if (!slug) {
    return <p className="text-center">Invalid blog URL</p>;
  }

  return <BlogContent slug={slug} />;
}

import blogs from "~/db/blogsData.json";
import BlogContent from "./BlogContent";
import { notFound } from "next/navigation";

// Generate articles at build time so first visits use cached HTML.
export async function generateStaticParams() {
  return blogs.map((blog) => ({ url: blog.link }));
}

// ✅ Next.js 16 SAFE metadata
export async function generateMetadata(props) {
  const params = await props.params;
  const slug = params?.url;

  if (!slug) {
    return {
      title: "Blog Not Found",
      description: "Invalid blog URL.",
      alternates: { canonical: "https://www.bestechparts.ae/blog" },
      robots: "noindex, nofollow",
    };
  }


  const blog = blogs.find((item) => item.link === slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
      description: "The requested blog post does not exist or has been moved.",
      alternates: { canonical: "https://www.bestechparts.ae/blog" },
      robots: "noindex, nofollow",
    };
  }

  const url = blog.canonical || `https://www.bestechparts.ae/blog/${slug}`;

  // ✅ OG Image fallback
  const ogImage = blog.og_image
    ? `https://www.bestechparts.ae${blog.og_image}`
    : blog.image
      ? `https://www.bestechparts.ae${blog.image}`
      : "https://www.bestechparts.ae/images/og-default.jpg";

  return {
    title: blog.meta_title || blog.title,
    description:
      blog.meta_description || `Read more about ${blog.title} on our blog.`,
    keywords: blog.keywords || "",

    alternates: {
      canonical: url,
    },

    robots: blog.robots || "index, follow",

    openGraph: {
      type: "article",
      siteName: "Bestech Parts",
      title: blog.meta_title || blog.title,
      description: blog.meta_description,
      url,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: blog.meta_title || blog.title,
      description: blog.meta_description,
      images: [ogImage],
    },
  };
}

// ✅ Next.js 16 SAFE Server Component
export default async function Page(props) {
  const params = await props.params;
  const slug = params?.url;

   // ✅ Invalid slug
  if (!slug) {
    notFound();
  }

  const blog = blogs.find((item) => item.link === slug);

  // ✅ Blog not found
  if (!blog) {
    notFound();
  }

  return <BlogContent slug={slug} />;
}

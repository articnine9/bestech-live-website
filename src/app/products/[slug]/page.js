import data from "~/db/products.json";
import { notFound } from "next/navigation";
import ProductPageClient from "./ProductPageClient";

// Generate categories at build time so first visits use cached HTML.
export async function generateStaticParams() {
  return data.map((category) => ({ slug: category.slug }));
}

// ✅ Server-side metadata generation
export async function generateMetadata(props) {
  const params = await props.params;
  const slug = params?.slug;

  if (!slug) {
    return {
      title: "Product Not Found",
      robots: "noindex, nofollow",
    };
  }


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

  // ✅ OG Image fallback
  const ogImage = found.og_image
    ? `https://www.bestechparts.ae${found.og_image}`
    : "https://www.bestechparts.ae/images/og-default.jpg";

  return {
    title: found.meta_title || found.page_name,
    description:
      found.meta_description ||
      "Explore our product category for more information.",

    alternates: { canonical: found.canonical || url },
    robots: found.robots || "index, follow",
    keywords: found.keywords || "",

    openGraph: {
      type: "website",
      siteName: "Bestech Parts",
      title: found.meta_title || found.page_name,
      description: found.meta_description,
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
      title: found.meta_title || found.page_name,
      description: found.meta_description,
      images: [ogImage],
    },
  };
}

// ✅ Server Component Page
export default async function Page(props) {
  const params = await props.params;
  const slug = params?.slug;

  if (!slug) return notFound();


  const initialCategory = data.find((cat) => cat.slug === slug);

  if (!initialCategory) return notFound();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.bestechparts.ae/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Products",
        item: "https://www.bestechparts.ae/products",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: initialCategory.page_name,
        item: `https://www.bestechparts.ae/products/${slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <ProductPageClient initialCategory={initialCategory} />
    </>);
}

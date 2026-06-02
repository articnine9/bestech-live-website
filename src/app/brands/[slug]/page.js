import Brand from "~/components/Section/Common/Brand/brand";
import data from "~/db/brands.json";
import PageHeader from "~/components/Section/Common/PageHeader";
import { notFound } from "next/navigation";

// ✅ Metadata with Open Graph & Twitter
export async function generateMetadata(props) {
  const params = await props.params; // ✅ REQUIRED
  const slug = params?.slug;

  if (!slug) {
    return {
      title: "Page Not Found | Bestech Parts",
      description: "No metadata available",
      robots: "noindex, nofollow",
    };
  }

  const matchedCategory = data.find((item) => item.slug === slug);

  if (!matchedCategory) {
    return {
      title: "Page Not Found | Bestech Parts",
      description: `No metadata available for "${slug}"`,
      robots: "noindex, nofollow",
    };
  }

  const url = `https://www.bestechparts.ae/brands/${slug}`;

  // ✅ OG Image fallback
  const ogImage = matchedCategory.og_image
    ? `https://www.bestechparts.ae${matchedCategory.og_image}`
    : "https://www.bestechparts.ae/images/og-default.jpg";

  return {
    title: matchedCategory.meta_title || matchedCategory.page_name,
    description:
      matchedCategory.meta_description || "Bestech Parts UAE product details.",
    keywords: matchedCategory.keywords || "",
    alternates: {
      canonical: matchedCategory.canonical || url,
    },
    robots:
      matchedCategory.robots ||
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",

    openGraph: {
      type: "website",
      siteName: "Bestech Parts",
      title: matchedCategory.meta_title || matchedCategory.page_name,
      description: matchedCategory.meta_description,
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
      title: matchedCategory.meta_title || matchedCategory.page_name,
      description: matchedCategory.meta_description,
      images: [ogImage],
    },
  };
}

// ✅ Page — unchanged
export default async function Page(props) {
  const params = await props.params;
  const slug = params?.slug;

  if (!slug) return notFound();

  const matchedCategory = data.find((item) => item.slug === slug);

  if (!matchedCategory) return notFound();

  // ✅ Breadcrumb Schema
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
        name: matchedCategory.page_name,
        item: `https://www.bestechparts.ae/brands/${slug}`,
      },
    ],
  };

  return (


    <div className="body-dark-bg">
      {/* ✅ Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <div className="fix">
        <PageHeader title={matchedCategory.page_name}
          breadcrumbs={[
           
            { label: matchedCategory.page_name }
          ]} />
        <div className="pb-120">
          <Brand category={matchedCategory} />
        </div>
      </div>
    </div>
  );
}

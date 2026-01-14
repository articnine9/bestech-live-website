import Brand from "~/components/Section/Common/Brand/brand";
import data from "~/db/brands.json";
import PageHeader from "~/components/Section/Common/PageHeader";
import { notFound } from "next/navigation";

// ✅ ✅ ✅ FIXED: AWAIT params (NO destructuring directly)
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

  return {
    title: matchedCategory.meta_title || matchedCategory.page_name,
    description:
      matchedCategory.meta_description || "Bestech Parts UAE product details.",
    keywords: matchedCategory.keywords || "",
    alternates: {
      canonical:
        matchedCategory.canonical ||
        `https://www.bestechparts.ae/brands/${slug}`,
    },
    robots:
      matchedCategory.robots ||
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  };
}

// ✅ ✅ ✅ FIXED PAGE — params is awaited properly
export default async function Page(props) {
  const params = await props.params; // ✅ REQUIRED
  const slug = params?.slug;

  if (!slug) return notFound();

  const matchedCategory = data.find((item) => item.slug === slug);

  if (!matchedCategory) return notFound();

  return (
    <div className="body-dark-bg">
      <div className="fix">
        <PageHeader title={matchedCategory.page_name} />
        <div className="pb-120">
          <Brand category={matchedCategory} />
        </div>
      </div>
    </div>
  );
}

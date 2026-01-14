import { notFound } from "next/navigation";
import BrandCardFour from "@/components/Ui/Cards/BrandCardFour";
import data from "@/db/brands.json";
import PageHeader from "~/components/Section/Common/PageHeader";

// 🔥 Force dynamic for Vercel
export const dynamic = "force-dynamic";
export const revalidate = 0;

// ✅ METADATA
export async function generateMetadata({ params }) {
  const { slug, groupSlug } = params || {};

  if (!slug || !groupSlug) {
    return {
      title: "Page Not Found | Bestech",
      description: "No metadata available",
      robots: "noindex, nofollow",
    };
  }

  const brand = data.find((b) => b.slug === slug);
  if (!brand || !Array.isArray(brand.groups)) {
    return {
      title: "Page Not Found | Bestech",
      description: "Invalid brand",
      robots: "noindex, nofollow",
    };
  }

  const group = brand.groups.find((g) => g.slug === groupSlug);
  if (!group) {
    return {
      title: "Page Not Found | Bestech",
      description: "Invalid group",
      robots: "noindex, nofollow",
    };
  }

  return {
    title:
      group.meta_title || `${group.group_name} - ${brand.page_name} | Bestech`,
    description:
      group.meta_description ||
      `Explore ${group.group_name} from ${brand.page_name} at Bestech Parts UAE.`,
    keywords: group.keywords || brand.keywords || "",
    alternates: {
      canonical: `https://www.bestechparts.ae/brands/${slug}/${groupSlug}`,
    },
    robots:
      group.robots ||
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  };
}

// ✅ PAGE
export default async function Page({ params }) {
  const { slug, groupSlug } = params || {};

  if (!slug || !groupSlug) return notFound();

  const brand = data.find((b) => b.slug === slug);
  if (!brand || !Array.isArray(brand.groups)) return notFound();

  const group = brand.groups.find((g) => g.slug === groupSlug);
  if (!group) return notFound();

  return (
    <>
      <PageHeader title={`${group.group_name} - ${brand.page_name}`} />

      <section className="container padding pb-120">
        <BrandCardFour items={group.items} productcode={brand.code} />

        {/* ✅ SEO CONTENT */}
        {group.paragraph_text && (
          <section className="container padding">
            <div
              className="seo-content flex flex-col gap-[10px] pb-[200px]"
              dangerouslySetInnerHTML={{ __html: group.paragraph_text }}
            />
          </section>
        )}
      </section>
    </>
  );
}

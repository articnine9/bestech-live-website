import { notFound } from "next/navigation";
import BrandCardFour from "@/components/Ui/Cards/BrandCardFour";
import data from "@/db/brands.json";
import PageHeader from "~/components/Section/Common/PageHeader";

export const dynamic = "force-dynamic";
export const revalidate = 0;

// ✅ NEXT 16 SAFE METADATA
export async function generateMetadata(props) {
  const params = await props.params; // ✅ REQUIRED
  const { slug, groupSlug } = params || {};

  console.log("🧩 generateMetadata params:", { slug, groupSlug });

  if (!slug || !groupSlug) {
    console.log("❌ Missing slug or groupSlug");
    return {
      title: "Page Not Found | Bestech",
      description: "No metadata available",
      robots: "noindex, nofollow",
    };
  }

  const brand = data.find((b) => b.slug === slug);
  console.log("📂 Matched brand:", brand);

  if (!brand || !Array.isArray(brand.groups)) {
    console.log("❌ Brand not found or no groups");
    return {
      title: "Page Not Found | Bestech",
      description: "Invalid brand",
      robots: "noindex, nofollow",
    };
  }

  const group = brand.groups.find((g) => g.slug === groupSlug);
  console.log("📁 Matched group:", group);

  if (!group) {
    console.log("❌ Group not found");
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

// ✅ NEXT 16 SAFE PAGE
export default async function Page(props) {
  const params = await props.params; // ✅ REQUIRED
  const { slug, groupSlug } = params || {};

  console.log("🧩 Page params:", { slug, groupSlug });

  if (!slug || !groupSlug) {
    console.log("❌ Missing slug or groupSlug → 404");
    return notFound();
  }

  const brand = data.find((b) => b.slug === slug);
  console.log("📂 Page matched brand:", brand);

  if (!brand || !Array.isArray(brand.groups)) {
    console.log("❌ Brand invalid → 404");
    return notFound();
  }

  const group = brand.groups.find((g) => g.slug === groupSlug);
  console.log("📁 Page matched group:", group);

  if (!group) {
    console.log("❌ Group invalid → 404");
    return notFound();
  }

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

import { notFound } from "next/navigation";
import BrandCardFour from "@/components/Ui/Cards/BrandCardFour";
import data from "@/db/brands.json";
import PageHeader from "~/components/Section/Common/PageHeader";

export const dynamic = "force-dynamic";
export const revalidate = 0;

// ✅ NEXT 16 SAFE METADATA
export async function generateMetadata(props) {
  const params = await props.params;
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

  const url = `https://www.bestechparts.ae/brands/${slug}/${groupSlug}`;

  // ✅ OG Image fallback
  const ogImage = group.og_image
    ? `https://www.bestechparts.ae${group.og_image}`
    : brand.og_image
      ? `https://www.bestechparts.ae${brand.og_image}`
      : "https://www.bestechparts.ae/images/og-default.jpg";

  return {
    title:
      group.meta_title || `${group.group_name} - ${brand.page_name} | Bestech`,
    description:
      group.meta_description ||
      `Explore ${group.group_name} from ${brand.page_name} at Bestech Parts UAE.`,
    keywords: group.keywords || brand.keywords || "",
    alternates: {
      canonical: url,
    },
    robots:
      group.robots ||
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",

    openGraph: {
      type: "website",
      siteName: "Bestech Parts",
      title:
        group.meta_title ||
        `${group.group_name} - ${brand.page_name} | Bestech`,
      description: group.meta_description,
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
      title:
        group.meta_title ||
        `${group.group_name} - ${brand.page_name} | Bestech`,
      description: group.meta_description,
      images: [ogImage],
    },
  };
}

// ✅ NEXT 16 SAFE PAGE (unchanged)
export default async function Page(props) {
  const params = await props.params;
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

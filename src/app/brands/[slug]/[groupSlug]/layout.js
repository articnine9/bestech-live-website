import data from "@/db/brands.json";

export const dynamic = "force-dynamic"; // 🔥 VERY IMPORTANT FOR VERCEL
export const revalidate = 0; // 🔥 Disable static cache

export async function generateMetadata({ params }) {
  const { slug, groupSlug } = await params;

  
  if (!slug || !groupSlug) {
    console.log("❌ Missing slug or groupSlug");
    return {
      title: "Page Not Found | Bestech",
      description: "No metadata available",
      robots: "noindex, nofollow",
    };
  }

  const brand = data.find((b) => b.slug === slug);

  if (!brand || !Array.isArray(brand.groups)) {
    console.log("❌ Brand not found");
    return {
      title: "Page Not Found | Bestech",
      description: "Invalid brand",
      robots: "noindex, nofollow",
    };
  }

  const group = brand.groups.find((g) => g.slug === groupSlug);

  if (!group) {
    console.log("❌ Group not found");
    return {
      title: "Page Not Found | Bestech",
      description: "Invalid group",
      robots: "noindex, nofollow",
    };
  }

  console.log("✅ Brand:", brand.page_name);
  console.log("✅ Group:", group.group_name);

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

export default function Layout({ children }) {
  return children;
}

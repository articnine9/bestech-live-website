import data from "@/db/brands.json";

export async function generateMetadata({ params }) {
  const { slug, groupSlug } = params || {};

  if (!slug || !groupSlug) {
    console.log("❌ Missing slug or groupSlug");
    return {
      title: "Page Not Found | Bestech Parts",
      description: "No metadata available",
      robots: "noindex, nofollow",
    };
  }

  const brand = data.find((b) => b.slug === slug);

  if (!brand || !Array.isArray(brand.groups)) {
    console.log("❌ Brand not found or no groups");
    return {
      title: "Page Not Found | Bestech Parts",
      description: "Invalid brand",
      robots: "noindex, nofollow",
    };
  }

  const group = brand.groups.find((g) => g.slug === groupSlug);

  if (!group) {
    console.log("❌ Group not found");
    return {
      title: "Page Not Found | Bestech Parts",
      description: "Invalid group",
      robots: "noindex, nofollow",
    };
  }

  return {
    title: group.meta_title,
    description: group.meta_description,
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

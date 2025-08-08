import Brand from "~/components/Section/Common/Brand/brand";
import CtaThree from "~/components/Section/Common/Cta/CtaThree";
import data from "~/db/brands.json";
import PageHeader from "~/components/Section/Common/PageHeader";

// ✅ Add generateMetadata function
export async function generateMetadata({ params }) {
  const { slug } = params;

  const matchedCategory = data.find((category) => category.slug === slug);

  if (!matchedCategory) {
    return {
      title: "Page Not Found | Bestech Parts",
      description: `No metadata available for "${slug}"`,
    };
  }

  return {
    title: matchedCategory.meta_title || matchedCategory.page_name,
    description:
      matchedCategory.meta_description || "Bestech Parts UAE product details.",
  };
}

// ✅ App Router page
export default function Page({ params }) {
  const { slug } = params;

  const matchedCategory = data.find((category) => category.slug === slug);

  if (!matchedCategory) {
    return (
      <p className="text-center">No products found for &quot;{slug}&quot;</p>
    );
  }

  return (
    <div className="body-dark-bg">
      <div className="fix">
        <PageHeader title={matchedCategory.page_name} />
        <Brand category={matchedCategory} />
        {/* 🔽 Bootstrap 5 Styled Note Section */}
      </div>
    </div>
  );
}

import Brand from "~/components/Section/Common/Brand/brand";
import CtaThree from "~/components/Section/Common/Cta/CtaThree";
import data from "~/db/brands.json";
import PageHeader from "~/components/Section/Common/PageHeader";

// ✅ App Router: receive `params` from the URL
export default function Page({ params }) {
  const { slug } = params;

  // Match slug with data
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
      </div>
    </div>
  );
}

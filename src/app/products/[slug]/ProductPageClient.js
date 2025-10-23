"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import PageHeader from "~/components/Section/Common/PageHeader";
import Product from "~/components/Section/Product/Product";

export default function ProductPageClient({ initialCategory }) {
  const { slug } = useParams();
  const router = useRouter();
  const [category, setCategory] = useState(initialCategory);

  // Fetch data if not already loaded
  useEffect(() => {
    if (!category) {
      const fetchData = async () => {
        const res = await fetch("/data/products.json", { cache: "no-store" });
        const data = await res.json();
        const found = data.find((cat) => cat.slug === slug);
        setCategory(found);
      };
      fetchData();
    }
  }, [slug, category]);

  // Detect slug change and force full reload
  useEffect(() => {
    const handleSlugChange = () => {
      if (initialCategory && initialCategory.slug !== slug) {
        // Trigger full page reload to ensure generateMetadata runs
        window.location.href = `/products/${slug}`;
      }
    };
    handleSlugChange();
  }, [slug, initialCategory]);

  if (!category) {
    return <p className="text-center">Loading or not found...</p>;
  }

  return (
    <div className="body-dark-bg">
      <div className="fix">
        <PageHeader title={category.page_name} />
        <Product category={category} />
      </div>
    </div>
  );
}

"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import PageHeader from "~/components/Section/Common/PageHeader";
import Product from "~/components/Section/Product/Product";

export default function Page() {
  const { slug } = useParams(); // ✅ This is allowed in a client component
  const [category, setCategory] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data/products.json");
      const data = await res.json();
      const found = data.find((cat) => cat.slug === slug);
      setCategory(found);
    };
    fetchData();
  }, [slug]);

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

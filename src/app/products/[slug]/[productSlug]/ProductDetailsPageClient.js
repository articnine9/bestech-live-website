"use client";

import PageHeader from "~/components/Section/Common/PageHeader";
import DetailsSection from "@/components/Section/ProjectDetails/DetailsSection";

export default function ProductDetailsPageClient({ product, category }) {
  const slug = category.slug;

  return (
    <>
      <PageHeader title={product?.name || "Product Not Found"} 
      breadcrumbs={[
    {
      label: "Products",
      href: "/products",
    },
    {
      label: category?.page_name,
      href: `/products/${slug}`,
    },
    {
      label: product?.name,
    },
  ]}/>
      <DetailsSection product={product} category={category} />
    </>
  );
}

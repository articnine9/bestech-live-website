"use client";

import { useParams } from "next/navigation";
import PageHeader from "~/components/Section/Common/PageHeader";
import data from "~/db/products.json";
import DetailsSection from "@/components/Section/ProjectDetails/DetailsSection";

export default function ProductDetailsPageClient() {
  const { slug, productSlug } = useParams();

  const category = data.find((cat) => cat.slug === slug);
  const product =
    category?.items?.find(
      (item) => item.url?.split("/").pop() === productSlug
    ) || null;

  return (
    <>
      <PageHeader title={product?.name || "Product Not Found"} />
      <DetailsSection product={product} category={category} />
    </>
  );
}

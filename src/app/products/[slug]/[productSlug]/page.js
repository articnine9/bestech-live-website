"use client";

import { useParams } from "next/navigation";
import PageHeader from "~/components/Section/Common/PageHeader";
import data from "~/db/products.json";
import ProjectSection from "@/components/Section/ProjectDetails/ProjectSection";
import DetailsSection from "@/components/Section/ProjectDetails/DetailsSection";

export default function Page() {
  const params = useParams();
  const { slug, productSlug } = params;

  // Find the category by slug
  const category = data.find((cat) => cat.slug === slug);

  // Find the product by productSlug
  const product =
    category?.items?.find((item) => {
      const urlSlug = item.url?.split("/").pop(); // get last part of URL
      return urlSlug === productSlug;
    }) || null;

  return (
    <>
      <PageHeader title={product?.name || "Product Not Found"} />

      {/* <section className="padding">
        <div className="container">
          {product ? (
            <>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>
                <strong>Code:</strong> {product.code}
              </p>
            </>
          ) : (
            <p>Product not found for this URL.</p>
          )}
        </div>
      </section> */}
      <DetailsSection product={product} category={category} />
      {/* <ProjectSection /> */}
    </>
  );
}

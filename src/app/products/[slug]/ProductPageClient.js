"use client";

import PageHeader from "~/components/Section/Common/PageHeader";
import Product from "~/components/Section/Product/Product";

export default function ProductPageClient({ initialCategory }) {
  const category = initialCategory;

  return (
    <div className="body-dark-bg">
      <div className="fix">
     <PageHeader
  title={category.page_name}
  breadcrumbs={[
    { label: "Products", href: "/products" },
    { label: category.page_name }
  ]}
/>
        <Product key={category.slug} category={category} />
      </div>
    </div>
  );
}

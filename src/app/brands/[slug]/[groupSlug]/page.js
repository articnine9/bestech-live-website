"use client";

import { useParams, notFound } from "next/navigation";
import BrandCardFour from "@/components/Ui/Cards/BrandCardFour";
import data from "@/db/brands.json";
import PageHeader from "~/components/Section/Common/PageHeader";

export default function Page() {
  const params = useParams();
  const { slug, groupSlug } = params || {};

  if (!slug || !groupSlug) return notFound();

  const brand = data.find((b) => b.slug === slug);
  if (!brand || !Array.isArray(brand.groups)) return notFound();

  const group = brand.groups.find((g) => g.slug === groupSlug);
  if (!group) return notFound();

  return (
    <>
      <PageHeader title={`${group.group_name} - ${brand.page_name}`} />
      <section className="container padding">
        <BrandCardFour items={group.items} productcode={brand.code} />
      </section>
    </>
  );
}

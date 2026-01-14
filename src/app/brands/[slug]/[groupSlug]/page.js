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

      {/* ✅ PRODUCT LIST */}
      <section className="container padding pb-120">
        <BrandCardFour items={group.items} productcode={brand.code} />
        {/* ✅ SEO CONTENT SECTION (ONLY IF AVAILABLE) */}
        {group.paragraph_text && (
          <section className="container padding">
            <div
              className="seo-content flex flex-col gap-[10px] pb-[200px]"
              dangerouslySetInnerHTML={{ __html: group.paragraph_text }}
            />
          </section>
        )}
      </section>
    </>
  );
}

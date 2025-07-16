"use client";

import BlogCardFour from "@/components/Ui/Cards/BlogCardFour";
import CategoriesCard from "~/components/Ui/Cards/CategoriesCard";
const menuData = {
  categories: [
    {
      name: "Hyundai Parts",
      slug: "hyundai",
      code: "HY",
    },
    {
      name: "KONE Parts",
      slug: "kone",
      code: "KN",
    },
    {
      name: "Mitsubishi Parts",
      slug: "mitsubishi",
      code: "MI",
    },
    {
      name: "Otis Parts",
      slug: "otis",
      code: "OT",
    },
    {
      name: "Schindler Parts",
      slug: "schindler",
      code: "SH",
    },
    {
      name: "Thyssenkrupp Parts",
      slug: "thyssenkrupp",
      code: "TK",
    },
    {
      name: "STEP Parts",
      slug: "step",
      code: "ST",
    },
    {
      name: "Monarch Parts",
      slug: "monarch",
      code: "MO",
    },
  ],
};
const Brand = ({ category }) => {
  const { slug, page_name, code, items = [] } = category;
  return (
    <section
      className="blog-two blog-two--three blog-two--three--blog padding"
      id="blog-cta"
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-3">
            <CategoriesCard menuName={menuData} parentLink={"brands"} />
          </div>

          <div className="col-xl-9">
            <BlogCardFour items={items} productcode={code} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brand;

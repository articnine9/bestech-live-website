"use client";

import BrandCardFour from "@/components/Ui/Cards/BrandCardFour";
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
      <section className="container">
        <div className="alert alert-warning" role="alert">
          <strong>Note:</strong> This is a general reference list of popular
          spare parts and part numbers used globally across major elevator
          brands. We are not affiliated with the listed manufacturers and all
          items and part numbers are used solely for cross-reference and
          informational purposes.
        </div>
      </section>
      <div className="container">
        <div className="row">
          <div className="col-xl-3">
            <CategoriesCard menuName={menuData} parentLink={"brands"} />
          </div>

          <div className="col-xl-9">
            <BrandCardFour items={items} productcode={code} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brand;

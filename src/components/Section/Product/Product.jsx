"use client";

import BlogCardFour from "@/components/Ui/Cards/BlogCardFour";
import CategoriesCard from "~/components/Ui/Cards/CategoriesCard";
const menuData = {
  categories: [
    {
      name: "Electrical",
      slug: "electrical",
      code: "BS-EL",
    },
    {
      name: "Mechanical",
      slug: "mechanical",
      code: "BS-ME",
    },
    {
      name: "Cables and wires",
      slug: "cables-and-wires",
      code: "BS-CW",
    },
    {
      name: "Contactors",
      slug: "contactors",
      code: "BS-CT",
    },
    {
      name: "Circuit breakers",
      slug: "circuit-breakers",
      code: "BS-CB",
    },
    {
      name: "Buttons",
      slug: "buttons",
      code: "BS-BT",
    },
    {
      name: "Switches",
      slug: "switches",
      code: "BS-SW",
    },
    {
      name: "Cabinet set",
      slug: "cabinet-set",
      code: "BS-CS",
    },
    {
      name: "Encoders",
      slug: "encoders",
      code: "BS-EN",
    },
    {
      name: "Door Locks",
      slug: "door-locks",
      code: "BS-DL",
    },
    {
      name: "Door wheels",
      slug: "door-wheels",
      code: "BS-DW",
    },
    {
      name: "Sensors",
      slug: "sensors",
      code: "BS-SR",
    },
    {
      name: "Guide shoes",
      slug: "guide-shoes",
      code: "BS-GS",
    },
    {
      name: "Door sliders",
      slug: "door-sliders",
      code: "BS-DS",
    },
    {
      name: "Inverters",
      slug: "inverters",
      code: "BS-IN",
    },
    {
      name: "ARD",
      slug: "ard",
      code: "BS-AR",
    },
    {
      name: "Door drives",
      slug: "door-drives",
      code: "BS-DD",
    },
    {
      name: "Signalization",
      slug: "signalization",
      code: "BS-SG",
    },
    {
      name: "Displays",
      slug: "displays",
      code: "BS-DI",
    },
    {
      name: "PCB Boards",
      slug: "pcb-boards",
      code: "BS-PB",
    },
    {
      name: "Tool kits",
      slug: "tool-kits",
      code: "BS-TL",
    },
    {
      name: "Keys",
      slug: "keys",
      code: "BS-KY",
    },
  ],
};
const Product = ({ category }) => {
  const { slug, page_name, code, items = [] } = category;
  return (
    <section
      className="blog-two blog-two--three blog-two--three--blog padding"
      id="blog-cta"
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-3">
            <CategoriesCard menuName={menuData} />
          </div>

          <div className="col-xl-9">
            <BlogCardFour items={items} productcode={code} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;

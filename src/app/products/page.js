import Link from "next/link";
import PageHeader from "~/components/Section/Common/PageHeader";

// ✅ Metadata
export const metadata = {
  title: "All Elevator Spare Parts | Bestech Parts UAE",
  description:
    "Browse all elevator spare parts including door systems, control systems, electrical and other components across UAE.",
};

// ✅ Categories with links
const categories = [
  {
    title: "Electrical Components",
    image: "/img/product-default-img.jpg",
    link: "electrical",
    items: [
      { name: "Electrical", link: "electrical" },
      { name: "Mechanical", link: "mechanical" },
      { name: "Cables and wires", link: "cables-wires" },
      { name: "Contactors", link: "contactors" },
      { name: "Circuit breakers", link: "circuit-breakers" },
      { name: "Switches", link: "switches" },
    ],
  },
  {
    title: "Door Systems",
    image: "/img/product-default-img.jpg",
    link: "door-systems",
    items: [
      { name: "Door Locks", link: "door-locks" },
      { name: "Door wheels", link: "door-wheels" },
      { name: "Guide shoes", link: "guide-shoes" },
      { name: "Door sliders", link: "door-sliders" },
      { name: "Door drives", link: "door-drives" },
    ],
  },
  {
    title: "Control Systems",
    image: "/img/product-default-img.jpg",
    link: "control-systems",
    items: [
      { name: "Buttons", link: "buttons" },
      { name: "Sensors", link: "sensors" },
      { name: "Inverters", link: "inverters" },
      { name: "ARD", link: "ard" },
      { name: "Signalization", link: "signalization" },
    ],
  },
  {
    title: "Other Components",
    image: "/img/product-default-img.jpg",
    link: "other",
    items: [
      { name: "Encoders", link: "encoders" },
      { name: "Cabinet set", link: "cabinet-set" },
      { name: "Displays", link: "displays" },
      { name: "PCB Boards", link: "pcb-boards" },
      { name: "Tool kits", link: "tool-kits" },
      { name: "Keys", link: "keys" },
    ],
  },
];

export default function ProductsPage() {
  return (
    <div className="body-dark-bg">
      <div className="fix">
        {/* Page Header */}
        <PageHeader title="Products" />

        {/* Products Section */}
        <section className="container pt-5">
          <div className="row">
            {categories.map((item, index) => (
              <div className="col-lg-3 col-md-6 col-12 mb-4" key={index}>
                <div className="blog-two__single">
                  {/* Category Image */}
                  <Link href={`/products/${item.link}`}>
                    <div className="blog-two__single-img">
                      <div className="inner">
                        <img src={item.image} alt={item.title} />
                      </div>
                    </div>
                  </Link>

                  {/* Content */}
                  <div className="blog-two__single-content">
                    <h2>
                      <Link href={`/products/${item.link}`}>{item.title}</Link>
                    </h2>

                    {/* ✅ Sub Items with Links */}
                    <ul className="mb-3">
                      {item.items.map((sub, i) => (
                        <li key={i} className="d-flex align-items-center gap-2">
                          <span className="icon-right-arrow-5"></span>
                          <Link href={`/products/${sub.link}`}>{sub.name}</Link>
                        </li>
                      ))}
                    </ul>

                    {/* Button */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";
import BlogCardThree from "~/components/Ui/Cards/BlogCardThree";
import data from "~/db/blogsData.json";
import { FaFolderOpen, FaClock, FaArrowRight, FaSearch,FaBox  } from "react-icons/fa";

const categories = [
  "Elevator Buttons",
  "Elevator Contactors",
  "Control Panels",
  "Cables and Wires",
  "Circuit Breakers",
  "Elevator Inverters",
  "Door Systems",
  // "Sensors & Switches",
  "Safety Devices",
  // "Passenger Elevators",
  // "Freight Elevators",
  // "Residential Elevators",
  // "Hospital / Medical Elevators",
  // "Dumbwaiters",
  "Elevator Spare Parts"
];

const productcategories = [
  {
    title: "Electrical Components",
    image: "/img/product-default-img.jpg",
    link: "electrical",
    items: [
      { name: "Electrical", link: "electrical" },
      { name: "Mechanical", link: "mechanical" },
      { name: "Cables and wires", link: "cables-and-wires" },
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
      { name: "Door drives", link: "door-drives-and-motors" },
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

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  

  // Filter posts based on title or description
  const filteredData = data.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.description &&
        item.description.toLowerCase().includes(searchTerm.toLowerCase())),
  );

  return (
    <div>
      <section
        className="blog-two blog-two--three blog-two--three--blog padding"
        id="blog-cta"
      >
        <div className="container">
          <div className="row">
            {/* Main Blog Posts */}
            <div className="col-lg-9">
              <div className="row">
                {filteredData.length > 0 ? (
                  filteredData.map((item, index) => (
                    <BlogCardThree item={item} key={index} />
                  ))
                ) : (
                  <p>No blog posts found for &quot;{searchTerm}&quot;</p>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-3">
              <aside className="sidebar">
                {/* Search Box */}
                <div className="card mb-4 p-3 shadow-sm">
                  <h2 className="card-title mb-2 d-flex align-items-center gap-1">
                    <FaSearch className="text-blue-600" /> Search
                  </h2>
                  <hr className="my-2 border-gray-300" />
                  <input
                    type="text"
                    placeholder="Search posts..."
                    className="form-control"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

                {/* Categories Box */}
                <div className="card mb-4 p-3 shadow-sm">
                  <h2 className="card-title mb-2 d-flex align-items-center gap-1">
                    <FaFolderOpen className="text-blue-600" /> Categories
                  </h2>
                  <hr className="my-2 border-gray-300" />
                  <ul className="list-unstyled mb-0">
                    {categories.map((cat, index) => (
                      <li
                        key={index}
                        className="d-flex align-items-center gap-2"
                      >
                        <FaArrowRight size={14} color="#004b83" />
                        {/* <p className="text-blue-600 hover:underline">{cat}</p> */}
                        <Link
                          href={`/blog/category/${cat
                            .toLowerCase()
                            .replace(/ /g, "-")}`}
                          className="text-blue-600 hover:underline"
                        >
                          {cat}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Recent Posts Box */}
                <div className="card mb-4 p-3 shadow-sm">
                  <h2 className="card-title mb-2 d-flex align-items-center gap-1">
                    <FaClock className="text-blue-600" /> Recent Posts
                  </h2>
                  <hr className="my-2 border-gray-300" />
                  <ul className="list-unstyled mb-0">
                    {data.slice(0, 5).map((post, index) => (
                      <li
                        key={index}
                        className="d-flex align-items-start gap-2"
                      >
                        <FaArrowRight size={35} color="#004b83" />
                        <Link
                          href={`/blog/${post.link}`}
                          className="text-blue-600 hover:underline"
                        >
                          {post.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Products */}
                <div className="card mb-4 p-3 shadow-sm">
                  <h2 className="card-title mb-2 d-flex align-items-center gap-1">
                    <FaBox className="text-blue-600" /> Our Products
                  </h2>
                   <hr className="my-2 border-gray-300" />
                     {productcategories.map((item, index) => (
              <div key={index}>
                <div className="blog-two__single">

                  {/* Content */}
                  <div className="blog-two__single-content">
                    <h2>
                      <Link href={`/products/${item.link}`}>{item.title}</Link>
                    </h2>

                    {/* ✅ Sub Items with Links */}
                    <ul className="mb-1">
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

              </aside>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;

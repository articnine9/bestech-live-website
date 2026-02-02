"use client";

import Link from "next/link";
import { useState } from "react";
import BlogCardThree from "~/components/Ui/Cards/BlogCardThree";
import data from "~/db/blogsData.json";
import { FaFolderOpen, FaClock, FaArrowRight, FaSearch } from "react-icons/fa";

const categories = [
  "Motors & Drives",
  "Control Panels",
  "Door Systems",
  "Sensors & Switches",
  "Safety Devices",
  "Passenger Elevators",
  "Freight Elevators",
  "Residential Elevators",
  "Hospital / Medical Elevators",
  "Dumbwaiters",
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
                        className="mb-2 d-flex align-items-center gap-1"
                      >
                        <FaArrowRight className="mr-2 text-gray-500" />
                        <p className="text-blue-600 hover:underline">{cat}</p>
                        {/* <Link
                          href={`/category/${cat
                            .toLowerCase()
                            .replace(/ /g, "-")}`}
                          className="text-blue-600 hover:underline"
                        >
                          {cat}
                        </Link> */}
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
                        className="mb-2 d-flex align-items-center gap-1"
                      >
                        <FaArrowRight className="mr-2 text-gray-500" />
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
              </aside>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;

"use client";

import { useState } from "react";
import PageHeader from "~/components/Section/Common/PageHeader";
import data from "~/db/blogsData.json";
import BlogCardThree from "~/components/Ui/Cards/BlogCardThree";
import { FaClock, FaArrowRight } from "react-icons/fa";
import Link from "next/link";

export default function CategoryClient({ categoryParam }) {
  const categoryName = categoryParam
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const [searchTerm, setSearchTerm] = useState("");

  const filteredBlogs = data.filter(
    (blog) =>
      blog.category === categoryName &&
      blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const recentPosts = data.slice(0, 5);

  return (
    <>
      <PageHeader title={categoryName || "Category Not Found"} />

      <section className="blog-details padding">
        <div className="container">
          <h2 className="mb-4">Category: {categoryName}</h2>

          {/* Search */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search posts in this category..."
              className="form-control"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="row">
            {/* Blog List */}
            <div className="col-lg-8">
              <div className="row">
                {filteredBlogs.length > 0 ? (
                  filteredBlogs.map((blog, index) => (
                    <BlogCardThree key={index} item={blog} />
                  ))
                ) : (
                  <p>No posts found in this category.</p>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              <aside className="sidebar">
                <div className="card mb-4 p-3 shadow-sm">
                  <h5 className="card-title mb-2 d-flex align-items-center gap-1">
                    <FaClock className="text-blue-600" /> Recent Posts
                  </h5>
                  <hr className="my-2 border-gray-300" />
                  <ul className="list-unstyled mb-0">
                    {recentPosts.map((post, index) => (
                      <li key={index} className="mb-2 d-flex align-items-center gap-1">
                        <FaArrowRight className="text-gray-500" />
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
    </>
  );
}

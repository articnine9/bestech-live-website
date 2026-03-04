"use client";

import { useState } from "react";
import Link from "next/link";
import Script from "next/script"; // ✅ ADD THIS
import data from "~/db/blogsData.json";
import PageHeader from "~/components/Section/Common/PageHeader";
import {
  FaFolderOpen,
  FaClock,
  FaArrowRight,
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

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

export default function BlogContent({ slug }) {
  const blog = data.find((item) => item.link === slug);
  const [searchTerm, setSearchTerm] = useState("");
  const recentPosts = data.slice(0, 5);
  const currentURL = typeof window !== "undefined" ? window.location.href : "";

  if (!blog) {
    return (
      <section className="padding">
        <div className="container text-center">
          <h2>Blog Not Found</h2>
          <p>No article matches the requested URL: {slug}</p>
        </div>
      </section>
    );
  }

  const relatedPosts = data
    .filter((post) => post.link !== blog.link)
    .slice(0, 3);

  return (
    <>
      {/* ✅ FAQ SCHEMA — PAGE SPECIFIC */}
      {blog?.faq?.length > 0 && (
        <Script
          id="faq-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: blog.faq.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.answer.replace(/<[^>]*>?/gm, ""),
                },
              })),
            }),
          }}
        />
      )}

      <PageHeader title={blog.title} />

      <section className="blog-details padding" id="blog-cta">
        <div className="container">
          {/* Breadcrumb */}
          <nav aria-label="breadcrumb" className="mb-4">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link href="/" className="text-decoration-none">
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item">
                <Link href="/blog" className="text-decoration-none">
                  Blog
                </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {blog.title}
              </li>
            </ol>
          </nav>
        </div>

        <div className="container">
          <div className="row justify-content-start">
            {/* Main Blog */}
            <div className="col-xl-9">
              <div className="blog-details__content">
                <div className="blog-standard-page__single">
                  <div className="blog-standard-page__single-img mb-3">
                    <img
                      src={blog.image}
                      alt={blog.alttext ? blog.alttext : blog.title}
                      className="img-fluid"
                    />
                  </div>

                  <div className="blog-standard-page__single-content">
                    {blog.paragraph.map((item, index) => (
                      <div
                        key={index}
                        dangerouslySetInnerHTML={{ __html: item }}
                        className="mb-3"
                      />
                    ))}

                    {/* Social Share */}
                    <div className="blog-share mt-4">
                      <h2 className="mb-2">Share this post:</h2>
                      <div className="d-flex gap-2 flex-wrap">
                        <button
                          className="btn btn-primary"
                          onClick={() =>
                            window.open(
                              `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                                currentURL,
                              )}`,
                              "_blank",
                            )
                          }
                        >
                          <FaFacebookF />
                        </button>

                        <button
                          className="btn btn-info text-white"
                          onClick={() =>
                            window.open(
                              `https://twitter.com/intent/tweet?url=${encodeURIComponent(
                                currentURL,
                              )}&text=${encodeURIComponent(blog.title)}`,
                              "_blank",
                            )
                          }
                        >
                          <FaXTwitter />
                        </button>

                        <button
                          className="btn btn-secondary"
                          onClick={() =>
                            window.open(
                              `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                                currentURL,
                              )}`,
                              "_blank",
                            )
                          }
                        >
                          <FaLinkedinIn />
                        </button>

                        <button
                          className="btn btn-success"
                          onClick={() =>
                            window.open(
                              `https://api.whatsapp.com/send?text=${encodeURIComponent(
                                blog.title + " " + currentURL,
                              )}`,
                              "_blank",
                            )
                          }
                        >
                          <FaWhatsapp />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Related Posts */}
                <div className="related-posts mt-5">
                  <h2 className="mb-3">Related Posts</h2>
                  <div className="row">
                    {relatedPosts.map((post, index) => (
                      <div key={index} className="col-md-4 mb-3">
                        <div className="card h-100 shadow-sm">
                          <img
                            src={post.image}
                            className="card-img-top"
                            alt={post.alttext || post.title}
                          />

                          <div className="card-body">
                            <h3 className="card-title">
                              <Link
                                href={`/blog/${post.link}`}
                                className="text-decoration-none"
                              >
                                {post.title}
                              </Link>
                            </h3>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-xl-3">
              <aside className="sidebar">
                {/* Categories */}
                <div className="card mb-4 p-3 shadow-sm">
                  <p className="card-title mb-2 d-flex align-items-center gap-1">
                    <FaFolderOpen /> Categories
                  </p>
                  <ul className="list-unstyled mb-0">
                    {categories.map((cat, index) => (
                      <li key={index}>
                        <Link
                          href={`/category/${cat
                            .toLowerCase()
                            .replace(/ /g, "-")}`}
                        >
                          {cat}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Recent Posts */}
                <div className="card mb-4 p-3 shadow-sm">
                  <p className="card-title mb-2 d-flex align-items-center gap-1">
                    <FaClock /> Recent Posts
                  </p>
                  <ul className="list-unstyled mb-0">
                    {recentPosts.map((post, index) => (
                      <li key={index}>
                        <Link href={`/blog/${post.link}`}>{post.title}</Link>
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

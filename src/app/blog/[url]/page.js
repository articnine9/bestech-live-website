"use client";
import { useParams } from "next/navigation";
import PageHeader from "~/components/Section/Common/PageHeader";
import Link from "next/link";
import data from "~/db/blogsData.json";
import LatestBlogCard from "~/components/Ui/Cards/LatestBlogCard";

export default function Page() {
  const params = useParams();
  const slug = params.url; // Slug from URL

  // Find the blog data based on URL slug
  const blog = data.find((item) => item.link === slug);

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

  return (
    <>
      <PageHeader title={blog.title} />

      <section className="blog-details padding" id="blog-cta">
        <div className="container">
          <div className="row">
            {/* Main Blog Content */}
            <div className="col-xl-8">
              <div className="blog-details__content">
                <div className="blog-standard-page__single">
                  <div className="blog-standard-page__single-img">
                    <img src={blog.image} alt={blog.title} />
                  </div>
                  <div className="blog-standard-page__single-content">
                    <ul className="meta-box">
                      <li>
                        <i className="icon-user1"></i> By {blog.author}
                      </li>
                      <li>
                        <i className="icon-date"></i> {blog.date}
                      </li>
                    </ul>
                    <h2>{blog.title}</h2>

                    <p>{blog.paragraph}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-xl-4">
              <div className="sidebar">
                <LatestBlogCard />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

"use client";

import { useEffect } from "react";
import "wowjs/css/libs/animate.css";
import data from "~/db/blogsData.json";
import Link from "next/link";

const LatestBlogCard = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("wowjs").then((WOW) => {
        const wow = new WOW.WOW();
        wow.init();
      });
    }
  }, []);

  return (
    <div
      className="sidebar__single sidebar__latest-post wow fadeInUp"
      data-wow-delay="0ms"
      data-wow-duration="1500ms"
    >
      <div className="title-box">
        <h2>Latest Post</h2>
      </div>
      <ul className="sidebar__latest-post-list">
        {data.slice(0, 4).map((item, index) => (
          <li key={index}>
            <div className="img-box">
              <img src={item.image} alt={item.title} />
            </div>

            <div className="text-box">
              <p>
                {item.category} - {item.date}
              </p>
              <h3>
                <Link href={`/blog/${item.link}`}>{item.title}</Link>
              </h3>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LatestBlogCard;

/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client";
import Link from "next/link";
import { useState } from "react";
import ProjectInfoCard from "~/components/Ui/Cards/ProjectInfoCard";

const DetailsSection = ({ product, category }) => {
  return (
    <section className={`project-details-page padding`}>
      <style jsx>{`
        .zindex-50 {
          z-index: 999;
        }
        .zindex-1 {
          z-index: 3;
        }
      `}</style>
      <div className="container">
        <div className="row">
          {/* <!--Start Services Details Page Content--> */}
          <div className="col-xl-8">
            <div className="services-details-page__content">
              <div className="services-details-page__content-img1">
                <img src="/img/project/project-details-img1.jpg" alt="#" />
              </div>

              <div className="services-details-page__content-text1">
                {/* <div className="top-text">
                  <div className="icon">
                    <span className="icon-ocean-freight1"></span>
                  </div>

                  <div className="title">
                    <h2>Transport for Product</h2>
                  </div>
                </div> */}
                {/* <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  packages and web page editors now use Lorem Ipsum as their
                  default model.
                </p>

                <p>
                  Packages and web page editors now use Lorem Ipsum as their
                  default model textlayout. The point of using are Ipsum is that
                  it has a more-or-less normal distribution of letters, as
                  opposed to using 'Content here content normal distribution of
                  letters as opposed to here making readable making.
                </p> */}
              </div>
            </div>
          </div>
          {/* <!--End Services Details Page Content--> */}

          {/* <!--Start Project Details Sidebar--> */}
          <div className="col-xl-4">
            <ProjectInfoCard product={product} category={category} />
          </div>
          {/* <!--End Project Details Sidebar--> */}
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;

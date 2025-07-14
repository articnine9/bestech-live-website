/* eslint-disable react/no-unescaped-entities */

"use client";
import { useState } from "react";
import Link from "next/link";
import BrochureCard from "~/components/Ui/Cards/BrochureCard";
import QuestionCard from "~/components/Ui/Cards/QuestionCard";

const ServiceDetails = ({ title, transportType, thumbnailOne, thumbnailTwo }) => {
  const [popup, setPopup] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const openPopup = () => {
    setPopup(true);
    const iframe = document.getElementById("youtube-video");
    if (iframe) {
      iframe.src = "https://www.youtube.com/embed/6mkoGSqTqFI?si=2kJDQsAvj9HLTUCe";
    }
    setIsActive(true);
    document.body.classList.add('disable-scroll');
  };
  const closePopup = () => {
    setPopup(false);
    const iframe = document.getElementById("youtube-video");
    if (iframe) {
      iframe.src = "";
    }
    setIsActive(false);
    document.body.classList.remove('disable-scroll');
  };
  return (
    <section className="services-details-page padding" id="blog-cta">
      <div className="container">
        <div className="row">
          <div className="col-xl-8">
            <div className="services-details-page__content">
              <div className="services-details-page__content-img1">
                <img src={thumbnailOne} alt="#" />
              </div>

              <div className="services-details-page__content-text1">
                <div className="top-text">
                  <div className="icon">
                    {(() => {
                      if (transportType === "road") {
                        return <span className="icon-road-transport mt"></span>;
                      } else if (transportType === "air") {
                        return <span className="icon-air-transport mt"></span>;
                      } else if (transportType === "cargo") {
                        return <span className="icon-experience mt"></span>;
                      } else if (transportType === "ocean") {
                        return <span className="icon-ocean-freight1 mt"></span>;
                      } else if (transportType === "rail") {
                        return (
                          <span className="icon-ready-to-go-your-goods mt"></span>
                        );
                      } else if (transportType === "warehousing") {
                        return <span className="icon-warehousing"></span>;
                      } else {
                        return <span className="icon-road-transport mt"></span>;
                      }
                    })()}
                  </div>

                  <div className="title">
                    <h2>{title}</h2>
                  </div>
                </div>
                <p>
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
                </p>
              </div>

              <div className="services-details-page__content-text2">
                <div className="title-box">
                  <h2>Benefit of Service</h2>
                  <p>
                    Readable and Packages editors now use Lorem Ipsum as their
                    default model textlayout. The point of using the some is
                    that it has a more-or-less normal distribution of letters as
                    opposed to using.
                  </p>
                </div>

                <div className="row">
                  <div className="col-xl-4 col-lg-4 col-md-4">
                    <div className="services-details-page__content-text2-single text-center">
                      <div className="icon-box">
                        <span className="icon-checked-2"></span>
                      </div>
                      <div className="text">
                        <h4>
                          Packages and Web <br /> Page Editors
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-4">
                    <div className="services-details-page__content-text2-single text-center">
                      <div className="icon-box">
                        <span className="icon-checked-2"></span>
                      </div>
                      <div className="text">
                        <h4>
                          Professional and <br /> Dedicated Team
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-4">
                    <div className="services-details-page__content-text2-single text-center">
                      <div className="icon-box">
                        <span className="icon-checked-2"></span>
                      </div>
                      <div className="text">
                        <h4>
                          Trusted Construction <br /> Agency
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="services-details-page__content-text3">
                <div className="title-box">
                  <h2>How it Work</h2>
                  <p>
                    Readable and Packages editors now use Lorem Ipsum as their
                    default model textlayout. The point of using the some is
                    that it has a more-or-less normal distribution of letters as
                    opposed to using.
                  </p>
                </div>

                <div className="services-details-page__content-text3-img">
                  <div className="shape1">
                    <img src="/img/shape/services-details-shape1.png" alt="" />
                  </div>
                  <div className="inner">
                    <img src={thumbnailTwo} alt="#" />
                    <div className="services-details-page__content-text3-img-video">
                      <a
                        className="video-btn video-popup"
                        onClick={openPopup}
                      >
                        <span className="txt">Play</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="services-details-page__pagination margin-top">
                <div className="single-box">
                  <div className="icon-box">
                    <span className="icon-air-transport"></span>
                  </div>
                  <div className="text-box">
                    <p>
                      <Link href="air-transport">
                        <span className="icon-up-right-arrow"></span> Previous
                      </Link>
                    </p>
                    <h2>
                      <Link href="air-transport">Air Transport</Link>
                    </h2>
                  </div>
                </div>

                <div className="single-box style2">
                  <div className="text-box">
                    <p>
                      <Link href="ocean-freight">
                        Next <span className="icon-up-right-arrow"></span>
                      </Link>
                    </p>
                    <h2>
                      <Link href="ocean-freight">Ocean Transport</Link>
                    </h2>
                  </div>
                  <div className="icon-box">
                    <span className="icon-ocean-freight1 fs"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-4">
            <div className="sidebar">
              <div
                className="sidebar__single sidebar__search wow fadeInUp"
                data-wow-delay=".1s"
              >
                <div className="title-box">
                  <h2>Search</h2>
                </div>
                <form action="#" className="sidebar__search-form">
                  <input type="search" placeholder="Search Here..." />
                  <button type="submit">
                    <i className="icon-magnifying-glass"></i>
                  </button>
                </form>
              </div>
              <div
                className="sidebar__single sidebar__services wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="title-box">
                  <h2>Services List</h2>
                </div>
                <ul className="sidebar__services-list">
                  <li>
                    <Link
                      className={`${transportType === "road" ? "active" : ""}`}
                      href="road-transport"
                    >
                      Road Transport
                      <span className="icon-right-arrow-5"></span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`${transportType === "air" ? "active" : ""}`}
                      href="air-transport"
                    >
                      Air Transport <span className="icon-right-arrow-5"></span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`${transportType === "cargo" ? "active" : ""}`}
                      href="cargo-transport"
                    >
                      Cargo Transport
                      <span className="icon-right-arrow-5"></span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`${transportType === "ocean" ? "active" : ""}`}
                      href="ocean-freight"
                    >
                      Ocean Freight <span className="icon-right-arrow-5"></span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`${transportType === "rail" ? "active" : ""}`}
                      href="rail-transport"
                    >
                      Rail Transport
                      <span className="icon-right-arrow-5"></span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`${transportType === "warehousing" ? "active" : ""
                        }`}
                      href="warehousing"
                    >
                      Warehousing <span className="icon-right-arrow-5"></span>
                    </Link>
                  </li>
                </ul>
              </div>
              {/* <!--End Sidebar Single--> */}
              <BrochureCard />
              <QuestionCard />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`popup-video ${popup ? "popup" : "popdown"}`}
        onClick={closePopup}
      >
        <div className={`video-wrapper ${isActive ? 'active' : ''}`}>
          <iframe
            id="youtube-video"
            className="video"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/6mkoGSqTqFI?si=2kJDQsAvj9HLTUCe"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <button className="mfp-close" onClick={closePopup}>×
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;

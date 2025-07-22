"use client";
import React from "react";
import Link from "next/link";
import ScrollToTop from "react-scroll-to-top";

import BrandLogo from "@/components/Ui/Logo/BrandLogo";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer-one ">
      <ScrollToTop
        smooth
        top="80"
        color="white"
        style={{
          backgroundColor: "#FFD550",
          "&:hover": { backgroundColor: "#186265" },
        }}
      />
      <div
        className="footer-one__bg"
        style={{ backgroundImage: "url(/img/footer/footer-bg.jpg)" }}
      ></div>
      <div className="footer-main padding">
        <div className="container">
          <div className="footer-one__top">
            <div className="footer-one__top-inner">
              <div className="logo-box">
                <Link href="/">
                  <BrandLogo imageSrc="/img/bestect-white-logo.png" />
                </Link>
              </div>
              <div className="footer-one__top-right">
                <div className="text">
                  <p className="text-white">
                    Stay updated with the latest in elevator technology, spare
                    parts, and special offers. <br />
                    Join our mailing list for insights and exclusive deals.
                  </p>
                </div>
                <div className="footer-one__top-subscribe">
                  <div className="btn-box">
                    <Link className="thm-btn" href="contact">
                      <span className="txt"> Get Quote</span>
                      <i className="icon-right-arrow"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-main__bottom padding-top">
            <div className="row">
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".1s"
              >
                <div className="single-footer-widget footer-widget__about">
                  <div className="title">
                    <h2>About Company</h2>
                  </div>

                  <div className="footer-widget__about-inner">
                    <p className="text1">
                      At BESTECH, we specialize in supplying premium elevator
                      spare parts across the UAE. With a strong focus on
                      reliability, quality, and customer satisfaction, we serve
                      residential, commercial, and industrial sectors with
                      expert support and fast delivery.
                    </p>
                    <p className="text2">Working Hours</p>
                    <p className="text3">Mon – Sat: 10:00 AM to 07:30 PM</p>

                    <div className="footer-social-link">
                      <Link
                        href="https://www.facebook.com/bestech.spareparts"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="icon-facebook"></span>
                      </Link>
                      <Link
                        href="https://www.instagram.com/bestech_spareparts/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="icon-instagram"></span>
                      </Link>
                      <Link
                        href="https://www.linkedin.com/company/bes-tech-elevators-spare-parts/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="icon-linkedin"></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="single-footer-widget footer-widget__links">
                  <div className="title">
                    <h2>Our Product</h2>
                  </div>

                  <div className="footer-widget__links-box">
                    <ul>
                      <li>
                        <Link href="#">Electrical</Link>
                      </li>
                      <li>
                        <Link href="#">Mechanical</Link>
                      </li>
                      <li>
                        <Link href="#">Cables and Wires</Link>
                      </li>
                      <li>
                        <Link href="#">Contactors</Link>
                      </li>
                      <li>
                        <Link href="#">Circuit Breakers</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="single-footer-widget footer-widget__links services">
                  <div className="title">
                    <h2>Our Product</h2>
                  </div>

                  <div className="footer-widget__links-box">
                    <ul>
                      <li>
                        <Link href="#">Buttons</Link>
                      </li>
                      <li>
                        <Link href="#">Switches</Link>
                      </li>
                      <li>
                        <Link href="#">Door Locks</Link>
                      </li>
                      <li>
                        <Link href="#">Inverters</Link>
                      </li>
                      <li>
                        <Link href="#">Displays</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="single-footer-widget footer-widget__contact">
                  <div className="title">
                    <h2>Gent in Touch</h2>
                  </div>
                  <div className="footer-widget__contact-box">
                    <ul>
                      <li>
                        <div className="icon-box">
                          <span className="icon-pin"></span>
                        </div>
                        <div className="content-box">
                          <p>Address</p>
                          <h4>
                            Shops 2-3-4, Building 1080, Fire Station Road,
                            Muwaileh, Near to Muwaileh bus station, Sharjah,
                            UAE.
                          </h4>
                        </div>
                      </li>
                      <li>
                        <div className="icon-box">
                          <span className="icon-email"></span>
                        </div>
                        <div className="content-box">
                          <p>Email</p>
                          <h4>
                            <Link href="mailto:sales@bestechparts.ae">
                              sales@bestechparts.ae
                            </Link>
                          </h4>
                        </div>
                      </li>

                      <li>
                        <div className="icon-box">
                          <span className="icon-out-call"></span>
                        </div>
                        <div className="content-box">
                          <p>Landline</p>
                          <h4>
                            <Link href="tel:065227299">06 522 7299</Link>
                          </h4>
                        </div>
                      </li>
                      <li>
                        <div className="icon-box">
                          <span className="icon-mobile"></span>
                        </div>
                        <div className="content-box">
                          <p>Mobile</p>
                          <h4>
                            <Link href="tel:971543093833">
                              +971 54 309 3833
                            </Link>
                          </h4>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom__inner">
            <div className="copyright-text">
              <p>
                © {currentYear} <Link href="/">Bestech,</Link> All Rights
                Reserved.
              </p>
            </div>

            {/* <div className="copyright-menu">
              <ul>
                <li>
                  <Link href="#">
                    Terms &amp; Condition
                    <span className="icon-right-arrow-5"></span>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    Privacy Policy <span className="icon-right-arrow-5"></span>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    Support <span className="icon-right-arrow-5"></span>
                  </Link>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

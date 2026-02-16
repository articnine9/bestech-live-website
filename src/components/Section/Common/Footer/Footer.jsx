"use client";
import React from "react";
import Link from "next/link";
import ScrollToTop from "@/components/Ui/ScrollToTop";

import BrandLogo from "@/components/Ui/Logo/BrandLogo";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer-one ">
      <ScrollToTop />
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
                  <BrandLogo imageSrc="/img/bestect-white-logo.webp" />
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
                    <Link className="thm-btn" href="/contact">
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
                    <p>About Company</p>
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
                    <p className="text3">Mon – Sat: 08:00 AM to 06:00 PM</p>

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
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="single-footer-widget footer-widget__links">
                  <div className="title">
                    <p>Our Hot Products</p>
                  </div>

                  <div className="footer-widget__links-box">
                    <div className="row">
                      <div className="col-md-6">
                        <ul>
                          <li>
                            <Link href="/products/electrical">
                              Electrical (BS-EL)
                            </Link>
                          </li>
                          <li>
                            <Link href="/products/mechanical">
                              Mechanical (BS-ME)
                            </Link>
                          </li>
                          <li>
                            <Link href="/products/cables-and-wires">
                              Cables and Wires (BS-CW)
                            </Link>
                          </li>
                          <li>
                            <Link href="/products/contactors">
                              Contactors (BS-CT)
                            </Link>
                          </li>
                          <li>
                            <Link href="/products/circuit-breakers">
                              Circuit Breakers (BS-CB)
                            </Link>
                          </li>
                          <li>
                            <Link href="/products/buttons">
                              Buttons (BS-BT)
                            </Link>
                          </li>
                          <li>
                            <Link href="/products/switches">
                              Switches (BS-SW)
                            </Link>
                          </li>
                          <li>
                            <Link href="/products/cabinet-set">
                              Cabinet Set (BS-CS)
                            </Link>
                          </li>
                          {/* <li>
                            <Link href="/products/encoders">
                              Encoders (BS-EN)
                            </Link>
                          </li>
                          <li>
                            <Link href="/products/door-locks">
                              Door Locks (BS-DL)
                            </Link>
                          </li>
                          <li>
                            <Link href="/products/door-wheels">
                              Door Wheels (BS-DW)
                            </Link>
                          </li> */}
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <ul>
                          <li>
                            <Link href="/products/sensors">
                              Sensors (BS-SR)
                            </Link>
                          </li>
                          <li>
                            <Link href="/products/guide-shoes">
                              Guide Shoes (BS-GS)
                            </Link>
                          </li>
                          <li>
                            <Link href="/products/door-sliders">
                              Door Sliders (BS-DS)
                            </Link>
                          </li>
                          <li>
                            <Link href="/products/inverters">
                              Inverters (BS-IN)
                            </Link>
                          </li>
                          <li>
                            <Link href="/products/ard">ARD (BS-AR)</Link>
                          </li>
                          <li>
                            <Link href="/products/door-drives">
                              Door Drives (BS-DD)
                            </Link>
                          </li>
                          <li>
                            <Link href="/products/signalization">
                              Signalization (BS-SG)
                            </Link>
                          </li>
                          {/* <li>
                            <Link href="/products/displays">
                              Displays (BS-DI)
                            </Link>
                          </li>
                          <li>
                            <Link href="/products/control-boards">
                              PCB Boards (BS-PB)
                            </Link>
                          </li>
                          <li>
                            <Link href="/products/tool-kits">
                              Tool Kits (BS-TL)
                            </Link>
                          </li> */}
                          <li>
                            <Link href="/products/keys">Keys (BS-KY)</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="single-footer-widget footer-widget__contact">
                  <div className="title">
                    <p>Get in Touch</p>
                  </div>
                  <div className="footer-widget__contact-box">
                    <ul>
                      <li>
                        <div className="icon-box">
                          <span className="icon-pin"></span>
                        </div>
                        <div className="content-box">
                          <p>Address</p>
                          <p>
                            Shops 2-3-4, Building 1080, Fire Station Road,
                            Muwaileh, Near to Muwaileh bus station, Sharjah,
                            UAE.
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon-box">
                          <span className="icon-email"></span>
                        </div>
                        <div className="content-box">
                          <p>Email</p>
                          <p>
                            <Link href="mailto:sales@bestechparts.ae">
                              sales@bestechparts.ae
                            </Link>
                          </p>
                        </div>
                      </li>

                      <li>
                        <div className="icon-box">
                          <span className="icon-out-call"></span>
                        </div>
                        <div className="content-box">
                          <p>Landline</p>
                          <p>
                            <Link href="tel:+97165227299">06 522 7299</Link>
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon-box">
                          <span className="icon-out-call"></span>
                        </div>
                        <div className="content-box">
                          <p>Mobile</p>
                          <p>
                            <Link href="tel:+971543093833">
                              +971 54 309 3833
                            </Link>
                          </p>
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

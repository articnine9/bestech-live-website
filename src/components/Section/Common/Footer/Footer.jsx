"use client"
import React from 'react';
import Link from "next/link";
import ScrollToTop from "react-scroll-to-top";
import BrandLogo from "~/components/Ui/Logo/BrandLogo";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer-one ">
<ScrollToTop smooth top='80' color="white" style={{backgroundColor:"#FFD550", "&:hover": { backgroundColor: "#186265" }}}/>
      <div
        className="footer-one__bg"
        style={{ backgroundImage: "url(/img/footer/footer-v1-bg.jpg)" }}
      ></div>
      <div className="footer-main padding">
        <div className="container">
          <div className="footer-one__top">
            <div className="footer-one__top-inner">
              <div className="logo-box">
                <Link href="/">
                  <BrandLogo imageSrc="/img/resource/logo-2.png" />
                </Link>
              </div>
              <div className="footer-one__top-right">
                <div className="text">
                  <p>
                    Subscribe to our weekly newsletter to get <br />
                    information and promotion on your inbox
                  </p>
                </div>
                <div className="footer-one__top-subscribe">
                  <form className="footer-one__top-subscribe-form" action="#">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Your Email"
                      style={{ backgroundColor: "#0d4250" }}
                    />
                    <button type="submit" className="thm-btn">
                      <span className="txt">Subscribe </span>
                      <i className="icon-up-right-arrow"></i>
                    </button>
                  </form>
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
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                    </p>
                    <p className="text2">We are available</p>
                    <p className="text3">MOn-Sat: 10:00am to 07:30pm</p>

                    <div className="footer-social-link">
                      <Link href="#">
                        <span className="icon-facebook"></span>
                      </Link>
                      <Link href="#">
                        <span className="icon-twitter"></span>
                      </Link>
                      <Link href="#">
                        <span className="icon-instagram"></span>
                      </Link>
                      <Link href="#">
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
                    <h2>Quick Links</h2>
                  </div>

                  <div className="footer-widget__links-box">
                    <ul>
                      <li>
                        <Link href="about">Mission & Vision</Link>
                      </li>
                      <li>
                        <Link href="about">Get Pricing Plan</Link>
                      </li>
                      <li>
                        <Link href="team">Meet The Team</Link>
                      </li>
                      <li>
                        <Link href="about">Our Clients</Link>
                      </li>
                      <li>
                        <Link href="about">Available Positions</Link>
                      </li>
                      <li>
                        <Link href="about">Job Application</Link>
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
                    <h2>Our Services</h2>
                  </div>

                  <div className="footer-widget__links-box">
                    <ul>
                      <li>
                        <Link href="road-transport">Air Freight</Link>
                      </li>
                      <li>
                        <Link href="road-transport">Ocean Freight</Link>
                      </li>
                      <li>
                        <Link href="road-transport">Railway Freight</Link>
                      </li>
                      <li>
                        <Link href="road-transport">Warehousing</Link>
                      </li>
                      <li>
                        <Link href="road-transport">Packaging</Link>
                      </li>
                      <li>
                        <Link href="road-transport">Distribution</Link>
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
                          <h4>Jones Street, New York, USA</h4>
                        </div>
                      </li>
                      <li>
                        <div className="icon-box">
                          <span className="icon-paper-plane"></span>
                        </div>
                        <div className="content-box">
                          <p>Email</p>
                          <h4>
                            <Link href="mailto:yourmail@email.com">
                              Support@example.com
                            </Link>
                          </h4>
                        </div>
                      </li>
                      <li>
                        <div className="icon-box">
                          <span className="icon-out-call"></span>
                        </div>
                        <div className="content-box">
                          <p>Phone</p>
                          <h4>
                            <Link href="tel:123456789">+70 264 566 579</Link>
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
                © {currentYear} <Link href="/">Translo,</Link> All Rights Reserved.
              </p>
            </div>

            <div className="copyright-menu">
              <ul>
                <li>
                  <Link href="about">
                    Trams &amp; Condition
                    <span className="icon-right-arrow-5"></span>
                  </Link>
                </li>
                <li>
                  <Link href="about">
                    Privacy Policy <span className="icon-right-arrow-5"></span>
                  </Link>
                </li>
                <li>
                  <Link href="about">
                    Support <span className="icon-right-arrow-5"></span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

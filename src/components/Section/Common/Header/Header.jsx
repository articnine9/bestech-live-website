"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [brandsOpen, setBrandsOpen] = useState(false);
  const [scrollClassName, setScrollClassName] = useState("");
  const [isOverlayActive, setIsOverlayActive] = useState(false);

  const mobileMenuOpen = () => {
    setMobileMenu(true);
    setIsOverlayActive(true);
    document.body.classList.add("disable-scroll");
  };

  const mobileMenuClose = () => {
    setMobileMenu(false);
    setIsOverlayActive(false);
    document.body.classList.remove("disable-scroll");
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrollClassName("sticky-menu");
      } else {
        setScrollClassName("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isActive, setIsActive] = useState(false);

  const togglePopup = () => {
    setIsActive(!isActive);
    document.body.classList.toggle("locked");
  };

  function preloader() {
    // Implementation of the preloader function
  }

  if (typeof window !== "undefined") {
    window.onload = () => {
      preloader();
    };
  }

  return (
    <header className="main-header main-header-one">
      <div id="sticky-header" className={`menu-area ${scrollClassName}`}>
        <div className="main-header-one__outer">
          <div className="logo-box-one">
            <div
              className="logo-box-one__bg"
              style={{
                backgroundImage: "url(/img/pattern/logo-box-one-pattern.png)",
              }}
            ></div>
            <Link href="/">
              <img src="/img/bestect-logo.png" alt="Logo" />
            </Link>
          </div>
          <div className="main-header-one__right">
            <div className="container">
              <div className="menu-area__inner">
                <div className="mobile-nav-toggler" onClick={mobileMenuOpen}>
                  <i className="fas fa-bars"></i>
                </div>
                <div className="menu-wrap">
                  <nav className="menu-nav">
                    <div className="main-header-one__inner">
                      <div className="main-header-one__top">
                        <div
                          className="main-header-one__top-pattern"
                          style={{
                            backgroundImage:
                              "url(/img/pattern/header-pattern.png)",
                          }}
                        ></div>
                        <div className="main-header-one__top-inner">
                          <div className="main-header-one__top-left">
                            <div className="header-contact-info">
                              <ul>
                                <li>
                                  <div className="icon-box">
                                    <span className="icon-pin"></span>
                                  </div>
                                  <p>Jones Street, New York, USA</p>
                                </li>
                                <li>
                                  <div className="icon-box">
                                    <span className="icon-paper-plane"></span>
                                  </div>
                                  <p>
                                    <Link href="mailto:yourmail@email.com">
                                      Info@example.com
                                    </Link>
                                  </p>
                                </li>
                                <li>
                                  <div className="icon-box">
                                    <span className="icon-out-call"></span>
                                  </div>
                                  <p>
                                    <Link href="tel:123456789">
                                      +70 264 566 579
                                    </Link>
                                  </p>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="main-header-one__top-right">
                            <div className="inner">
                              <div className="header-social-links">
                                <ul>
                                  <li>
                                    <Link href="#">
                                      <span className="icon-facebook"></span>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="#">
                                      <span className="icon-twitter"></span>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="#">
                                      <span className="icon-instagram"></span>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="#">
                                      <span className="icon-linkedin"></span>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="main-header-one__bottom">
                        <div className="main-header-one__bottom-left">
                          <div className="navbar-wrap main-menu">
                            <ul className="navigation">
                              <li>
                                <Link href="/">Home</Link>
                              </li>
                              <li>
                                <Link href="/about">About</Link>
                              </li>
                              <li className="dropdown menu-item-has-children position-static">
                                <Link
                                  href="#"
                                  className="dropdown-toggle"
                                  onMouseEnter={() => setProductsOpen(true)}
                                  onMouseLeave={() => setProductsOpen(false)}
                                >
                                  Products
                                </Link>
                                <div
                                  className={`dropdown-menu mega-menu ${
                                    productsOpen ? "show" : ""
                                  }`}
                                  onMouseEnter={() => setProductsOpen(true)}
                                  onMouseLeave={() => setProductsOpen(false)}
                                >
                                  <div className="container">
                                    <div className="row g-4">
                                      {/* Category 1 - Electrical Components */}
                                      <div className="col-lg-3">
                                        <div className="mega-menu-item">
                                          <h5 className="mega-menu-title">
                                            Electrical Components
                                          </h5>
                                          <ul className="mega-menu-list">
                                            <li>
                                              <Link href="/products/electrical">
                                                Electrical
                                              </Link>
                                            </li>
                                            <li>
                                              <Link href="/products/cables-wires">
                                                Cables and wires
                                              </Link>
                                            </li>
                                            <li>
                                              <Link href="/products/contactors">
                                                Contactors
                                              </Link>
                                            </li>
                                            <li>
                                              <Link href="/products/circuit-breakers">
                                                Circuit breakers
                                              </Link>
                                            </li>
                                            <li>
                                              <Link href="/products/switches">
                                                Switches
                                              </Link>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>

                                      {/* Category 2 - Door Systems */}
                                      <div className="col-lg-3">
                                        <div className="mega-menu-item">
                                          <h5 className="mega-menu-title">
                                            Door Systems
                                          </h5>
                                          <ul className="mega-menu-list">
                                            <li>
                                              <Link href="/products/door-locks">
                                                Door Locks
                                              </Link>
                                            </li>
                                            <li>
                                              <Link href="/products/door-wheels">
                                                Door wheels
                                              </Link>
                                            </li>
                                            <li>
                                              <Link href="/products/guide-shoes">
                                                Guide shoes
                                              </Link>
                                            </li>
                                            <li>
                                              <Link href="/products/door-sliders">
                                                Door sliders
                                              </Link>
                                            </li>
                                            <li>
                                              <Link href="/products/door-drives">
                                                Door drives
                                              </Link>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>

                                      {/* Category 3 - Control Systems */}
                                      <div className="col-lg-3">
                                        <div className="mega-menu-item">
                                          <h5 className="mega-menu-title">
                                            Control Systems
                                          </h5>
                                          <ul className="mega-menu-list">
                                            <li>
                                              <Link href="/products/buttons">
                                                Buttons
                                              </Link>
                                            </li>
                                            <li>
                                              <Link href="/products/sensors">
                                                Sensors
                                              </Link>
                                            </li>
                                            <li>
                                              <Link href="/products/inverters">
                                                Inverters
                                              </Link>
                                            </li>
                                            <li>
                                              <Link href="/products/ard">
                                                ARD
                                              </Link>
                                            </li>
                                            <li>
                                              <Link href="/products/signalization">
                                                Signalization
                                              </Link>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>

                                      {/* Category 4 - Other Components */}
                                      <div className="col-lg-3">
                                        <div className="mega-menu-item">
                                          <h5 className="mega-menu-title">
                                            Other Components
                                          </h5>
                                          <ul className="mega-menu-list">
                                            <li>
                                              <Link href="/products/encoders">
                                                Encoders
                                              </Link>
                                            </li>
                                            <li>
                                              <Link href="/products/cabinet-set">
                                                Cabinet set
                                              </Link>
                                            </li>
                                            <li>
                                              <Link href="/products/displays">
                                                Displays
                                              </Link>
                                            </li>
                                            <li>
                                              <Link href="/products/pcb-boards">
                                                PCB Boards
                                              </Link>
                                            </li>
                                            <li>
                                              <Link href="/products/tool-kits">
                                                Tool kits
                                              </Link>
                                            </li>
                                            <li>
                                              <Link href="/products/keys">
                                                Keys
                                              </Link>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li className="menu-item-has-children">
                                <Link
                                  href="#"
                                  onMouseEnter={() => setBrandsOpen(true)}
                                  onMouseLeave={() => setBrandsOpen(false)}
                                >
                                  Brands
                                </Link>
                                <ul
                                  className={`sub-menu ${
                                    brandsOpen ? "show" : ""
                                  }`}
                                  onMouseEnter={() => setBrandsOpen(true)}
                                  onMouseLeave={() => setBrandsOpen(false)}
                                >
                                  <li>
                                    <Link href="/brands/apple">Apple</Link>
                                  </li>
                                  <li>
                                    <Link href="/brands/samsung">Samsung</Link>
                                  </li>
                                  <li>
                                    <Link href="/brands/sony">Sony</Link>
                                  </li>
                                  <li>
                                    <Link href="/brands/lg">LG</Link>
                                  </li>
                                  <li>
                                    <Link href="/brands/all-brands">
                                      View All Brands
                                    </Link>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <Link href="/contact">Contact Us</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="main-header-one__bottom-right">
                          <div className="search-box">
                            <Link
                              href="#"
                              className="main-menu__search search-toggler icon-magnifying-glass"
                              onClick={togglePopup}
                            ></Link>
                          </div>
                          <div className="btn-box">
                            <Link className="thm-btn" href="contact">
                              <span className="txt">Get Free Quote</span>
                              <i className="icon-right-arrow"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>

              {/* Mobile Menu */}
              <div
                className={`mobile-menu ${
                  mobileMenu ? "mobile-menu-open" : ""
                }`}
              >
                <nav className="menu-box">
                  <div
                    className={`close-btn ${mobileMenu ? "rotate" : ""}`}
                    onClick={mobileMenuClose}
                  >
                    <i className="fas fa-times"></i>
                  </div>
                  <div className="nav-logo">
                    <Link href="/">
                      <img src="/img/resource/mobile-menu-logo3.png" />
                    </Link>
                  </div>
                  <div className="menu-outer">
                    <ul className="navigation">
                      <li>
                        <Link href="/">Home</Link>
                      </li>
                      <li>
                        <Link href="/about">About</Link>
                      </li>
                      <li className="menu-item-has-children">
                        <Link href="#">Products</Link>
                        <ul
                          className={`sub-menu ${
                            productsOpen
                              ? "sub-menu-visible"
                              : "sub-menu-hidden"
                          }`}
                        >
                          <li>
                            <Link href="/products/smartphones">
                              Smartphones
                            </Link>
                          </li>
                          <li>
                            <Link href="/products/laptops">Laptops</Link>
                          </li>
                          <li>
                            <Link href="/products/tvs">TVs</Link>
                          </li>
                          <li>
                            <Link href="/products/audio">Audio Devices</Link>
                          </li>
                          <li>
                            <Link href="/products/refrigerators">
                              Refrigerators
                            </Link>
                          </li>
                          <li>
                            <Link href="/products/washing-machines">
                              Washing Machines
                            </Link>
                          </li>
                        </ul>
                        <div
                          className="dropdown-btn"
                          onClick={() => setProductsOpen(!productsOpen)}
                        >
                          <span className="fas fa-angle-down"></span>
                        </div>
                      </li>
                      <li className="menu-item-has-children">
                        <Link href="#">Brands</Link>
                        <ul
                          className={`sub-menu ${
                            brandsOpen ? "sub-menu-visible" : "sub-menu-hidden"
                          }`}
                        >
                          <li>
                            <Link href="/brands/apple">Apple</Link>
                          </li>
                          <li>
                            <Link href="/brands/samsung">Samsung</Link>
                          </li>
                          <li>
                            <Link href="/brands/sony">Sony</Link>
                          </li>
                          <li>
                            <Link href="/brands/lg">LG</Link>
                          </li>
                          <li>
                            <Link href="/brands/all-brands">
                              View All Brands
                            </Link>
                          </li>
                        </ul>
                        <div
                          className="dropdown-btn"
                          onClick={() => setBrandsOpen(!brandsOpen)}
                        >
                          <span className="fas fa-angle-down"></span>
                        </div>
                      </li>
                      <li>
                        <Link href="/contact">Contact Us</Link>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="contact-info"
                    style={{ backgroundColor: "white", zIndex: "99999" }}
                  >
                    <div className="icon-box">
                      <span className="icon-telephone-handle-silhouette"></span>
                    </div>
                    <p>
                      <Link href="tel:123456789">(629) 555-0129</Link>
                    </p>
                  </div>
                  <div
                    className="social-links"
                    style={{ backgroundColor: "white", zIndex: "99999" }}
                  >
                    <ul className="clearfix list-wrap">
                      <li>
                        <Link href="#">
                          <i className="fab fa-facebook-f"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-instagram"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-linkedin-in"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              <div
                className={` ${mobileMenu ? "menu-backdrop" : ""}`}
                onClick={mobileMenuClose}
              ></div>
              {isOverlayActive && (
                <div className="overlay" onClick={mobileMenuClose}></div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={`search-popup ${isActive ? "active" : ""}`} id="home-one">
        <div
          className="search-popup__overlay search-toggler"
          onClick={togglePopup}
        >
          <div className="search-popup__close-icon">
            <span className="icon-plus"></span>
          </div>
        </div>
        <div className="search-popup__content">
          <form action="#">
            <label htmlFor="search" className="sr-only">
              search here
            </label>
            <input type="text" id="search" placeholder="Search Here..." />
            <button
              type="submit"
              aria-label="search submit"
              className="btn-box"
            >
              <i className="icon-magnifying-glass"></i>
            </button>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;

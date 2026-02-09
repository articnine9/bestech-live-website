"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import QuoteForm from "@/components/Section/Common/QuoteForm/QuoteForm";
import { Modal, Button } from "react-bootstrap";
import { useRouter } from "next/navigation";
import products from "@/db/products.json";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [brandsOpen, setBrandsOpen] = useState(false);
  const [scrollClassName, setScrollClassName] = useState("");
  const [isOverlayActive, setIsOverlayActive] = useState(false);
  const [show, setShow] = useState(false);

  const [quoteMessage, setQuoteMessage] = useState("");
  const [showQuoteSuccess, setShowQuoteSuccess] = useState(false);
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  // Flatten all products
  const allProducts = products.flatMap((category) => category.items);

  // Filter products
  const searchResults = allProducts.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  // Navigate to product page
  const handleSearchNavigate = (url) => {
    setIsActive(false);
    setSearchQuery("");
    document.body.classList.remove("locked");

    // Ensure products prefix
    const finalUrl = url.startsWith("/products")
      ? url
      : `/products${url.startsWith("/") ? url : `/${url}`}`;

    router.push(finalUrl);
  };

  const handleQuoteSuccess = (message) => {
    setShow(false); // Close the form modal
    setQuoteMessage(message); // Set the message
    setShowQuoteSuccess(true); // Show the success dialog modal
  };

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
          <div className="main-header-one__right">
            <div className="container">
              <div className="mobile_div">
                <Link href="/" className="logo w-100 d-md-none">
                  <img src="/img/bestect-logo.png" alt="Logo" />
                </Link>

                <div className="menu-area__inner">
                  <div className="mobile-nav-toggler" onClick={mobileMenuOpen}>
                    <i className="fas fa-bars"></i>
                  </div>
                  <div className="menu-wrap">
                    <nav className="menu-nav">
                      <div className="main-header-one__inner">
                        <div className="main-header-one__top">
                          <div className="main-header-one__top-inner">
                            <div className="main-header-one__top-left">
                              <div className="header-contact-info">
                                <ul>
                                  <li>
                                    <div className="icon-box">
                                      <span className="icon-email"></span>
                                    </div>
                                    <p>
                                      <Link href="mailto:sales@bestechparts.ae">
                                        sales@bestechparts.ae
                                      </Link>
                                    </p>
                                  </li>

                                  <li>
                                    <div className="icon-box">
                                      <span className="icon-telephone-call"></span>
                                    </div>
                                    <p>
                                      <Link href="tel:+97165227299">
                                        06 522 7299 — Landline
                                      </Link>
                                    </p>
                                  </li>
                                  <li>
                                    <div className="icon-box">
                                      <span className="icon-telephone-call"></span>
                                    </div>
                                    <p>
                                      <Link href="tel:+971543093833">
                                        +971 54 309 3833 — Mobile
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
                                      <Link
                                        href="https://www.facebook.com/bestech.spareparts"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        <span className="icon-facebook"></span>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        href="https://www.instagram.com/bestech_spareparts/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        <span className="icon-instagram"></span>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        href="https://www.linkedin.com/company/bes-tech-elevators-spare-parts/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
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
                              <Link href="/" className="logo w-25">
                                <img src="/img/bestect-logo.png" alt="Logo" />
                              </Link>
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
                                            <div className="mega-menu-title">
                                              Electrical Components
                                            </div>
                                            <ul className="mega-menu-list">
                                              <li>
                                                <Link href="/products/electrical">
                                                  Electrical
                                                </Link>
                                              </li>
                                              <li>
                                                <Link href="/products/mechanical">
                                                  Mechanical
                                                </Link>
                                              </li>
                                              <li>
                                                <Link href="/products/cables-and-wires">
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
                                            <div className="mega-menu-title">
                                              Door Systems
                                            </div>
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
                                            <div className="mega-menu-title">
                                              Control Systems
                                            </div>
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
                                            <div className="mega-menu-title">
                                              Other Components
                                            </div>
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
                                      <Link href="/brands/hyundai">
                                        Hyundai Parts
                                      </Link>
                                    </li>
                                    <li>
                                      <Link href="/brands/kone">
                                        Kone Parts
                                      </Link>
                                    </li>
                                    <li>
                                      <Link href="/brands/mitsubishi">
                                        Mitsubishi Parts
                                      </Link>
                                    </li>
                                    {/* <li>
                                      <Link href="/brands/monarch">
                                        Monarch Parts
                                      </Link>
                                    </li> */}
                                    <li>
                                      <Link href="/brands/otis">
                                        Otis Parts
                                      </Link>
                                    </li>
                                    <li>
                                      <Link href="/brands/schindler">
                                        Schindler Parts
                                      </Link>
                                    </li>
                                    {/* <li>
                                      <Link href="/brands/step">
                                        Step Parts
                                      </Link>
                                    </li> */}
                                    <li>
                                      <Link href="/brands/thyssenkrupp">
                                        Thyssenkrupp Parts
                                      </Link>
                                    </li>
                                  </ul>
                                </li>
                                <li>
                                  <Link href="/blog">Blog</Link>
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
                              <button
                                className="thm-btn border-0"
                                onClick={() => setShow(true)}
                              >
                                <span className="txt">Get Free Quote</span>
                                <i className="icon-right-arrow"></i>
                              </button>
                            </div>
                            <Modal
                              show={show}
                              onHide={() => setShow(false)}
                              centered
                            >
                              <Modal.Header closeButton>
                                <Modal.Title>Get Free Quote</Modal.Title>
                              </Modal.Header>
                              <Modal.Body>
                                <QuoteForm onSuccess={handleQuoteSuccess} />
                              </Modal.Body>
                            </Modal>
                          </div>
                        </div>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
              {/* Mobile Menu - Updated to match desktop menu */}
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
                      <img src="/img/bestect-logo.png" alt="Logo" />
                    </Link>
                  </div>
                  <div className="menu-outer">
                    <ul className="navigation">
                      <li>
                        <Link href="/" onClick={mobileMenuClose}>
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link href="/about" onClick={mobileMenuClose}>
                          About
                        </Link>
                      </li>
                      <li className="menu-item-has-children">
                        <Link href="#">Products</Link>
                        <ul
                          className={`sub-menu ${productsOpen ? "show" : ""}`}
                        >
                          {/* Electrical Components */}
                          <li className="menu-item-has-children">
                            <Link href="#">Electrical Components</Link>
                            <ul className="sub-menu">
                              <li>
                                <Link
                                  href="/products/electrical"
                                  onClick={mobileMenuClose}
                                >
                                  Electrical
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/products/mechanical"
                                  onClick={mobileMenuClose}
                                >
                                  Mechanical
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/products/cables-and-wires"
                                  onClick={mobileMenuClose}
                                >
                                  Cables and wires
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/products/contactors"
                                  onClick={mobileMenuClose}
                                >
                                  Contactors
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/products/circuit-breakers"
                                  onClick={mobileMenuClose}
                                >
                                  Circuit breakers
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/products/switches"
                                  onClick={mobileMenuClose}
                                >
                                  Switches
                                </Link>
                              </li>
                            </ul>
                          </li>

                          {/* Door Systems */}
                          <li className="menu-item-has-children">
                            <Link href="#">Door Systems</Link>
                            <ul className="sub-menu">
                              <li>
                                <Link
                                  href="/products/door-locks"
                                  onClick={mobileMenuClose}
                                >
                                  Door Locks
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/products/door-wheels"
                                  onClick={mobileMenuClose}
                                >
                                  Door wheels
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/products/guide-shoes"
                                  onClick={mobileMenuClose}
                                >
                                  Guide shoes
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/products/door-sliders"
                                  onClick={mobileMenuClose}
                                >
                                  Door sliders
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/products/door-drives"
                                  onClick={mobileMenuClose}
                                >
                                  Door drives
                                </Link>
                              </li>
                            </ul>
                          </li>

                          {/* Control Systems */}
                          <li className="menu-item-has-children">
                            <Link href="#">Control Systems</Link>
                            <ul className="sub-menu">
                              <li>
                                <Link
                                  href="/products/buttons"
                                  onClick={mobileMenuClose}
                                >
                                  Buttons
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/products/sensors"
                                  onClick={mobileMenuClose}
                                >
                                  Sensors
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/products/inverters"
                                  onClick={mobileMenuClose}
                                >
                                  Inverters
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/products/ard"
                                  onClick={mobileMenuClose}
                                >
                                  ARD
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/products/signalization"
                                  onClick={mobileMenuClose}
                                >
                                  Signalization
                                </Link>
                              </li>
                            </ul>
                          </li>

                          {/* Other Components */}
                          <li className="menu-item-has-children">
                            <Link href="#">Other Components</Link>
                            <ul className="sub-menu">
                              <li>
                                <Link
                                  href="/products/encoders"
                                  onClick={mobileMenuClose}
                                >
                                  Encoders
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/products/cabinet-set"
                                  onClick={mobileMenuClose}
                                >
                                  Cabinet set
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/products/displays"
                                  onClick={mobileMenuClose}
                                >
                                  Displays
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/products/pcb-boards"
                                  onClick={mobileMenuClose}
                                >
                                  PCB Boards
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/products/tool-kits"
                                  onClick={mobileMenuClose}
                                >
                                  Tool kits
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/products/keys"
                                  onClick={mobileMenuClose}
                                >
                                  Keys
                                </Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                        <div
                          className="dropdown-btn"
                          onClick={() => setProductsOpen(!productsOpen)}
                        >
                          <span
                            className={`fas ${
                              productsOpen ? "fa-angle-up" : "fa-angle-down"
                            }`}
                          ></span>
                        </div>
                      </li>
                      <li className="menu-item-has-children">
                        <Link href="#">Brands</Link>
                        <ul className={`sub-menu ${brandsOpen ? "show" : ""}`}>
                          <li>
                            <Link
                              href="/brands/hyundai"
                              onClick={mobileMenuClose}
                            >
                              Hyundai Parts
                            </Link>
                          </li>
                          <li>
                            <Link href="/brands/kone" onClick={mobileMenuClose}>
                              Kone Parts
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/brands/mitsubishi"
                              onClick={mobileMenuClose}
                            >
                              Mitsubishi Parts
                            </Link>
                          </li>
                          {/* <li>
                            <Link
                              href="/brands/monarch"
                              onClick={mobileMenuClose}
                            >
                              Monarch Parts
                            </Link>
                          </li> */}
                          <li>
                            <Link href="/brands/otis" onClick={mobileMenuClose}>
                              Otis Parts
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/brands/schindler"
                              onClick={mobileMenuClose}
                            >
                              Schindler Parts
                            </Link>
                          </li>
                          {/* <li>
                            <Link href="/brands/step" onClick={mobileMenuClose}>
                              Step Parts
                            </Link>
                          </li> */}
                          <li>
                            <Link
                              href="/brands/thyssenkrupp"
                              onClick={mobileMenuClose}
                            >
                              Thyssenkrupp Parts
                            </Link>
                          </li>
                        </ul>
                        <div
                          className="dropdown-btn"
                          onClick={() => setBrandsOpen(!brandsOpen)}
                        >
                          <span
                            className={`fas ${
                              brandsOpen ? "fa-angle-up" : "fa-angle-down"
                            }`}
                          ></span>
                        </div>
                      </li>
                      <li>
                        <Link href="/blog" onClick={mobileMenuClose}>
                          Blog
                        </Link>
                      </li>
                      <li>
                        <Link href="/contact" onClick={mobileMenuClose}>
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="contact-info">
                    <div className="icon-box">
                      <span className="icon-telephone-handle-silhouette"></span>
                    </div>
                    <p>
                      <Link href="tel:+971582760883">+971582760883</Link>
                    </p>
                  </div>
                  <div className="social-links">
                    <ul className="clearfix list-wrap">
                      <li>
                        <Link
                          href="https://www.facebook.com/bestech.elevators"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-facebook-f"></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://www.instagram.com/bestech_elevators/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-instagram"></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://www.linkedin.com/company/bes-tech-elevators-spare-parts/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
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
          <label htmlFor="search" className="sr-only">
            search here
          </label>

          <input
            type="text"
            id="search"
            name="search-field"
            placeholder="Search products..."
            value={searchQuery}
            readOnly
            onFocus={(e) => e.target.removeAttribute("readonly")}
            onChange={(e) => setSearchQuery(e.target.value)}
            autoComplete="off"
            autoCorrect="off"
            spellCheck="false"
          />

          {searchQuery && (
            <ul className="search-results">
              {searchResults.length > 0 ? (
                searchResults.map((item, index) => (
                  <li
                    key={index}
                    className="search-item"
                    onClick={() => handleSearchNavigate(item.url)}
                  >
                    <div className="search-item-name">{item.name}</div>
                    <div className="search-item-code">{item.code}</div>
                  </li>
                ))
              ) : (
                <li className="no-result">No products found</li>
              )}
            </ul>
          )}
        </div>
      </div>

      <Modal
        show={showQuoteSuccess}
        onHide={() => setShowQuoteSuccess(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Success</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{quoteMessage}</p>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="btn btn-success"
            onClick={() => setShowQuoteSuccess(false)}
          >
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </header>
  );
};

export default Header;

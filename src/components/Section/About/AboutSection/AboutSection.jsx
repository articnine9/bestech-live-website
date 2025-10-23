import Link from "next/link";
import CircleTextThree from "~/components/Ui/Components/CircleTextThree";

const AboutSection = () => {
  return (
    <section className="about-three padding">
      <div className="container">
        <div className="row">
          {/* <!--Start About Three Img--> */}
          {/* <div className="col-xl-6">
            <div className="about-three__img">
              <div className="shape1">
                <img src="/img/shape/about-v3-shape1.png" alt="" />
              </div>
              <div
                className="about-three__img1 wow fadeInLeft"
                data-wow-delay=".1s"
              >
                <img src="/img/about/about-v3-img1.jpg" alt="" />
              </div>
              <div
                className="about-three__img2 wow fadeInRight"
                data-wow-delay=".1s"
              >
                <img src="/img/about/about-v3-img2.jpg" alt="" />
              </div>
              <CircleTextThree />
            </div>
          </div> */}
          {/* <!--End About Three Img--> */}

          {/* <!--Start About Three Content--> */}
          <div className="col-xl-12">
            <div className="about-three__content">
              <div className="sec-title-style3">
                <div className="sub-title">
                  <div className="icon">
                    <img src="/img/icon/title-marker-4.png" alt="bestech" />
                  </div>
                  <h5>About Company</h5>
                </div>
                <h2>
                  Reliable Elevator Spare Parts <br /> Supplier in the UAE
                </h2>
              </div>
              <div className="about-three__content-text">
                <p>
                  At BESTECH, we specialize in providing high-quality, reliable
                  elevator spare parts to meet all your maintenance and repair
                  needs. Whether you manage residential buildings, commercial
                  complexes, or industrial facilities, our comprehensive
                  inventory and expert support ensure your elevators run
                  smoothly and safely.
                </p>
                <p>
                  We understand the importance of timely, durable parts to
                  minimize downtime and keep your elevators operating at peak
                  performance. With fast delivery and competitive pricing,
                  BESTECH is your go-to source for elevator components
                  throughout Sharjah and the wider UAE.
                </p>
                <p>
                  Explore our extensive range of products today — from control
                  systems and motors to cables and safety devices — all sourced
                  from trusted manufacturers and backed by our commitment to
                  excellence.
                </p>
                <p>
                  Based in Sharjah, UAE, BESTECH is dedicated to serving the
                  elevator industry with premium spare parts and unmatched
                  customer service. Our mission is to support elevator
                  companies, maintenance contractors, and building managers by
                  providing dependable components that enhance safety,
                  reliability, and efficiency.
                </p>
                <p>
                  With years of combined experience in the elevator sector, our
                  team understands the critical role each part plays in elevator
                  functionality. That’s why we carefully select and stock only
                  the highest quality products, ensuring compatibility and long
                  service life.
                </p>
                <p>
                  Customer satisfaction is at the heart of our business. We
                  pride ourselves on fast response times, technical guidance,
                  and flexible solutions tailored to your specific requirements.
                  Our goal is to be more than just a supplier — we aim to be a
                  trusted partner in your elevator maintenance journey.
                </p>
              </div>

              {/* <div className="about-three__content-bottom"> */}
              {/* <div className="btn-box">
                  <Link className="thm-btn" href="/about">
                    <span className="txt">Know More About Us</span>
                  </Link>
                </div> */}

              {/* <div className="author-box">
                  <div className="img-box">
                    <img
                      src="/img/about/about-v2-img4-.jpg"
                      alt="Contact Representative"
                    />
                  </div>

                  <div className="text-box">
                    <p>Need Help?</p>
                    <h3>
                      <Link href="tel:+971543093833">+971 54 309 3833</Link>
                    </h3>
                  </div>
                </div> */}
              {/* </div> */}
            </div>
          </div>
          {/* <!--End About Three Content--> */}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

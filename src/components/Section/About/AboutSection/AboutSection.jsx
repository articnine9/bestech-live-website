import Link from "next/link";
import CircleTextThree from "~/components/Ui/Components/CircleTextThree";
import { FaCheckCircle } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";

const AboutSection = () => {
  let message = [
    {
      desc: "We aim to provide elevator parts that support safe and steady performance.",
    },
    {
      desc: "We plan to keep key elevator items ready so customers can get what they need on time.",
    },
    {
      desc: "We work to build trust through simple service and clear communication.",
    },
    {
      desc: "We aim to support service teams with product knowledge that helps them choose the right parts.",
    },
    {
      desc: "We plan to grow our reach across the UAE with steady supply and fair pricing.",
    },
    {
      desc: "We focus on giving value by helping reduce downtime with quality components.",
    },
  ];
  let message1 = [
    {
      desc1:
        "We supply safe and reliable spare parts for elevators that follow standard quality rules.",
    },
    {
      desc1:
        "We keep a wide range of items ready so customers receive fast delivery across the UAE.",
    },
    {
      desc1:
        "We guide service teams with clear product knowledge that helps them choose the right part",
    },
    {
      desc1:
        "We remain a trusted lift spare parts supplier with fair pricing and honest service.",
    },
    {
      desc1:
        "We reduce elevator downtime by giving quick access to essential components.",
    },
    {
      desc1:
        "We continue to grow as one of the dependable elevator product suppliers in UAE.",
    },
  ];
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
                  BESTECH is known as the best elevator spare parts supplier in
                  Sharjah and a trusted source for lift spare parts in the UAE.
                  We supply safe and reliable parts that help elevators run
                  without trouble. Our store carries many items, such as motors,
                  control boards, wiring items, door parts, and safety parts.
                  These products support daily elevator maintenance and keep
                  buildings safe for users.
                </p>
                <p>
                  We are based in Sharjah, near Muwaileh bus station on Fire
                  Station Road. From here, we supply parts quickly to customers
                  across the UAE. As a lift spare parts supplier, we keep our
                  stock ready, priced fairly, and tested for good working
                  quality. Our team understands many elevator brands, which
                  helps us guide customers and give the right part for their
                  repair or service needs.
                </p>
                <p>
                  BESTECH continues to grow as one of the trusted elevator
                  product suppliers in UAE. We also keep our stock updated at
                  all times, so the right parts are always ready when someone
                  asks for them.
                </p>
                {/* <p>
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
                </p> */}
              </div>
              <div className="mv-wrapper">
                <div className="mv-card">
                  <div class="border-right"></div>

                  {/* <div className="mv-icon">
                    <img src="/icons/mission.svg" alt="Mission Icon" />
                  </div> */}
                  <div className="mv-content">
                    <h3>Our Vision</h3> <br />
                    <p>
                      Our vision is to become a leading reputable lift spare
                      parts supplier in the UAE by offering safe and dependable
                      elevator parts that support smooth operation in every
                      building.
                      <br /> Here is what guides this vision:
                    </p>
                    <br />
                    <ul className="mv-list">
                      {message.map((value) => {
                        return (
                          <div style={{ display: "flex" }}>
                            <FaCheckCircle className="mv-icon" />{" "}
                            <li>
                              <span>{value.desc} </span>
                            </li>
                          </div>
                        );
                      })}

                      {/* <li><FaCheckCircle className="mv-icon" /> We plan to keep key elevator items ready so customers can get what they need on time.</li>
                      <li><FaCheckCircle className="mv-icon" /> We work to build long-term trust through simple service and honest communication.</li>
                      <li><FaCheckCircle className="mv-icon" /> We aim to support service teams with easy access to quality parts across the UAE.</li>
                      <li><FaCheckCircle className="mv-icon" /> We plan to grow our reach as a reliable name in the elevator parts market.</li>
                      <li><FaCheckCircle className="mv-icon" /> We focus on giving value by helping reduce downtime with quality components.</li> */}
                    </ul>
                  </div>
                </div>

                <div className="mv-card">
                  <div class="border-right"></div>
                  {/* <div className="mv-icon">
                    <img src="/icons/vision.svg" alt="Vision Icon" />
                  </div> */}
                  <div className="mv-content">
                    <h3>Our Mission</h3>
                    <br />
                    <p>
                      Our mission is simple and clear. We work to support
                      elevator technicians, maintenance teams, and building
                      owners with the right parts and steady service. <br />{" "}
                      Here is how we carry out this mission:
                    </p>
                    <br />
                    <ul className="mv-list">
                      {message1.map((value) => {
                        return (
                          <div style={{ display: "flex" }}>
                            <FaCheckCircle className="mv-icon" />{" "}
                            <li>
                              <span>{value.desc1} </span>
                            </li>
                          </div>
                        );
                      })}
                      {/* <li><FaCheckCircle className="mv-icon" /> We supply safe and reliable spare parts for elevators that follow standard quality rules.</li>
                      <li><FaCheckCircle className="mv-icon" /> We keep a wide range of items ready so customers receive fast delivery across the UAE.</li>
                      <li><FaCheckCircle className="mv-icon" /> We guide service teams with clear product knowledge that helps them choose the right part.</li>
                      <li><FaCheckCircle className="mv-icon" /> We remain a trusted lift spare parts supplier with fair pricing and honest service.</li>
                      <li><FaCheckCircle className="mv-icon" /> We reduce elevator downtime by giving quick access to essential components.</li>
                      <li><FaCheckCircle className="mv-icon" /> We continue to grow as one of the dependable elevator product suppliers in UAE.</li> */}
                    </ul>
                  </div>
                </div>
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

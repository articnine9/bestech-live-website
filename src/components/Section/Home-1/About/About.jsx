import ContentCard from "~/components/Ui/Cards/ContentCard";
import CircleText1 from "~/components/Ui/Components/CircleText";

const About = () => {
  return (
    <div className="about-one padding">
      <div className="about-one__big-title">Bestech</div>
      <div className="container">
        <div className="row">
          <div className="col-xl-5">
            <div className="about-one__img clearfix">
              <div className="shape1 float-bob-x">
                <img src="/img/home/about-home.jpg" alt="" />
              </div>
              <div className="inner clearfix">
                <img
                  className="float-bob-y"
                  src="/img/home/about-home.jpg"
                  alt=""
                />
              </div>
              <div className="btn-box">
                <CircleText1 />
              </div>
            </div>
          </div>

          <div className="col-xl-7">
            <div className="about-one__content">
              <div className="about-one__content-top">
                <div className="sec-title">
                  <div className="sub-title">
                    <h5>
                      <span className="icon-right-arrow-1"></span> Who We Are
                    </h5>
                  </div>
                  <h2>Elevator Parts – Sharjah & UAE</h2>
                </div>

                <div className="text">
                  <p>
                    At <strong>BESTECH</strong>, we specialize in providing
                    high-quality, reliable elevator spare parts to meet all your
                    maintenance and repair needs. Whether you manage residential
                    buildings, commercial complexes, or industrial facilities,
                    our comprehensive inventory and expert support ensure your
                    elevators run smoothly and safely.
                  </p>

                  <p>
                    We understand the importance of timely, durable parts to
                    minimize downtime and keep your elevators operating at peak
                    performance. With fast delivery and competitive pricing,{" "}
                    <strong>BESTECH</strong> is your go-to source for elevator
                    components throughout Sharjah and the wider UAE.
                  </p>

                  <p>
                    Explore our extensive range of products today — from control
                    systems and motors to cables and safety devices — all
                    sourced from trusted manufacturers and backed by our
                    commitment to excellence.
                  </p>

                  <a href="/about" className="theme-btn btn-style-one">
                    <span className="btn-title">Learn More About Bestech</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

import ContentCard from "~/components/Ui/Cards/ContentCard";
import CircleText1 from "~/components/Ui/Components/CircleText";
const About = () => {
  return (
    <div className="about-one padding">
      <div className="about-one__big-title">translo </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-5">
            <div className="about-one__img clearfix">
              <div className="shape1 float-bob-x">
                <img src="/img/shape/about-v1-shape1.png" alt="" />
              </div>
              <div className="inner clearfix">
                <img
                  className="float-bob-y"
                  src="/img/about/about-one__img1.jpg"
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
                      <span className="icon-right-arrow-1"></span> About Company
                    </h5>
                  </div>
                  <h2>
                    Digital & Trusted Transport <br />
                    Logistic Company
                  </h2>
                </div>

                <div className="text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod of tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspend ultrices gravida risus commodo
                    viverra maecenas.
                  </p>
                </div>
              </div>

              <div className="about-one__content-features">
                <ul>
                  <li
                    className="wow fadeInRight"
                    data-wow-delay="0ms"
                    data-wow-duration="1500ms"
                  >
                    <ContentCard image="/img/icon/about/worldwide-delivery.png" title="Fast Worldwide Delivery" description="Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod of tempor incididunt ut labore et
                    dolore." />
                  </li>

                  <li
                    className="wow fadeInRight"
                    data-wow-delay="200ms"
                    data-wow-duration="1500ms"
                  >
                    <ContentCard image="/img/icon/about/secure-delivery.png" title="Safe And Secure Delivery" description="There are many variations of passages of Lorem Ipsum
                    available but the majority have suffered alteration in
                    some form," />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
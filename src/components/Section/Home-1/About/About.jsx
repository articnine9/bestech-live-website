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
                      <span className="icon-right-arrow-1"></span> Who We Are
                    </h5>
                  </div>
                  <h2>
                    Advanced Elevator Components <br />& Engineering Solutions
                  </h2>
                </div>

                <div className="text">
                  <p>
                    With over two decades of experience, Bestech specializes in
                    delivering advanced elevator components and engineering
                    products tailored to industry needs. Our commitment to
                    quality and innovation drives everything we do.
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

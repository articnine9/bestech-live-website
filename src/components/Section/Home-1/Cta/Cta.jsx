import Link from "next/link";

const Cta = () => {
  return (
    <section className="cta-one">
      <div className="container">
        <div className="cta-one__inner">
          <div className="cta-one__shape1">
            <img src="/img/shape/cta-one__shape1.png" alt="" />
          </div>
          <div className="cta-one__shape2">
            <img src="/img/shape/cta-one__shape2.png" alt="" />
          </div>
          <div className="cta-one__shape3 float-bob-x">
            <img src="/img/shape/cta-one__shape5.png" alt="#" />
          </div>
          <div className="cta-one__inner-box">
            <div className="title-box">
              <h2>
                We are best transport agency for give best quality service
              </h2>
            </div>

            <div className="btn-box">
              <Link className="thm-btn" href="contact">
                <span className="txt">Request Services</span>
                <i className="icon-right-arrow"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;

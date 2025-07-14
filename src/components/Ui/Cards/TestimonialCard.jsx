import Link from "next/link";

const TestimonialCard = ({ item }) => {
  return (
    <div className="testimonials-one__single">
      <div className="icon-box">
        <span className="icon-quote11"></span>
      </div>
      <div className="border-left"></div>
      <div className="testimonials-one__single-top">
        <div className="img-box">
          <img src={item?.image} alt="" />
        </div>

        <div className="title-box">
          <h2>
            {item?.name}
          </h2>
          <p>{item?.role}</p>
        </div>
      </div>

      <div className="testimonials-one__single-inner">
        <div className="content-box">
          <div className="content-box-top">
            <div className="text-box">
              <h3>“Good Services”</h3>
            </div>
            <div className="rating-box">
              <Link href="#">
                <i className="icon-star"></i>
              </Link>
              <Link href="#">
                <i className="icon-star"></i>
              </Link>
              <Link href="#">
                <i className="icon-star"></i>
              </Link>
              <Link href="#">
                <i className="icon-star"></i>
              </Link>
              <Link href="#">
                <i className="icon-star"></i>
              </Link>
            </div>
          </div>
          <p>{item?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;

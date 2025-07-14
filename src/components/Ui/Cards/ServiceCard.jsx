import Link from "next/link";

const ServiceCard = ({ item }) => {
  return (
    <div className="service-one__single">
      <div className="service-one__single-img">
        <div className="inner">
          <img src={item?.image} alt="#" />
          <div className="overlay-icon">
            <img src={item?.icon} alt="#" />
          </div>
        </div>
      </div>
      <div className="service-one__single-content">
        <h3>
          <Link href="road-transport">{item?.title}</Link>
        </h3>
        <p>
          Following the quality of our service <br />
          thus having gained trust
        </p>
        <div className="btn-box">
          <Link  href={item.link}>
            Read More <span className="icon-right-arrow"></span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

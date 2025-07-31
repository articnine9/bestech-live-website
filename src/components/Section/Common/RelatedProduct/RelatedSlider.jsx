import Link from "next/link";

const RelatedProduct = ({ item }) => {
  return (
    <div className="service-one__single">
      <div className="service-one__single-img">
        <div className="inner">
          <img src={item?.image} alt="#" />
          <div className="overlay-icon"></div>
        </div>
      </div>
      <div className="service-one__single-content">
        <h3>
          <Link href={`/products${item.url}`}>{item?.name}</Link>
        </h3>
        <p>{item?.description}</p>
        <div className="btn-box">
          <Link href={`/products${item.url}`}>
            Read More <span className="icon-right-arrow"></span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RelatedProduct;

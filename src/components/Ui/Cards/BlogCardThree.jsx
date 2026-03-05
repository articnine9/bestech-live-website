import Link from "next/link";

const BlogCardThree = ({ item }) => {
  return (
    <div className="col-lg-4 col-12 mb-4">
      <div className="blog-two__single">
        <Link href={`/blog/${item.link}`}>
          <div className="blog-two__single-img">
            <div className="overlay-img__outer">
              {/* <div className="name">
              <p>{item.author}</p>
            </div> */}
              {/* <div className="overlay-img">
              <img src={item.image} alt="#" />
            </div> */}
            </div>
            <div className="inner">
              <img src={item.image} alt={item.alttext || item.title} />
            </div>
          </div>
        </Link>
        <div className="blog-two__single-content">
          <p>{item.author}</p>
          <h2>
            <Link href={`/blog/${item.link}`}>{item.title}</Link>
          </h2>
          {/* <ul className="meta-box">
            <li>
              <Link href="#">{item.category}</Link>
            </li>
           
            <li>{item.date}</li>
          </ul> */}
          <div className="btn-box">
            <Link href={`blog/${item.link}`}>
              Read More <span className="icon-right-arrow-5"></span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCardThree;

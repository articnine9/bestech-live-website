import Link from "next/link";

const BlogCardFour = ({ items, productcode }) => {
  return (
    <>
      <div className="row">
        {items.map((item, index) => {
          const safeLink = item?.url || "#";

          return (
            <div
              key={index}
              className="col-xl-4 col-lg-4 col-md-6 mb-4 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="blog-two__single">
                <div className="blog-two__single-img">
                  <div className="overlay-img__outer">
                    <div className="name">
                      <p>{item?.name}</p>
                    </div>
                    {/* Optional overlay image */}
                    <div className="overlay-img">
                      <img
                        src="https://placehold.co/400x250"
                        alt={item?.name || "Blog image"}
                      />
                    </div>
                  </div>
                  <div className="inner">
                    <img
                      src={item?.img2 || "https://placehold.co/400x250"}
                      alt={item?.name || "Blog image"}
                    />
                  </div>
                </div>

                <div className="blog-two__single-content">
                  <h2>
                    <Link href={`/products${safeLink}`}>
                      {item?.name || "Untitled"}
                    </Link>
                  </h2>
                  <ul className="meta-box">
                    <li>
                      <Link href="#">
                        {item?.description || "No description"}
                      </Link>
                    </li>
                    <li>-</li>
                    <li>{item?.code || "Unknown Code"}</li>
                  </ul>

                  <div className="btn-box">
                    <Link href={safeLink}>
                      Read More <span className="icon-right-arrow-5"></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default BlogCardFour;

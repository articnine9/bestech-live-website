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

                    <div className="overlay-img">
                      <img
                        src={item?.image || "https://placehold.co/400x250"} // Updated to use item.image
                        alt={item?.name || "Product image"}
                      />
                    </div>
                  </div>
                  <div className="inner">
                    <img
                      src={item?.image || "https://placehold.co/400x250"} // Updated to use item.image
                      alt={item?.name || "Product image"}
                    />
                  </div>
                </div>

                <div className="blog-two__single-content">
                  {/* <h2>
                    <Link href={`/products${safeLink}`}>
                      {item?.name || "Untitled"}
                    </Link>
                  </h2> */}
                  {/* <ul className="meta-box">
                    {item?.description && <li>{item.description}</li>}
                    {item?.description && item?.code && <li>-</li>}
                    {item?.code && <li>{item.code}</li>}
                  </ul> */}

                  <div className="btn-box">
                    <Link href={`/products${safeLink}`}>
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

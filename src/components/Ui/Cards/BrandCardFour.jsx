import { useState } from "react";

const BrandCardFour = ({ items }) => {
  const [showModal, setShowModal] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const handleOpenModal = (item) => {
    setActiveItem(item);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setActiveItem(null);
    setShowModal(false);
  };

  return (
    <>
      <div className="row">
        {items.map((item, index) => {
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
                        src="/img/product-default-img.jpg"
                        alt={item?.name || "Blog image"}
                      />
                    </div>
                  </div>
                  <div className="inner">
                    <img
                      src={item?.img2 || "/img/product-default-img.jpg"}
                      alt={item?.name || "Blog image"}
                    />
                  </div>
                </div>

                <div className="blog-two__single-content">
                  <h2>{item?.name || "Untitled"}</h2>
                  <ul className="meta-box">
                    {item?.description && <li>{item.description}</li>}
                    {item?.description && item?.code && <li>-</li>}
                    {item?.code && <li>{item.code}</li>}
                  </ul>

                  <div className="btn-box">
                    <button
                      className="btn btn-link"
                      onClick={() => handleOpenModal(item)}
                    >
                      Read More <span className="icon-right-arrow-5"></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal */}
      {showModal && activeItem && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={handleCloseModal}>
              &times;
            </button>
            <h2>{activeItem.name}</h2>
            {/* <img
              src={activeItem.img2 || "/img/product-default-img.jpg"}
              alt={activeItem.name}
              style={{ width: "100%", marginBottom: "1rem" }}
            /> */}
            <p>{activeItem.description}</p>
            <p>
              <strong>Code:</strong> {activeItem.code}
            </p>

            <hr style={{ margin: "1.5rem 0" }} />

            {/* Contact Information */}
            <div className="contact-info">
              <div className="contact-row">
                <span className="icon">
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 4h16v2H4zM4 18h16v2H4zM4 9h16v6H4z" />
                  </svg>
                </span>
                <a href="mailto:sales@bestechparts.ae">sales@bestechparts.ae</a>
              </div>

              <div className="contact-row">
                <span className="icon">
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6.62 10.79a15.91 15.91 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21 12.07 12.07 0 003.78.6 1 1 0 011 1V20a1 1 0 01-1 1A16 16 0 014 5a1 1 0 011-1h3.25a1 1 0 011 1 12.07 12.07 0 00.6 3.78 1 1 0 01-.21 1.11z" />
                  </svg>
                </span>
                <a href="tel:065227299">06 522 7299</a>
              </div>

              <div className="contact-row">
                <span className="icon">
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6.62 10.79a15.91 15.91 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21 12.07 12.07 0 003.78.6 1 1 0 011 1V20a1 1 0 01-1 1A16 16 0 014 5a1 1 0 011-1h3.25a1 1 0 011 1 12.07 12.07 0 00.6 3.78 1 1 0 01-.21 1.11z" />
                  </svg>
                </span>
                <a href="tel:+971543093833">+971 54 309 3833</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BrandCardFour;

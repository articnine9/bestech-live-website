"use client";

import { useEffect, useState } from "react";
import ProjectInfoCard from "~/components/Ui/Cards/ProjectInfoCard";
import RelatedProduct from "@/components/Section/Common/RelatedProduct";

const DetailsSection = ({ product, category }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [preloadedImages, setPreloadedImages] = useState({});
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const images = product?.images?.length ? product.images : [product?.image];

  const goToSlide = (index) => {
    const newIndex = (index + images.length) % images.length;
    setCurrentSlideIndex(newIndex);
  };

  const preloadImages = () => {
    const loaded = {};
    images.forEach((src) => {
      loaded[src] = new Image();
      loaded[src].src = src;
    });
    setPreloadedImages(loaded);
  };

  useEffect(() => {
    preloadImages();
  }, []);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowRight") goToSlide(currentSlideIndex + 1);
      if (e.key === "ArrowLeft") goToSlide(currentSlideIndex - 1);
    };

    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [currentSlideIndex]);

  return (
    <section className="project-details-page padding">
      <div className="container">
        <div className="row">
          {/* Main Content */}
          <div className="col-xl-8">
            <div className="services-details-page__content">
              {/* <div className="services-details-page__content-img1">
                <img
                  src={product?.image || images[0]}
                  alt={product?.name || "Product image"}
                />
              </div> */}

              {/* Image Slider */}
              <div className="image-slider">
                <section className="slider__content">
                  <button
                    type="button"
                    className="slider-control--button prev-button"
                    onClick={() => goToSlide(currentSlideIndex - 1)}
                  >
                    &#8592;
                  </button>
                  <main
                    className="image-display"
                    onClick={() => setLightboxOpen(true)}
                  >
                    <img
                      src={images[currentSlideIndex]}
                      alt={`Slide ${currentSlideIndex + 1}`}
                    />
                  </main>
                  <button
                    type="button"
                    className="slider-control--button next-button"
                    onClick={() => goToSlide(currentSlideIndex + 1)}
                  >
                    &#8594;
                  </button>
                </section>

                <nav className="slider-navigation">
                  {images.map((imgSrc, index) => (
                    <button
                      key={index}
                      className="nav-button"
                      aria-selected={index === currentSlideIndex}
                      onClick={() => goToSlide(index)}
                    >
                      <img
                        className="thumbnail"
                        src={imgSrc}
                        alt={`Thumbnail ${index + 1}`}
                      />
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-xl-4">
            <ProjectInfoCard product={product} category={category} />
          </div>
        </div>
        <div>
          <RelatedProduct category={category} />
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="lightbox-overlay"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            className="lightbox-arrow left"
            onClick={(e) => {
              e.stopPropagation();
              goToSlide(currentSlideIndex - 1);
            }}
          >
            &#8592;
          </button>

          <img
            src={images[currentSlideIndex]}
            alt={`Lightbox Slide ${currentSlideIndex + 1}`}
            className="lightbox-image"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="lightbox-arrow right"
            onClick={(e) => {
              e.stopPropagation();
              goToSlide(currentSlideIndex + 1);
            }}
          >
            &#8594;
          </button>

          <button
            className="lightbox-close"
            onClick={() => setLightboxOpen(false)}
          >
            &times;
          </button>
        </div>
      )}
    </section>
  );
};

export default DetailsSection;

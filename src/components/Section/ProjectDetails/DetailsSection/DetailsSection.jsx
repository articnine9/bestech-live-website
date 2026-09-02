"use client";

import { useEffect, useState } from "react";
import ProjectInfoCard from "~/components/Ui/Cards/ProjectInfoCard";
import RelatedProduct from "@/components/Section/Common/RelatedProduct";

const DetailsSection = ({ product, category }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Safely build images array
  const images =
    Array.isArray(product?.slider) && product.slider.length > 0
      ? product.slider.map((num) => {
          const basePath = product.image?.substring(
            0,
            product.image.lastIndexOf("/") + 1,
          );
          return `${basePath}${num}.jpg`;
        })
      : product?.image
        ? [product.image]
        : [];

  const goToSlide = (index) => {
    const newIndex = (index + images.length) % images.length;
    setCurrentSlideIndex(newIndex);
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowRight") goToSlide(currentSlideIndex + 1);
      if (e.key === "ArrowLeft") goToSlide(currentSlideIndex - 1);
    };

    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [currentSlideIndex]);

  if (!product) {
    // Optional: render loading or placeholder
    return <p>Loading product details...</p>;
  }

  const getAltText = (imagePath, index) => {
  const parts = imagePath.split("/");
  const folderName = parts[parts.length - 2]; // gets the folder name
  const cleanName = folderName.replace(/-/g, " "); // replace - with space
  return `${cleanName} Slide ${index + 1}`;
};

  return (
    <section className="project-details-page padding">
      <div className="container">
        <div className="row">
          {/* Main Content */}
          <div className="col-xl-8">
            <div className="services-details-page__content">
              {/* Image Slider */}
              {images.length > 0 && (
                <div className="image-slider mb-4">
                  <section className="slider__content">
                    <button
                      type="button"
                      className="slider-control--button prev-button"
                      aria-label="Previous slide"
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
                        alt={getAltText(images[currentSlideIndex], currentSlideIndex)}
                      />
                    </main>
                    <button
                      type="button"
                      className="slider-control--button next-button"
                      aria-label="Next slide"
                      onClick={() => goToSlide(currentSlideIndex + 1)}
                    >
                      &#8594;
                    </button>
                  </section>

                  <nav className="slider-navigation">
                    {images.map((imgSrc, index) => (
                      <button
                        key={index}
                        type="button"
                        className="nav-button"
                        aria-label={`Go to slide ${index + 1}`}
                        aria-selected={index === currentSlideIndex}
                        onClick={() => goToSlide(index)}
                      >
                        <img
                          className="thumbnail"
                          src={imgSrc}
                          alt={`Slide ${index + 1}`}
                        />
                      </button>
                    ))}
                  </nav>
                </div>
              )}

              {/* Product Description */}

              {/* Product Description */}
              {Array.isArray(product?.paragraph_text) ? (
                product.paragraph_text.map((item, index) => (
                  <div
                    key={index}
                    className="productContent mb-3 mx-3"
                    dangerouslySetInnerHTML={{ __html: item }}
                  />
                ))
              ) : product?.paragraph_text ? (
                <div
                  className="productContent mb-3 mx-3"
                  dangerouslySetInnerHTML={{ __html: product.paragraph_text }}
                />
              ) : null}
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-xl-4">
            <ProjectInfoCard product={product} category={category} />
          </div>
        </div>

        {/* Related Products */}
        {category && <RelatedProduct category={category} product={product}/>}
      </div>

      {/* Lightbox */}
      {lightboxOpen && images.length > 0 && (
        <div
          className="lightbox-overlay"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            type="button"
            className="lightbox-arrow left"
            aria-label="Previous image"
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
            type="button"
            className="lightbox-arrow right"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              goToSlide(currentSlideIndex + 1);
            }}
          >
            &#8594;
          </button>

          <button
            type="button"
            className="lightbox-close"
            aria-label="Close image viewer"
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

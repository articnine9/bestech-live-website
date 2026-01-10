"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import RelatedProduct from "./RelatedSlider";

const Service = ({ category }) => {
  return (
    <section className="service-one pb-0">
      <div className="container">
        <div className="service-one__top">
          <div className="sec-title">
            <div className="sub-title">
              <div>
                <span className="icon-right-arrow-1"></span>
              </div>
            </div>
            <div className="section-title-text">Related Product</div>
          </div>

          {/* <div className="btn-box">
            <Link className="thm-btn" href="services">
              <span className="txt">View All Product</span>
              <i className="icon-right-arrow"></i>
            </Link>
          </div> */}
        </div>
        <Swiper
          className="thm-swiper__slider swiper-container"
          spaceBetween={50}
          slidesPerView={3}
          loop={true}
          pagination={{
            el: "#service-one__pagination",
            type: "bullets",
            clickable: true,
          }}
          navigation={{
            nextEl: "#team-one__swiper-button-next",
            prevEl: "#team-one__swiper-button-prev",
          }}
          autoplay={{
            delay: 5000,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            375: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            575: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            992: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Autoplay, Navigation]}
        >
          <div className="swiper-wrapper">
            {category?.items?.map((item, index) => (
              <SwiperSlide className="swiper-slide" key={index}>
                <RelatedProduct item={item} />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
        <div className="swiper-pagination" id="service-one__pagination"></div>
      </div>
    </section>
  );
};

export default Service;

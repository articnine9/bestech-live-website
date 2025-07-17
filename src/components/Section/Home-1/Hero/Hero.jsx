"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="main-slider main-slider-one">
      <Swiper
        className="swiper-container thm-swiper__slider"
        slidesPerView={1}
        loop={true}
        effect={"fade"}
        pagination={{
          el: "#main-slider-pagination",
          type: "bullets",
          clickable: true,
        }}
        navigation={{
          nextEl: "#main-slider__swiper-button-next",
          prevEl: "#main-slider__swiper-button-prev",
        }}
        autoplay={{
          delay: 7000,
        }}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
      >
        <div className="swiper-wrapper">
          <SwiperSlide className="swiper-slide">
            <div
              className="image-layer"
              style={{
                backgroundImage: "url(/img/header/slider/1.jpg)",
              }}
            ></div>
            <div className="big-title">
              <h2>Bestech</h2>
            </div>
            <div className="img-box">
              <img src="/img/slider/slider-v1-img4.png" alt="" />
            </div>
            <div className="icon-one">
              <img src="/img/icon/slider-v1-icon1.png" alt="" />
            </div>
            <div className="icon-two">
              <img src="/img/icon/slider-v1-icon2.png" alt="" />
            </div>
            <div className="container">
              <div className="main-slider-one__single padding">
                <div className="main-slider-one__content">
                  <h3>
                    <span>01.</span> Engineering Excellence
                  </h3>
                  <h2>
                    Engineering Excellence. <br />
                    <span>Trusted</span> Solutions.
                  </h2>
                  <p>
                    Delivering high-quality elevator and engineering products
                    built for performance, <br />
                    safety, and reliability.
                  </p>
                  <div className="btn-box">
                    <Link className="thm-btn" href="/products">
                      <span className="txt">Explore Products</span>
                      <i className="icon-right-arrow"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div
              className="image-layer"
              style={{
                backgroundImage: "url(/img/header/slider/2.jpg)",
              }}
            ></div>
            <div className="big-title">
              <h2>Bestech</h2>
            </div>
            <div className="img-box">
              <img src="/img/slider/slider-v1-img4.png" alt="" />
            </div>
            <div className="icon-one">
              <img src="/img/icon/slider-v1-icon1.png" alt="" />
            </div>
            <div className="icon-two">
              <img src="/img/icon/slider-v1-icon2.png" alt="" />
            </div>
            <div className="container">
              <div className="main-slider-one__single padding">
                <div className="main-slider-one__content">
                  <h3>
                    <span>02.</span> Safety You Can Trust
                  </h3>
                  <h2>
                    Safety You Can Trust. <br />
                    <span>Quality</span> You Deserve.
                  </h2>
                  <p>
                    Precision components and tested technology that ensure your
                    elevator systems <br />
                    run safely and smoothly, every time.
                  </p>
                  <div className="btn-box">
                    <Link className="thm-btn" href="/about">
                      <span className="txt">Our Expertise</span>
                      <i className="icon-right-arrow"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div
              className="image-layer"
              style={{
                backgroundImage: "url(/img/header/slider/3.jpg)",
              }}
            ></div>
            <div className="big-title">
              <h2>Bestech</h2>
            </div>
            <div className="img-box">
              <img src="/img/slider/slider-v1-img4.png" alt="" />
            </div>
            <div className="icon-one">
              <img src="/img/icon/slider-v1-icon1.png" alt="" />
            </div>
            <div className="icon-two">
              <img src="/img/icon/slider-v1-icon2.png" alt="" />
            </div>
            <div className="container">
              <div className="main-slider-one__single padding">
                <div className="main-slider-one__content">
                  <h3>
                    <span>03.</span> Innovation in Motion
                  </h3>
                  <h2>
                    Innovation in Motion. <br />
                    <span>Reliability</span> in Every Part.
                  </h2>
                  <p>
                    From sensors to control boards, we deliver cutting-edge
                    solutions <br />
                    that drive performance and reduce downtime.
                  </p>
                  <div className="btn-box">
                    <Link className="thm-btn" href="/contact">
                      <span className="txt">Contact Us</span>
                      <i className="icon-right-arrow"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </div>
        <div className="swiper-pagination" id="main-slider-pagination"></div>
        <div className="main-slider__nav">
          <div
            className="swiper-button-prev"
            id="main-slider__swiper-button-next"
          >
            <i className="fa fa-angle-left" aria-hidden="true"></i>
          </div>
          <div
            className="swiper-button-next"
            id="main-slider__swiper-button-prev"
          >
            <i className="fa fa-angle-right" aria-hidden="true"></i>
          </div>
        </div>
      </Swiper>
    </section>
  );
};

export default Hero;

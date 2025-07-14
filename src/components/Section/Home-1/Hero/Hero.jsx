"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/effect-fade';
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
                backgroundImage: "url(/img/slider/slider-v1-img1.jpg)",
              }}
            ></div>
            <div className="big-title">
              <h2>Air Freight</h2>
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
                    <span>01.</span> AIR Freight
                  </h3>
                  <h2>
                    Fast and safe <br />
                    <span>transport</span> your <br />
                    product
                  </h2>
                  <p>
                    With more than 30 years of experience in the logistics
                    industry <br />
                    bibendum auctor nisi elit more consequat ipsum.
                  </p>
                  <div className="btn-box">
                    <Link className="thm-btn" href="/">
                      <span className="txt">Calculate Package</span>
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
                backgroundImage: "url(/img/slider/slider-v1-img2.jpg)",
              }}
            ></div>
            <div className="big-title">
              <h2>Air Freight</h2>
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
                    <span>02.</span> AIR Freight
                  </h3>
                  <h2>
                    Fast and safe <br />
                    <span>transport</span> your <br />
                    product
                  </h2>
                  <p>
                    With more than 30 years of experience in the logistics
                    industry <br />
                    bibendum auctor nisi elit more consequat ipsum.
                  </p>
                  <div className="btn-box">
                    <Link className="thm-btn" href="/">
                      <span className="txt">Calculate Package</span>
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
                backgroundImage: "url(/img/slider/slider-v1-img3.jpg)",
              }}
            ></div>
            <div className="big-title">
              <h2>Air Freight</h2>
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
                    <span>03.</span> AIR Freight
                  </h3>
                  <h2>
                    Fast and safe <br />
                    <span>transport</span> your <br />
                    product
                  </h2>
                  <p>
                    With more than 30 years of experience in the logistics
                    industry <br />
                    bibendum auctor nisi elit more consequat ipsum.
                  </p>
                  <div className="btn-box">
                    <Link className="thm-btn" href="/">
                      <span className="txt">Calculate Package</span>
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

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
        autoplay={{ delay: 7000 }}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
      >
        <SwiperSlide>
          <div
            className="image-layer"
            style={{ backgroundImage: "url(/img/header/slider/1.jpg)" }}
          ></div>

          <div className="big-title">
            <div>Bestech</div>
          </div>

          <div className="img-box">
            <img src="/img/slider/slider-v1-img4.png" alt="Bestech" />
          </div>

          <div className="icon-one">
            <img src="/img/icon/slider-v1-icon1.png" alt="Bestech" />
          </div>

          <div className="icon-two">
            <img src="/img/icon/slider-v1-icon2.png" alt="Bestech" />
          </div>

          <div className="container">
            <div className="main-slider-one__single padding">
              <div className="main-slider-one__content">
                <div className="hero-title">
                  Engineering Excellence. <br />
                  <span>Trusted</span> Solutions.
                </div>

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

        <SwiperSlide>
          <div
            className="image-layer"
            style={{ backgroundImage: "url(/img/header/slider/2.jpg)" }}
          ></div>

          <div className="big-title">
            <div>Bestech</div>
          </div>

          <div className="img-box">
            <img src="/img/slider/slider-v1-img4.png" alt="Bestech" />
          </div>

          <div className="icon-one">
            <img src="/img/icon/slider-v1-icon1.png" alt="Bestech" />
          </div>

          <div className="icon-two">
            <img src="/img/icon/slider-v1-icon2.png" alt="Bestech" />
          </div>

          <div className="container">
            <div className="main-slider-one__single padding">
              <div className="main-slider-one__content">
                <div className="hero-title">
                  Safety You Can Trust. <br />
                  <span>Quality</span> You Deserve.
                </div>

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

        <SwiperSlide>
          <div
            className="image-layer"
            style={{ backgroundImage: "url(/img/header/slider/3.jpg)" }}
          ></div>

          <div className="big-title">
            <div>Bestech</div>
          </div>

          <div className="img-box">
            <img src="/img/slider/slider-v1-img4.png" alt="Bestech" />
          </div>

          <div className="icon-one">
            <img src="/img/icon/slider-v1-icon1.png" alt="Bestech" />
          </div>

          <div className="icon-two">
            <img src="/img/icon/slider-v1-icon2.png" alt="Bestech" />
          </div>

          <div className="container">
            <div className="main-slider-one__single padding">
              <div className="main-slider-one__content">
                <div className="hero-title">
                  Innovation in Motion. <br />
                  <span>Reliability</span> in Every Part.
                </div>

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

        <div className="swiper-pagination" id="main-slider-pagination"></div>

        <div className="main-slider__nav">
          <div
            className="swiper-button-prev"
            id="main-slider__swiper-button-next"
          >
            <i className="fa fa-angle-left"></i>
          </div>
          <div
            className="swiper-button-next"
            id="main-slider__swiper-button-prev"
          >
            <i className="fa fa-angle-right"></i>
          </div>
        </div>
      </Swiper>
    </section>
  );
};

export default Hero;

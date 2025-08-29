"use client";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import "./styles.css";

// import required modules
import { Autoplay } from "swiper/modules";

const Banner = ({
  thumbnail = "https://static.vecteezy.com/system/resources/previews/011/871/820/non_2x/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg",
}) => {
  return (
    <>
      <section className="w-full ">
        {/* 16:9 aspect ratio for YouTube-like thumbnail */}
        <div className="relative w-full aspect-video md:aspect-[21/9] overflow-hidden ">
          {/* Background Image */}
          <Swiper
            spaceBetween={0}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
            loop={true}
            modules={[Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                src={
                  "https://t3.ftcdn.net/jpg/04/65/46/52/360_F_465465254_1pN9MGrA831idD6zIBL7q8rnZZpUCQTy.jpg"
                } // <-- replace with your image path
                alt="Banner"
                className="w-full h-full md:object-center md:object-cover "
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={thumbnail} // <-- replace with your image path
                alt="Banner"
                className="w-full h-full md:object-center md:object-cover "
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={thumbnail} // <-- replace with your image path
                alt="Banner"
                className="w-full h-full md:object-center md:object-cover "
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                loading="lazying"
                src={thumbnail} // <-- replace with your image path
                alt="Banner"
                className="w-full h-full md:object-center md:object-cover "
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={thumbnail} // <-- replace with your image path
                alt="Banner"
                className="w-full h-full md:object-center md:object-cover "
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={thumbnail} // <-- replace with your image path
                alt="Banner"
                className="w-full h-full md:object-center md:object-cover "
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Banner;
1;

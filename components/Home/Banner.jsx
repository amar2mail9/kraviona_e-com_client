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
  thumbnail = "https://pagefly.io/cdn/shop/articles/The_Complete_Guide_to_Shopify_Banner_Size_with_Best_Practices_a00bd2ed-24ed-4d71-90de-320a664b7e69.png?v=1747127923&width=1640",
}) => {
  return (
    <>
      <section className="w-full mx-auto">
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
            s
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

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper/modules";
import { useState } from "react";
import { Dialog } from "@mui/material";

function ProductImageSlider({ product }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [open, setOpen] = useState(false);
  const [activeImg, setActiveImg] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const handleOpen = (img) => {
    setActiveImg(img);
    setOpen(true);
  };

  return (
    <div className="w-full">
      {/* Main Image Swiper */}
      <Swiper
        loop={true}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[FreeMode, Thumbs]}
        className="w-full h-[400px] rounded-xl bg-gray-50"
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // track active slide
      >
        {product?.images?.map((img, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={img}
              alt={`${product?.title} ${idx + 1}`}
              onClick={() => handleOpen(img)}
              className="w-full h-full object-contain rounded-xl cursor-zoom-in transition-transform hover:scale-105"
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Swiper */}
      {/* Thumbnail Swiper */}
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={false}
        spaceBetween={10}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        className="mt-4 h-[100px]"
        breakpoints={{
          320: { slidesPerView: 3, spaceBetween: 8 }, // Mobile
          640: { slidesPerView: 4, spaceBetween: 10 }, // Tablet
          1024: { slidesPerView: 5, spaceBetween: 12 }, // Desktop
        }}
      >
        {product?.images?.map((img, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={img}
              alt={`Thumbnail ${idx + 1}`}
              className={`w-20 h-20 object-cover rounded-md cursor-pointer border-2 transition-all 
          ${
            activeIndex === idx
              ? "border-blue-500 shadow-md"
              : "border-gray-300 hover:border-gray-400"
          }`}
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Fullscreen Image Modal */}
      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="lg">
        <div className="bg-white p-4 flex items-center justify-center">
          <img
            src={activeImg}
            alt="Fullscreen product"
            className="max-h-[80vh] object-contain "
          />
        </div>
      </Dialog>
    </div>
  );
}

export default ProductImageSlider;

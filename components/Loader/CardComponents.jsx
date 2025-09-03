"use client";

import { Button } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import Link from "next/link";
import ButtonCard from "./ButtonCard";
import { priceCalculated } from "@/context/data";

const buttonType2 = {
  "background-color": "#f19232",
};

export const CardLoader = () => {
  return (
    <div
      className="
        w-[100%] sm:w-[250px] lg:w-[260px] 
        rounded-lg overflow-hidden 
        flex flex-col 
        mx-auto
        border border-gray-200 shadow-sm bg-white
      "
    >
      {/* Image placeholder */}
      <div className="bg-gray-200 h-[160px] animate-pulse flex items-center justify-center">
        <div className="w-20 h-20 bg-gray-300 rounded-md animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="p-3 flex flex-col flex-1 space-y-2">
        {/* Title */}
        <div className="w-3/4 h-4 bg-gray-200 rounded-md animate-pulse" />
        {/* Category */}
        <div className="w-1/2 h-3 bg-gray-200 rounded-md animate-pulse" />

        {/* Price + Discount */}
        <div className="flex gap-2 mt-2">
          <div className="w-12 h-4 bg-gray-200 rounded-md animate-pulse" />
          <div className="w-10 h-3 bg-gray-200 rounded-md animate-pulse" />
          <div className="w-8 h-3 bg-gray-200 rounded-md animate-pulse" />
        </div>

        {/* Rating */}
        <div className="flex gap-1 mt-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="w-4 h-4 bg-gray-200 rounded-full animate-pulse"
            />
          ))}
          <div className="w-8 h-3 bg-gray-200 rounded-md animate-pulse ml-2" />
        </div>

        {/* Buttons → only show on lg screens */}
        <div className="hidden lg:flex mt-3 gap-2">
          <div className="flex-1 h-9 bg-gray-200 rounded-md animate-pulse" />
          <div className="flex-1 h-9 bg-gray-200 rounded-md animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export const CardDesign = ({
  title = "Essence Mascara Lash Princess",
  category = "Beauty",
  price = 9.99,
  id,
  discountPercentage = 10.48,
  rating = 2.56,
  thumbnail = "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
}) => {
  // Calculate discounted price
  const discountedPrice = (price - (price * discountPercentage) / 100).toFixed(
    2
  );

  return (
    <section>
      <div
        className="
          w-[100%] sm:w-[250px] lg:w-[260px] 
          rounded-lg overflow-hidden 
          flex flex-col 
          transition-all duration-300 hover:scale-[1.09] hover:cursor-pointer hover:shadow-2xl ease-in-out 
          mx-auto
          
        "
        style={{
          background: "var(--surface)",
          boxShadow: "0 0 20px 1px #19191930",
        }}
      >
        {/* Product Image */}
        <div className=" w-[180px] bg-white h-[160px] flex items-center justify-center mx-auto">
          <Link href={`/${id}`}>
            <img
              loading="lazy"
              src={thumbnail}
              alt={title}
              className="w-full h-full object-contain p-4"
            />
          </Link>
        </div>

        {/* Product Details */}
        <div className="p-3 flex flex-col flex-1">
          <h2 className="text-gray-800 font-semibold text-sm sm:text-[14px] line-clamp-2">
            {title}
          </h2>
          <p className="text-xs sm:text-[11px] text-gray-500">{category}</p>

          {/* Price + Discount */}
          <div className="flex md:flex-row flex-col md:items-center items-start md:gap-2 mt-2">
            <span className="text-base sm:text-md font-bold text-gray-900">
              ₹{priceCalculated(price, discountPercentage).toFixed(2)}
            </span>
            <div>
              <span className="line-through text-xs sm:text-sm text-gray-400">
                ₹{price}
              </span>
              <span className="text-xs sm:text-sm text-green-600 font-medium">
                -{discountPercentage}%
              </span>
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1 mt-1">
            {Array.from({ length: Math.round(rating) }, (_, i) => (
              <span key={i} className="text-yellow-400 text-sm sm:text-base">
                ⭐
              </span>
            ))}
            <p className="text-xs sm:text-sm text-gray-600">
              ({rating.toFixed(1)})
            </p>
          </div>

          {/* Buttons → only show on lg screens */}
          <ButtonCard id={id} />
        </div>
      </div>
    </section>
  );
};

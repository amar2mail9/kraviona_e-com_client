"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { colorcode, fetchApi, priceCalculated } from "@/context/data";
import { CardLoader } from "../Loader/CardComponents";
import { ShoppingCart } from "@mui/icons-material";
import { Button } from "@mui/material";
import BannerLoader from "../Loader/BannerLoader";

function ProductDetailsComponents() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [image, setImage] = useState(0);

  const viewImage = (idx) => setImage(idx);

  useEffect(() => {
    fetchApi(`product/${id}`)
      .then((res) => {
        if (res) setProduct(res);
      })
      .catch(() => {});
  }, [id]);

  if (!product)
    return (
      <div className=" ">
        <BannerLoader />;
      </div>
    );

  return (
    <div className=" ">
      <div
        className="w-full"
        style={{
          background: `${colorcode.cardBg}`,
          borderRadius: 30,
          boxShadow: "0 0 20px 1px #19191930",
        }}
      >
        {/* Product top section */}
        <div className="w-full grid md:grid-cols-2 grid-cols-1 items-center justify-center  p-8">
          {/* Thumbnail */}
          <div className="w-full ">
            <img
              src={product?.images[image]}
              alt={product?.title}
              className=" w-[110%] h-72 mx-auto object-contain rounded-lg"
            />

            {/* All Images */}
            <div className=" w-full flex justify-center  overflow-x-scroll mt-3">
              <div className="flex gap-2 ">
                {product?.images?.map((img, index) => (
                  <div
                    key={index}
                    onClick={() => viewImage(index)}
                    className={`w-20 h-20 cursor-pointer rounded-md overflow-hidden shadow-md border 
                  ${
                    image === index ? "border-blue-500" : "border-transparent"
                  }`}
                    style={{
                      background: `${colorcode.cardBg}`,
                      borderRadius: 5,
                      boxShadow: "0 0 20px 1px #19191930",
                    }}
                  >
                    <img
                      src={img}
                      alt={`${product?.title} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* details */}
          <div className="w-full p-4 flex items-start gap-4 flex-col text-gray-800">
            <h2 className="text-xl font-bold mb-2">{product?.title}</h2>

            {/* Price Section */}
            <div className="flex gap-2 items-center">
              <span className="text-lg font-bold text-green-600">
                ₹
                {priceCalculated(
                  product?.price,
                  product?.discountPercentage
                ).toFixed(2)}
              </span>
              <span className="line-through text-gray-500">
                ₹ {product?.price.toFixed(2)}
              </span>
              <span className="text-sm text-red-500">
                ({product?.discountPercentage}% OFF)
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-600 mb-4">
              <strong>Description:</strong> {product?.description}
            </p>

            {/* Buttons */}
            <div className="hidden w-[70%] lg:flex mt-3 gap-2">
              <Button
                variant="contained"
                className="!flex-1 !capitalize !gap-2"
                style={{
                  background: colorcode.button.bg,
                }}
              >
                <ShoppingCart /> Add to Cart
              </Button>
              <Button className="!flex-1" variant="outlined">
                Buy Now
              </Button>
            </div>
          </div>
        </div>

        <hr className="border-2 border-gray-300 rounded-2xl mx-3" />

        {/* Product Extra Details */}
        <div className="w-[95%] p-4 mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-8 grid-cols-1">
          {/* SKU / Stock */}
          <div
            className="p-4"
            style={{
              background: `${colorcode.cardBg}`,
              boxShadow: "0 0 20px 1px #19191930",
              borderRadius: 10,
            }}
          >
            <h3 className="font-semibold text-lg mb-2">Product Info</h3>
            <p>SKU: {product?.sku || "N/A"}</p>
            <p>Stock: {product?.stock}</p>
            <p>
              Availability: {product?.stock > 0 ? "In Stock" : "Out of Stock"}
            </p>
          </div>

          {/* Warranty / Shipping */}
          <div
            className="p-4"
            style={{
              background: `${colorcode.cardBg}`,
              boxShadow: "0 0 20px 1px #19191930",
              borderRadius: 10,
            }}
          >
            <h3 className="font-semibold text-lg mb-2">Warranty & Shipping</h3>
            <p>Warranty: {product?.warranty || "1 month warranty"}</p>
            <p>Shipping: {product?.shipping || "Ships overnight"}</p>
            <p>
              Return Policy: {product?.returnPolicy || "7 days return policy"}
            </p>
          </div>

          {/* Dimensions */}
          <div
            className="p-4"
            style={{
              background: `${colorcode.cardBg}`,
              boxShadow: "0 0 20px 1px #19191930",
              borderRadius: 10,
            }}
          >
            <h3 className="font-semibold text-lg mb-2">Dimensions</h3>
            <p>Width: {product?.dimensions?.width || "N/A"} cm</p>
            <p>Height: {product?.dimensions?.height || "N/A"} cm</p>
            <p>Depth: {product?.dimensions?.depth || "N/A"} cm</p>
          </div>

          {/* Tags */}
          <div
            className="p-4 col-span-1 md:col-span-2"
            style={{
              background: `${colorcode.cardBg}`,
              boxShadow: "0 0 20px 1px #19191930",
              borderRadius: 10,
            }}
          >
            <h3 className="font-semibold text-lg mb-2">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {product?.tags?.map((tag, i) => (
                <span key={i} className="px-2 py-1 text-xs bg-gray-200 rounded">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Reviews */}
          <div
            className="p-4 col-span-1 md:col-span-2 lg:col-span-3"
            style={{
              background: `${colorcode.cardBg}`,
              boxShadow: "0 0 20px 1px #19191930",
              borderRadius: 10,
            }}
          >
            <h3 className="font-semibold text-lg mb-2">Reviews</h3>
            {product?.reviews?.length > 0 ? (
              product.reviews.map((rev, idx) => (
                <div key={idx} className="border-b py-2">
                  <p className="font-medium text-sm">
                    {rev.name} ({rev.date})
                  </p>
                  <p className="text-sm">⭐ {rev.rating} stars</p>
                  <p className="text-xs text-gray-600">{rev.comment}</p>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-500">No reviews yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsComponents;

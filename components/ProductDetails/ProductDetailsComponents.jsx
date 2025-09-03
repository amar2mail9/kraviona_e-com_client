"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchApi, priceCalculated } from "@/context/data";

import { ShoppingCart } from "@mui/icons-material";
import { Button, Rating } from "@mui/material";
import BannerLoader from "../Loader/BannerLoader";
import ButtonCard from "../Loader/ButtonCard";

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
      <div className="flex justify-center items-center min-h-[70vh]">
        <BannerLoader />
      </div>
    );

  return (
    <div className="max-w-6xl mx-auto md:p-6">
      <div
        className="w-full rounded-2xl bg-white shadow-lg overflow-hidden"
        style={{ boxShadow: "0 6px 25px rgba(0,0,0,0.08)" }}
      >
        {/* Top Section */}
        <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-8 p-6">
          {/* Left - Main Image + Thumbnails */}
          <div className="flex flex-col items-center">
            <img
              src={product?.images[image]}
              alt={product?.title}
              className="w-full max-h-96 object-contain rounded-xl  bg-gray-50"
            />

            {/* Thumbnails */}
            <div className="flex gap-3 mt-4 overflow-x-auto scrollbar-hide">
              {product?.images?.map((img, index) => (
                <button
                  key={index}
                  onClick={() => viewImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 
                    ${
                      image === index
                        ? "border-blue-500"
                        : "border-gray-200 hover:border-gray-400"
                    }`}
                >
                  <img
                    src={img}
                    alt={`${product?.title} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right - Product Details */}
          <div className="flex flex-col gap-4 text-gray-800">
            <h2 className="text-2xl font-bold">{product?.title}</h2>

            {/* Price Section */}
            <div className="flex gap-3 items-center">
              <span className="text-2xl font-extrabold text-green-600">
                ₹
                {priceCalculated(
                  product?.price,
                  product?.discountPercentage
                ).toFixed(2)}
              </span>
              <span className="line-through text-gray-500 text-lg">
                ₹ {(product?.price).toFixed(2)}
              </span>
              <span className="text-sm font-medium text-red-500 bg-red-50 px-2 py-1 rounded-md">
                {product?.discountPercentage}% OFF
              </span>
            </div>

            {/* Rating */}
            <Rating
              value={product?.rating || 0}
              precision={0.5}
              readOnly
              size="medium"
            />

            {/* Description */}
            <p className="text-gray-600 leading-relaxed">
              {product?.description}
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mt-4">
              <ButtonCard />
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-200" />

        {/* Extra Info */}
        <div className="w-full p-6 grid lg:grid-cols-3 md:grid-cols-2 gap-6">
          {/* Product Info */}
          <InfoCard title="Product Info">
            <p>SKU: {product?.sku || "N/A"}</p>
            <p>Stock: {product?.stock}</p>
            <p>
              Availability:{" "}
              <span
                className={`font-semibold ${
                  product?.stock > 0 ? "text-green-600" : "text-red-500"
                }`}
              >
                {product?.stock > 0 ? "In Stock" : "Out of Stock"}
              </span>
            </p>
          </InfoCard>

          {/* Warranty & Shipping */}
          <InfoCard title="Warranty & Shipping">
            <p>Warranty: {product?.warranty || "1 month warranty"}</p>
            <p>Shipping: {product?.shipping || "Ships overnight"}</p>
            <p>
              Return Policy: {product?.returnPolicy || "7 days return policy"}
            </p>
          </InfoCard>

          {/* Dimensions */}
          <InfoCard title="Dimensions">
            <p>Width: {product?.dimensions?.width || "N/A"} cm</p>
            <p>Height: {product?.dimensions?.height || "N/A"} cm</p>
            <p>Depth: {product?.dimensions?.depth || "N/A"} cm</p>
          </InfoCard>

          {/* Tags */}
          {product?.tags?.length > 0 && (
            <InfoCard title="Tags" className="lg:col-span-3">
              <div className="flex flex-wrap gap-2">
                {product?.tags?.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs bg-gray-100 border rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </InfoCard>
          )}

          {/* Reviews */}
          <InfoCard title="Reviews" className="lg:col-span-3">
            {product?.reviews?.length > 0 ? (
              <div className="space-y-3">
                {product.reviews.map((rev, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-gray-50 rounded-lg  hover:shadow-sm transition"
                  >
                    <p className="font-medium text-sm">
                      {rev.name}{" "}
                      <span className="text-gray-400">({rev.date})</span>
                    </p>
                    <Rating value={rev.rating} readOnly size="small" />
                    <p className="text-xs text-gray-600 mt-1">{rev.comment}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-500">No reviews yet.</p>
            )}
          </InfoCard>
        </div>
      </div>
    </div>
  );
}

const InfoCard = ({ title, children, className = "" }) => (
  <div
    className={`p-4 bg-white rounded-xl  shadow-sm ${className}`}
    style={{ boxShadow: "0 4px 15px rgba(0,0,0,0.05)" }}
  >
    <h3 className="font-semibold text-lg mb-2">{title}</h3>
    <div className="space-y-1 text-sm text-gray-700">{children}</div>
  </div>
);

export default ProductDetailsComponents;

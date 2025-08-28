"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { colorcode, fetchApi } from "@/context/data";
import { CardLoader } from "../Loader/CardComponents";
import { ShoppingCart } from "@mui/icons-material";
import { Button } from "@mui/material";
function ProductDetailsComponents() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [image, setImage] = useState(0);
  const [Loader, setLoader] = useState(false);

  console.log("product", product);

  const viewImage = (idx) => {
    setImage(idx);
  };

  useEffect(() => {
    fetchApi(`product/${id}`)
      .then((res) => {
        if (res) setProduct(res);
      })
      .catch(() => {});
  }, [id]);
  return (
    <div className="w-full px-3 lg:px-[10%] py-[20px] ">
      {product === null ? (
        <CardLoader />
      ) : (
        <div
          className="w-full grid md:grid-cols-2 grid-cols-1  py-8"
          style={{
            background: `${colorcode.cardBg}`,
            borderRadius: 5,
            boxShadow: "0 0 20px 1px #19191930",
          }}
        >
          {/* Thumbnail */}
          <div className=" w-full  h-70vh ">
            <div>
              <img
                src={product.images[image]}
                alt={product.title}
                className=" w-[75%] mx-auto  object-center object-cover "
              />
            </div>

            {/* All Images */}
            <div className=" w-full flex justify-center overflow-x-scroll ">
              <div className="flex gap-2 ">
                {product.images?.map((img, index) => (
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
                      alt={`${product.title} ${index + 1}`}
                      className="w-full h-full   object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* details  */}
          <div className="w-full p-4 text-gray-800">
            <h2 className="text-xl font-bold">{product.title}</h2>
            <p>
              {" "}
              <strong>Description:</strong> {product.description}
            </p>

            {/* button */}
            {/* Buttons → only show on lg screens */}
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
      )}
    </div>
  );
}

export default ProductDetailsComponents;

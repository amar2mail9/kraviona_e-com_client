"use client";
import React, { useEffect, useState } from "react";
import { CardDesign, CardLoader } from "../Loader/CardComponents";
import { Divider } from "@mui/material";

function LatestPost() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products?limit=0", {
        cache: "no-store", // always fresh data
      });
      const data = await res.json();
      setProduct(data.products);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="w-full mx-auto py-8  sm:px-6 ">
      {/* Title */}
      <h2 className="text-2xl font-bold mb-4">🛍️ Latest Products</h2>
      <Divider className="!mb-6" />

      {/* Loader OR Products */}
      {loading ? (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-6 gap-2">
          {Array.from({ length: 16 }).map((_, i) => (
            <CardLoader key={i} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-6 gap-2">
          {product.map((p, idx) => (
            <CardDesign key={idx} {...p} />
          ))}
        </div>
      )}
    </div>
  );
}

export default LatestPost;

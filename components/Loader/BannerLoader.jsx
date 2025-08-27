"use client";

import React from "react";

const BannerLoader = () => {
  return (
    <section className="w-full mx-auto">
      <div className="relative w-full aspect-video md:aspect-[21/9] overflow-hidden rounded-2xl bg-gray-200">
        {/* Shimmer Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-[shimmer_2s_infinite]" />
      </div>
    </section>
  );
};

export default BannerLoader;

import Banner from "@/components/Home/Banner";
import LatestPost from "@/components/Home/LatestPost";
import T from "@/components/Loader/T.jsx";
import SwipeProductImages from "@/components/ProductDetails/SwipeProductImages";

import React from "react";

function Home() {
  return (
    <div className=" ">
      <Banner />

      <LatestPost />
      {/* <T /> */}
      <SwipeProductImages />
    </div>
  );
}

export default Home;

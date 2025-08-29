import Banner from "@/components/Home/Banner";
import LatestPost from "@/components/Home/LatestPost";
import { colorcode } from "@/context/data";
import React from "react";

function Home() {
  return (
    <div
      style={{
        backgroundColor: `${colorcode.websiteBg}`,
      }}
      className=" "
    >
      <Banner />

      <LatestPost />
    </div>
  );
}

export default Home;

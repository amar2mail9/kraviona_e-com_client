import Banner from "@/components/Home/Banner";
import LatestPost from "@/components/Home/LatestPost";
import CardLoader, { CardDesign } from "@/components/Loader/CardComponents";
import { colorcode } from "@/context/data";
import React from "react";

function Home() {
  return (
    <div
      style={{
        backgroundColor: `${colorcode.websiteBg}`,
      }}
      className=" flex items-center flex-col justify-between w-full px-2 lg:px-[10%] py-[20px]"
    >
      <Banner />

      <LatestPost />
    </div>
  );
}

export default Home;

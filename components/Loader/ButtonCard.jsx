import { ShoppingCart } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";

function ButtonCard({ id }) {
  return (
    <div className="w-full">
      <div className="hidden lg:flex mt-4 gap-3">
        {/* Add to Cart Button */}
        <Button
          onClick={() => {
            console.log("Added to cart:", id);
          }}
          variant="contained"
          className="!flex-1 !capitalize !py-2  !text-base !font-medium !gap-2"
          style={{
            background: "#10B981",
            transition: "all 0.3s ease",
          }}
        >
          <ShoppingCart fontSize="small" />
        </Button>

        {/* Buy Now Button */}
        <Button
          variant="outlined"
          className="!flex-1 !capitalize !py-2  !text-base !font-medium"
          style={{
            border: "2px solid #F97316",
            background: "#F9731610",
            color: "#F97316",
            transition: "all 0.3s ease",
          }}
        >
          Buy Now
        </Button>
      </div>
    </div>
  );
}

export default ButtonCard;

import { ShoppingCart } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";

function ButtonCard({ id }) {
  return (
    <div>
      <div className="hidden lg:flex mt-3 gap-2">
        {/* Primary Filled Button */}
        <Button
          onClick={() => {
            console.log(id);
          }}
          variant="contained"
          className="!flex-1  "
          style={{
            background: "#10B981",
          }}
        >
          <ShoppingCart />
        </Button>

        {/* Secondary Outline Button */}
        <Button
          style={{
            border: "1px solid #F97316",
            background: "#F9731610",
            color: "#f97316",
          }}
          className="!flex-1"
          variant="outlined"
        >
          Buy Now
        </Button>
      </div>
    </div>
  );
}

export default ButtonCard;

import { Delete } from "@mui/icons-material";
import { Button, Divider } from "@mui/material";
import Link from "next/link";
import React from "react";

const ShoppingCartUI = () => {
  const shoppingCart = [
    {
      id: 168,
      title: "Charger SXT RWD",
      price: 32999.99,
      quantity: 3,
      total: 98999.97,
      discountPercentage: 13.39,
      discountedTotal: 85743.87,
      thumbnail:
        "https://cdn.dummyjson.com/products/images/vehicle/Charger%20SXT%20RWD/thumbnail.png",
    },
    {
      id: 78,
      title: "Apple MacBook Pro 14 Inch Space Grey",
      price: 1999.99,
      quantity: 2,
      total: 3999.98,
      discountPercentage: 18.52,
      discountedTotal: 3259.18,
      thumbnail:
        "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/thumbnail.png",
    },
    {
      id: 183,
      title: "Green Oval Earring",
      price: 24.99,
      quantity: 5,
      total: 124.95,
      discountPercentage: 6.28,
      discountedTotal: 117.1,
      thumbnail:
        "https://cdn.dummyjson.com/products/images/womens-jewellery/Green%20Oval%20Earring/thumbnail.png",
    },
    {
      id: 100,
      title: "Apple Airpods",
      price: 129.99,
      quantity: 5,
      total: 649.95,
      discountPercentage: 12.84,
      discountedTotal: 566.5,
      thumbnail:
        "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/thumbnail.png",
    },
  ];

  // calculate totals
  const subtotal = shoppingCart.reduce((sum, item) => sum + item.total, 0);
  const discount = shoppingCart.reduce(
    (sum, item) => sum + (item.total - item.discountedTotal),
    0
  );
  const finalTotal = subtotal - discount;

  return (
    <div className="w-full p-4">
      <div className="mb-2">
        <h3 className="text-gray-600 lg:text-2xl md:text-xl text-sm font-semibold">
          Shopping Items ({shoppingCart?.length})
        </h3>
      </div>
      <Divider />

      <div className="flex flex-col md:flex-row gap-6 mt-6">
        {/* product list */}
        <div
          className="w-full md:w-[70%] flex flex-col gap-4 p-4 rounded-lg"
          style={{
            background: "var(--surface)",
            boxShadow: "0 0 20px 1px #19191920",
          }}
        >
          {shoppingCart.map(
            ({
              id,
              title,
              price,
              quantity,
              discountPercentage,
              discountedTotal,
              thumbnail,
              total,
            }) => (
              <div
                key={id}
                className="flex flex-col sm:flex-row sm:items-center gap-4 p-3 rounded-lg border border-gray-100 hover:shadow-md transition"
              >
                {/* Image */}
                <div className="w-full sm:w-[100px] aspect-square bg-gray-50 rounded-lg flex items-center justify-center">
                  <Link href={`/${id}`}>
                    <img
                      src={thumbnail}
                      alt={title}
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </Link>
                </div>

                {/* Details */}
                <div className="flex-1">
                  <h1 className="text-gray-800 font-medium">{title}</h1>
                  <p className="text-sm text-gray-400">
                    Discount: {discountPercentage}%
                  </p>

                  {/* Price */}
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-lg font-semibold text-green-600">
                      ${discountedTotal.toFixed(2)}
                    </span>
                    <span className="text-sm text-gray-400 line-through">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Quantity + Delete */}
                <div className="flex items-center gap-2 mt-2 sm:mt-0">
                  <Button variant="outlined" size="small">
                    -
                  </Button>
                  <span className="px-2">{quantity}</span>
                  <Button variant="outlined" size="small">
                    +
                  </Button>
                  <Button
                    style={{
                      background: "var(--danger)",
                      color: "#fff",
                      minWidth: "40px",
                      padding: "6px",
                    }}
                  >
                    <Delete fontSize="small" />
                  </Button>
                </div>
              </div>
            )
          )}
        </div>

        {/* order summary */}
        <div
          className="w-full md:w-[30%] h-fit rounded-xl p-4"
          style={{
            background: "var(--primary)",
            color: "#f2f2f2",
          }}
        >
          <h3 className="text-lg font-semibold mb-4 text-center">
            Order Summary
          </h3>
          <div className="flex justify-between mb-2">
            <span>Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Discount:</span>
            <span>- ${discount.toFixed(2)}</span>
          </div>
          <Divider sx={{ borderColor: "#ddd", my: 1 }} />
          <div className="flex justify-between text-lg font-semibold">
            <span>Total:</span>
            <span>${finalTotal.toFixed(2)}</span>
          </div>
          <Button
            fullWidth
            variant="contained"
            style={{ marginTop: "16px", background: "#fff", color: "#000" }}
          >
            Proceed to Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartUI;

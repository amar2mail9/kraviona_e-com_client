import { Button } from "@mui/material";
import React from "react";

function LoginOrSignUp() {
  return (
    <div className="max-w-4xl mx-auto md:flex h-auto md:h-96  shadow-lg overflow-hidden bg-white">
      {/* Left Section (hidden on small screens) */}
      <div
        className="md:w-1/2 hidden md:flex flex-col items-center justify-center text-white p-6 text-center relative"
        style={{
          background:
            "linear-gradient(-15deg, var(--accent), var(--secondary))",
        }}
      >
        <h2 className="text-3xl font-bold mb-2">Welcome Back!</h2>
        <p className="text-sm opacity-90 max-w-xs">
          Connect with Kraviona and unlock premium experiences.
        </p>

        {/* Decorative Shape */}
        <div className="absolute bottom-4 right-4 w-16 h-16 bg-white/10 rounded-full blur-xl"></div>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 w-full p-6 flex flex-col gap-5 justify-center">
        {/* Mobile-only heading */}
        <h2 className="text-2xl font-semibold text-gray-800 md:hidden text-center">
          Welcome to Kraviona
        </h2>

        <input
          type="email"
          className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
          placeholder="example@gmail.com"
        />

        <Button
          variant="contained"
          fullWidth
          className="!capitalize !py-3 !rounded-lg !text-base"
          style={{
            background: "var(--secondary)",
          }}
        >
          Send OTP
        </Button>
      </div>
    </div>
  );
}

export default LoginOrSignUp;

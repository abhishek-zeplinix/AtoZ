import React from "react";

const Banner = () => {
  return (
    <div className="mx-6 rounded-lg">
      <div
        className="relative bg-cover bg-center h-[400px] flex items-center justify-center rounded-lg"
        style={{
          backgroundImage: "url('/Homepage/banner.png')",
        }}
      >
        <div className="relative text-center text-white px-4">
          <h1 className="text-4xl font-bold">Welcome to Our Website</h1>
          <p className="mt-4 text-lg">
            Your one-stop solution for all your needs
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;

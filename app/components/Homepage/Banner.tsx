import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="mx-6 rounded-lg">
      <div
        className="relative bg-cover bg-center h-[600px] flex items-center justify-center rounded-lg"
        style={{
          backgroundImage: "url('/Homepage/banner.png')",
        }}
      >
        <div className="relative text-center text-white px-4 grid grid-cols-2 gap-4 w-full">
          {/* Column 1 */}

          {/* Column 2 */}
          <div className="flex flex-col items-center justify-center">
            <Image src="/Homepage/circle.png" alt="" width={300} height={300} />
          </div>
          <div className="flex flex-col items-start justify-center mr-12">
            <h1 className="text-[78px] font-thin mb-4 text-right leading-tight">
              Building the <span className="italic">“Brands”</span> You’ve
              Always Imagined...
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

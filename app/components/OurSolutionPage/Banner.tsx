import Image from "next/image";
import React from "react";

const SolutionPageBanner = () => {
  return (
    <div className="relative">
      <div className="mx-44 flex flex-col">
        <div className="mt-10 relative">
          {/* Dynamic Title */}
          <h1 className="text-2xl relative z-10 bg-transparent">
            Our Solutions
          </h1>

          {/* Dynamic Icon Image */}
          <div className="absolute z-0 top-[-50px] left-[-70px]">
            <Image
              src="/CommonbannerImage/OurSolutionicon.png"
              alt="Icon Image"
              width="150" // Adjust width
              height="150" // Fixed height for logos
              objectFit="contain" // Ensures logos retain aspect ratio
            />
          </div>
        </div>

        <div className="mt-10">
          {/* Dynamic SubText */}
          <div>
            <span className="text-[80px] leading-tight font-light text-[#131518]">
              Solutions That <br /> Transform Ideas Into
            </span>
            <br />
            <span className="bg-azText text-white text-[50px] p-2 italic relative">
              Impact
              <div className="absolute top-[50px] left-[-24px]">
                <Image
                  src="/CommonbannerImage/Downarrow.svg"
                  alt="Icon Image"
                  width="50" // Adjust width
                  height="50" // Fixed height for logos
                  objectFit="contain" // Ensures logos retain aspect ratio
                />
              </div>
            </span>
          </div>

          {/* Dynamic Banner Image */}
          <div className="absolute z-[-1] top-[-50px] right-0">
            <Image
              src="/CommonbannerImage/OurSolutionBanner.png"
              alt="Banner Image"
              width="300" // Adjust width
              height="300" // Fixed height for logos
              objectFit="contain" // Ensures logos retain aspect ratio
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionPageBanner;

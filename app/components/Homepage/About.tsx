import Image from "next/image";
import React from "react";
import { MdArrowOutward } from "react-icons/md";

const About = () => {
  const images = [
    "/Homepage/clients/client (1).png",
    "/Homepage/clients/client (2).png",
    "/Homepage/clients/client (2).png",
    "/Homepage/clients/client (3).png",
    "/Homepage/clients/client (2).png",
    "/Homepage/clients/client (4).png",
    "/Homepage/clients/client (2).png",
    "/Homepage/clients/client (5).png",
    "/Homepage/clients/client (2).png",
    "/Homepage/clients/client (6).png",
  ];

  const Marquee = () => {
    return (
      <div className="relative w-full overflow-hidden cursor-pointer pt-5 mb-6 mt-6">
        {/* Marquee container */}
        <div className="marquee-container">
          <div className="marquee bordereffect">
            {/* Marquee Scroll Section */}
            {images.map((imageSrc, index) => (
              <div
                key={index}
                className="marquee-scroll- flex items-center justify-center"
              >
                {/* Display each image dynamically */}
                <Image
                  src={imageSrc}
                  alt={`Marquee Image ${index + 1}`}
                  width={100}
                  height={100}
                  className="object-contain mx-4" // Ensures the image fits and adds margin between images
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="mt-10 ">
      <div className="space-y-4">
        <div>
          <h1 className="italic text-[70px] font-thin text-center text-azText">
            Who we are?
          </h1>
        </div>
        <div>
          <p className="text-center text-azTextLightGray">
            We are brand builders with passion, creators with purpose, tech
            enthusiasts by nature, and innovators at our
          </p>
          <p className="text-center text-azTextLightGray">
            core. Our mission is simple yet bold: to bring the finest Indian
            creative talent to the world.
          </p>
        </div>
        <div className="text-center">
          <button
            className="text-center items-center px-6 py-3 space-x-3 text-lg font-bold text-white border rounded-full border-white  transition duration-300 ;"
            style={{ background: "#131518" }}
          >
            <div className="flex items-center gap-3">
              <span className="text-[15px] text-white font-light">
                Know More About Us
              </span>
              <div className="flex items-center justify-center w-4 h-4 border border-white rounded-full">
                <MdArrowOutward className="h-8" />
              </div>
            </div>
          </button>
        </div>
      </div>

      <div className="mt-20">
        <div>
          <Marquee />
        </div>
        <div className="mt-5">
          <Marquee />
        </div>
      </div>
    </div>
  );
};

export default About;

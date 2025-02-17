import React from "react";
import { MdArrowOutward } from "react-icons/md";
import ClientSlider from "./ClientSlider";

const About = () => {
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
          <ClientSlider directions="right" />
        </div>
        <div className="mt-5">
          <ClientSlider directions="left" />
        </div>
      </div>
    </div>
  );
};

export default About;

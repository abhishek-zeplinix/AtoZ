import React from "react";
import { MdArrowOutward } from "react-icons/md";
const TellUs = ({
  content = "Got a Creative <br /> Challenge for us?",
  button = "Tell Us",
}) => {
  return (
    <div className=" mt-6 mb-6">
      <div className="relative bg-cover bg-center h-[520px] flex items-center justify-center  overflow-hidden ">
        {/* Background Video */}

        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/Homepage/Video/particles.mp4"
          autoPlay
          loop
          muted
        ></video>
        <div
          className="absolute inset-0"
          style={{ background: "#00000057" }}
        ></div>
        {/* Content Overlay */}
        <div className="relative z-10 text-center text-white px-4">
          <h1
            className="lg:text-[96px] md:text-[96px] text-[56px] font-light leading-none"
            dangerouslySetInnerHTML={{ __html: content }}
          ></h1>

          <div className="flex justify-center mt-10">
            <button
              className=" items-center flex justify-center  px-6 py-3 space-x-3 text-lg font-bold text-white border rounded-full border-white  transition duration-300 ;"
              style={{ background: "#13151885" }}
            >
              <span
                className="text-[30px]"
                dangerouslySetInnerHTML={{ __html: button }}
              ></span>
              <div className="flex items-center justify-center w-10 h-8 border border-white rounded-full">
                <MdArrowOutward className="h-8" />
              </div>
            </button>
          </div>
        </div>
        {/* <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl font-bold">Welcome to Our Website</h1>
          <p className="mt-4 text-lg">
            Your one-stop solution for all your needs
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default TellUs;

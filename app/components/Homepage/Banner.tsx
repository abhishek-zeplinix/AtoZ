"use client";
import { gsap } from "gsap";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { MdArrowOutward } from "react-icons/md";

const Banner = () => {
  const sectionRef = useRef(null);
  const textRef1 = useRef<HTMLHeadingElement>(null);
  const textRef2 = useRef<HTMLHeadingElement>(null);
  const textRef3 = useRef<HTMLHeadingElement>(null);
  const textRef4 = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Sequential animation for text elements
    const timeline = gsap.timeline();

    timeline
      .fromTo(
        textRef1.current,
        { opacity: 0, y: 20 }, // Initial state
        { opacity: 1, y: 0, duration: 1 } // Final state
      )
      .fromTo(
        textRef2.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.3 },
        "+=0.3" // Delay of 0.3s between animations
      )
      .fromTo(
        textRef3.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4 },
        "+=0.3"
      )
      .fromTo(
        textRef4.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5 },
        "+=0.3"
      );
  }, []);

  return (
    <div className="mx-6 rounded-lg" ref={sectionRef}>
      <div
        className="relative bg-cover bg-center h-[600px] flex items-center justify-center rounded-lg"
        style={{
          backgroundImage: "url('/Homepage/banner.png')",
        }}
      >
        <div className="absolute top-12 left-16 text-white text-[32px] overflow-hidden">
          <h1 className="flex items-center text-animation " ref={textRef1}>
            <p className="animate-wave">👋🏻</p> Hi,{" "}
          </h1>
          <h1 className="text-animation" ref={textRef2}>
            We are Design & Branding
          </h1>
          <h1 className="text-animation" ref={textRef3}>
            {" "}
            agency.
          </h1>
        </div>
        <div className="absolute bottom-5">
          <div className="relative text-center text-white px-4 grid grid-cols-2 gap-4 w-full">
            {/* Column 1 */}

            {/* Column 2 */}
            <div className="flex flex-col items-center justify-center relative">
              <div className="absolute left-[20px] bottom-0">
                <Image
                  src="/Homepage/circle.png"
                  alt=""
                  width={300}
                  height={300}
                  className="animate-spin-slow"
                />
              </div>
              <div className="absolute left-[30%]  top-[60%] transform -translate-x-1/2 -translate-y-1/2">
                <div className="flex justify-center items-center">
                  <button className="bg-white text-black rounded-full px-4 py-3 flex gap-3 items-center">
                    <span>See Us in Action</span>
                    <span>
                      <MdArrowOutward className="p-1 h-6 w-6 text-black border border-1 border-black rounded-full" />
                    </span>
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start justify-center mr-12 overflow-hidden">
              <h1
                className="text-[78px] font-thin mb-4 text-right leading-tight"
                ref={textRef4}
              >
                Building the <span className="italic">“Brands”</span> You’ve
                Always Imagined...
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

"use client";
import React, { useEffect, useRef } from "react";
import { MdArrowOutward } from "react-icons/md";
import ClientSlider from "./ClientSlider";
import SplitType from "split-type";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const About = () => {
  gsap.registerPlugin(ScrollTrigger);

  const sectionRef = useRef(null);

  useEffect(() => {
    const q = gsap.utils.selector(sectionRef);

    new SplitType(q(".title"), {
      types: "chars",
      tagName: "span",
    });

    gsap.from(q(".title .char"), {
      start: "top 70%",
      end: "top 40%",
      opacity: 0.3,
      duration: 0.5,
      ease: "power1.out",
      stagger: 0.1,

      scrollTrigger: {
        trigger: q(".title"),
        start: "top center",
        scrub: true,
      },
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        scrub: true,
        onEnter: () => {
          const tl = gsap.timeline({
            defaults: {
              stagger: 0.4,
              duration: 1,
            },
          });

          tl.fromTo(
            q(".text-animation"),
            {
              y: 100,
            },
            {
              y: 0,
            }
          );
        },
      },
    });
  }, []);

  // Set Active Session
  return (
    <div className="mt-10 " ref={sectionRef}>
      <div className="space-y-4">
        <div>
          <h1 className="italic  title lg:text-[70px] md:text-[70px] text-[52px] font-thin text-center text-azText">
            Who we are?
          </h1>
        </div>
        <div className="overflow-hidden">
          <p className="text-center text-azTextLightGray text-animation">
            We are brand builders with passion, creators with purpose, tech
            enthusiasts by nature, and innovators at our
          </p>
          <p className="text-center text-azTextLightGray text-animation">
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

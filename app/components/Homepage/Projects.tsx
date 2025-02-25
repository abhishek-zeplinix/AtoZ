"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import { CardData } from "@/app/types";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
export const cardData: CardData[] = [
  {
    id: 1,
    title: "Upskill - The first super app in the United Arab Emirates",
    category: "UI/UX",
    imageUrl: "/Homepage/projects/first.png",
  },
  {
    id: 2,
    title: "Upskill - The first super app in the United Arab Emirates",
    category: "Creative",
    imageUrl: "/Homepage/projects/second.png",
  },
  {
    id: 3,
    title: "Upskill - The first super app in the United Arab Emirates",
    category: "Classics",
    imageUrl: "/Homepage/projects/third.png",
  },
  {
    id: 4,
    title: "Upskill - The first super app in the United Arab Emirates",
    category: "Videography",
    imageUrl: "/Homepage/projects/four.png",
  },
  {
    id: 5,
    title: "Upskill - The first super app in the United Arab Emirates",
    category: "Media",
    imageUrl: "/Homepage/projects/fifth.png",
  },
  {
    id: 6,
    title: "Upskill - The first super app in the United Arab Emirates",
    category: "Research",
    imageUrl: "/Homepage/projects/six.png",
  },
];

const Projects = () => {
  gsap.registerPlugin(ScrollTrigger);

  const sectionRef = useRef(null);

  useEffect(() => {
    const q = gsap.utils.selector(sectionRef);

    new SplitType(q(".title"), {
      types: "chars",
      tagName: "span",
    });

    gsap.from(q(".title .char"), {
      opacity: 0.3,
      duration: 0.3,
      ease: "power1.out",
      stagger: 0.7,

      scrollTrigger: {
        trigger: q(".title"),
        start: "top center",
        scrub: true,
      },
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        scrub: true,
        onEnter: () => {
          const tl = gsap.timeline({
            defaults: {
              stagger: 0.8,
              duration: 0.3,
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
  return (
    <div
      className="relative bg-[#131518] lg:mt-28 md:mt-28 mt-10 rounded-t-[70px] overflow-hidden pb-20"
      ref={sectionRef}
    >
      <div className="absolute top-0 left-0 w-full z-0">
        {Array.from({ length: 100 }).map((_, index) => (
          <div
            key={index}
            className={`w-full h-full ${index > 0 ? `-mt-[130px]` : ""}`}
          >
            <svg
              width="1280"
              height="158"
              viewBox="0 0 1280 158"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full"
            >
              <path
                d="M-47.4414 50.1469C-26.8787 87.2372 62.6834 160.389 256.43 156.275C498.613 151.132 650.168 38.9263 878.642 10.8748C1047.27 -9.82925 1469.63 -6.89112 1647.08 119.34"
                stroke="white"
                strokeOpacity="0.14"
                strokeWidth="2"
              />
            </svg>
          </div>
        ))}
      </div>
      <div className="lg:ml-24 md:ml-24 ml-10 leading-tight pt-12 text-white ">
        <div className="title">
          <h1 className="lg:text-[76px] md:text-[76px] text-[56px] ">
            Our <span className="italic">Featured</span>
          </h1>
          <br />
          <h1 className="lg:text-[76px] md:text-[76px] text-[56px]">Project</h1>
        </div>
      </div>
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-x-40 lg:px-28 md:px-28 px-2 lg:pt-20 md:pt-20 pt-5">
        {/* Left Column */}
        <div className="lg:space-y-40 md:space-y-40 space-y-5">
          {cardData
            .filter((_, index) => index % 2 === 0)
            .map((card, index) => (
              <div
                key={card.id}
                className={`relative  p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow ${
                  index === 0 ? "" : "mt-20"
                }`}
              >
                {/* Tag */}
                <div className="absolute top-4 right-4 bg-black text-white text-sm px-3 py-1 rounded-md">
                  {card.category}
                </div>

                {/* Image */}
                <div className="w-full h-80 relative overflow-hidden rounded-lg">
                  <Image
                    src={card.imageUrl}
                    alt="title"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Title */}
                <h3 className="mt-4 text-lg font-semibold text-white">
                  {card.title}
                </h3>
              </div>
            ))}
        </div>

        {/* Right Column */}
        <div className="lg:space-y-40 md:space-y-40 space-y-5 lg:mt-20 md:mt-20 mt-0">
          {cardData
            .filter((_, index) => index % 2 !== 0)
            .map((card, index) => (
              <div
                key={card.id}
                className={`relative  p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow ${
                  index === 0
                    ? "lg:mt-20 md:mt-20 mt-0"
                    : "lg:mt-32 md:mt-32 mt-0"
                }`}
              >
                {/* Tag */}
                <div className="absolute top-4 right-4 bg-black text-white text-sm px-3 py-1 rounded-md">
                  {card.category}
                </div>

                {/* Image */}
                <div className="w-full h-64 relative overflow-hidden rounded-lg">
                  <Image
                    src={card.imageUrl}
                    alt="title"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Title */}
                <h3 className="mt-4 text-lg font-semibold text-white">
                  {card.title}
                </h3>
              </div>
            ))}
        </div>
      </div>
      <div>
        <div className="flex justify-left mt-10 lg:ml-24 md:ml-24 ml-5">
          <div className="flex items-center gap-3">
            <button
              className="text-center items-center px-6 py-3 space-x-3 text-lg font-bold text-white border rounded-full border-white  transition duration-300 bg-blur-lg;"
              style={{ background: "#131518" }}
            >
              <div className="">
                <span className="text-[15px] text-white font-light">
                  View All Project
                </span>
              </div>
            </button>
            <div className="flex items-center justify-center w-10 h-10 border border-white rounded-full">
              <MdArrowOutward className="h-10 w-10 text-white p-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

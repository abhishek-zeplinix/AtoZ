"use client";
import React from "react";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";

const cardData = [
  {
    id: 1,
    title: "Upskill - The first super app in the United Arab Emirates",
    category: "UI/UX",
    imageUrl: "/path-to-image1.jpg",
  },
  {
    id: 2,
    title: "Upskill - The first super app in the United Arab Emirates",
    category: "Creative",
    imageUrl: "/path-to-image2.jpg",
  },
  {
    id: 3,
    title: "Upskill - The first super app in the United Arab Emirates",
    category: "Classics",
    imageUrl: "/path-to-image3.jpg",
  },
  {
    id: 4,
    title: "Upskill - The first super app in the United Arab Emirates",
    category: "Videography",
    imageUrl: "/path-to-image4.jpg",
  },
  {
    id: 5,
    title: "Upskill - The first super app in the United Arab Emirates",
    category: "Media",
    imageUrl: "/path-to-image5.jpg",
  },
  {
    id: 6,
    title: "Upskill - The first super app in the United Arab Emirates",
    category: "Research",
    imageUrl: "/path-to-image6.jpg",
  },
];

const Projects = () => {
  return (
    <div className="relative bg-[#131518] mt-28 rounded-t-[70px] overflow-hidden pb-20">
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
      <div className="ml-24 leading-tight pt-12 text-white">
        <h1 className="text-[76px]">
          Our <span className="italic">Featured</span>
        </h1>
        <h1 className="text-[76px]">Project</h1>
      </div>
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-x-40 px-28 pt-20 ">
        {/* Left Column */}
        <div className="space-y-40">
          {cardData
            .filter((_, index) => index % 2 === 0)
            .map((card, index) => (
              <div
                key={card.id}
                className={`relative bg-[#F8F9FC] p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow ${
                  index === 0 ? "" : "mt-20"
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
                <h3 className="mt-4 text-lg font-semibold text-black">
                  {card.title}
                </h3>
              </div>
            ))}
        </div>

        {/* Right Column */}
        <div className="space-y-40 mt-20">
          {cardData
            .filter((_, index) => index % 2 !== 0)
            .map((card, index) => (
              <div
                key={card.id}
                className={`relative bg-[#F8F9FC] p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow ${
                  index === 0 ? "mt-20" : "mt-32"
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
                <h3 className="mt-4 text-lg font-semibold text-black">
                  {card.title}
                </h3>
              </div>
            ))}
        </div>
      </div>
      <div>
        <div className="flex justify-left mt-10 ml-24">
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

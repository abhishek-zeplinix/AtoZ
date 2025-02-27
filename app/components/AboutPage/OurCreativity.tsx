"use client";
import React from "react";
import BenefitsSection from "./BenefitsSection";

const cards = [
  {
    id: 1,
    number: "250+",
    text: "Branding projects delivered",
    image: "/AboutPage/image/frames/fifth.png",
  },
  {
    id: 2,
    number: "150+",
    text: "Happy clients worldwide",
    image: "/AboutPage/image/frames/second.png",
  },
  {
    id: 3,
    number: "50+",
    text: "Award-winning campaigns",
    image: "/AboutPage/image/frames/third.png",
  },
  {
    id: 4,
    number: "90%",
    text: "Client Satisfaction rate",
    image: "/AboutPage/image/frames/fourth.png",
  },
  {
    id: 5,
    number: "90%",
    text: "Client Satisfaction rate",
    image: "/AboutPage/image/frames/first.png",
  },
];

const TechStack = () => {
  return (
    <div className="w-full inline-flex gap-20 flex-nowrap lg:overflow-hidden">
      <div className="flex items-center gap-20 justify-center animate-infinite-scroll">
        {cards.map((card) => (
          <div
            key={card.id}
            className="relative w-72 h-40 bg-cover bg-center  overflow-hidden backdrop-blur-md"
            style={{ backgroundImage: `url(${card.image})` }}
          >
            <div className="relative z-10 flex flex-col items-start justify-center h-full p-4">
              <h1 className="text-white text-4xl font-bold">{card.number}</h1>
              <p className="text-white text-sm">{card.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div
        className="flex items-center gap-20 justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
        aria-hidden="true"
      >
        {cards.map((card) => (
          <div
            key={card.id}
            className="relative w-72 h-40 bg-cover bg-center rounded-lg overflow-hidden backdrop-blur-md"
            style={{ backgroundImage: `url(${card.image})` }}
          >
            <div className="relative z-10 flex flex-col items-start justify-center h-full p-4">
              <h1 className="text-white text-4xl font-bold">{card.number}</h1>
              <p className="text-white text-sm">{card.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
const OurCreativity = () => {
  return (
    <div className="relative bg-[#131518] mt-28 rounded-t-[70px] h-full pb-20 hidden lg:block md:block">
      <div className="ml-24 leading-tight pt-12 text-white">
        <h1 className="text-[76px]">
          Numbers That
          <span className="italic text-[76px] ml-5">Speak</span>
          <br />
          for Our
          <span className="italic text-[76px] ml-5">Creativity</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"></div>

      <div className="  w-full h-full  mt-9">
        <TechStack />
      </div>
      <div className="relative">
        <div className="relative -translate-y-[-20%]">
          <BenefitsSection />
        </div>
      </div>
    </div>
  );
};

export default OurCreativity;

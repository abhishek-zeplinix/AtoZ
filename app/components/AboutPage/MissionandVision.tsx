// components/MissionSection.js
import Image from "next/image";
import React from "react";

const MissionSection = () => {
  const data = [
    {
      title: "Our Mission",
      description:
        "Our mission is to empower businesses with innovative branding solutions that resonate deeply with their audiences. We strive to create meaningful and impactful designs, blending creativity with strategy to craft timeless identities. Through collaboration and a deep understanding of our clients' goals, we aim to build brands that inspire trust, foster loyalty, and drive growth in an ever-evolving marketplace.",
      image: "/AboutPage/image/first.png",
    },
    {
      title: "Our Vision",
      description:
        "We envision a future where businesses thrive through authentic connections, powered by our innovative solutions. Our goal is to set new benchmarks in design and strategy, enabling brands to lead in their industries.",
      image: "/AboutPage/image/second.png",
    },
  ];

  return (
    <>
      <div className="container  px-6 py-10 space-y-16">
        {data.map((item, index) => (
          <div
            key={index}
            className="mx-40 items-center gap-8 border-b border-[#475569] last:border-none pb-10 last:pb-0"
          >
            <div className="flex justify-between items-start">
              <h3 className="flex gap-4 items-start text-md font-normal uppercase  text-azText">
                <Image
                  src="/AboutPage/image/star.svg"
                  alt="Illustration"
                  height={25}
                  width={25}
                />
                {item.title}
              </h3>
              <p className="text-gray-700 w-[450px]">{item.description}</p>
            </div>
            <div className="flex justify-center mt-7">
              <Image
                src={item.image}
                alt="Illustration"
                className=""
                height={700}
                width={700}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MissionSection;

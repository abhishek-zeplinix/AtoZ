import Image from "next/image";
import React from "react";
import { MdArrowOutward } from "react-icons/md";

const PowerHouse = () => {
  const services = [
    {
      title: "Branding Solution",
      description:
        "Helps you to build a website company that is modern, user-friendly, good SEO, and clean design.",
      buttonText: "Start with us",
      icon: "/Homepage/powerhouse/icons/icon1.png", // Replace with actual path
      image: "/Homepage/powerhouse/first.png", // Replace with actual path
      gradient: "from-blue-900 via-blue-700 to-blue-500",
      absolute: "/Homepage/powerhouse/absolutes/first.png",
    },
    {
      title: "Media Solution",
      description:
        "Helps you to build a website company that is modern, user-friendly, good SEO, and clean design.",
      buttonText: "Start with us",
      icon: "/Homepage/powerhouse/icons/icon2.png", // Replace with actual path
      image: "/Homepage/powerhouse/second.png", // Replace with actual path
      gradient: "from-green-900 via-green-700 to-green-500",
      absolute: "/Homepage/powerhouse/absolutes/second.png",
    },
    {
      title: "UI/UX Design",
      description:
        "Helps you to build a website company that is modern, user-friendly, good SEO, and clean design.",
      buttonText: "Start with us",
      icon: "/Homepage/powerhouse/icons/icon3.png", // Replace with actual path
      image: "/Homepage/powerhouse/third.png", // Replace with actual path
      gradient: "from-purple-900 via-purple-700 to-purple-500",
      absolute: "/Homepage/powerhouse/absolutes/third.png",
    },
    {
      title: "Film & Videography",
      description:
        "Helps you to build a website company that is modern, user-friendly, good SEO, and clean design.",
      buttonText: "Start with us",
      icon: "/Homepage/powerhouse/icons/icon4.png", // Replace with actual path
      image: "/Homepage/powerhouse/fourth.png", // Replace with actual path
      gradient: "from-red-900 via-red-700 to-red-500",
      absolute: "/Homepage/powerhouse/absolutes/fourth.png",
    },
  ];
  return (
    <div className="space-y-8 mx-4 mt-20">
      <div>
        <h1 className="text-[76px] text-center">
          Your <span className="italic">One-Stop</span>
        </h1>
        <h1 className="text-[76px] text-center">
          <span className="italic">Creative</span> Powerhouse
        </h1>
      </div>
      {services.map((service, index) => (
        <div
          key={index}
          className={`flex items-center justify-between pt-10 pl-10 rounded-lg shadow-lg bg-gradient-to-r bg-[#151515] bg-blur-lg relative`}
        >
          {/* Left Section */}
          <div className="text-white space-y-4 max-w-md pb-10">
            <div className="">
              <Image
                src={service.icon}
                alt={`${service.title} Icon`}
                width={80}
                height={80}
                className="w-10 h-10"
              />
            </div>
            <p className="text-2xl font-semibold m-0">{service.title}</p>
            <p>{service.description}</p>
            <button className="text-white underline flex items-center gap-2">
              {service.buttonText}
              <MdArrowOutward className="h-8" />
            </button>
          </div>

          {/* Right Section */}
          <div>
            <Image
              src={service.image}
              alt={`${service.title} Image`}
              width={350}
              height={230}
              className="rounded-md"
            />
          </div>

          <div className="absolute left-[-60px] bottom-0 overflow-hidden w-full h-[350px]">
            <Image
              src={service.absolute}
              alt={`${service.title} Image`}
              width={800}
              height={300}
              className="object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PowerHouse;

import Image from "next/image";
import React from "react";
import { RiInstagramFill } from "react-icons/ri";
import { RiFacebookFill } from "react-icons/ri";
import { RiLinkedinFill } from "react-icons/ri";
import { RiWhatsappFill } from "react-icons/ri";
const SocialLinks = () => {
  const socialLinks = [
    {
      id: 1,
      name: "Instagram",
      icon: RiInstagramFill,
    },
    {
      id: 2,
      name: "Facebook",
      icon: RiFacebookFill,
    },
    {
      id: 3,
      name: "LinkedIn",
      icon: RiLinkedinFill,
    },
    {
      id: 4,
      name: "WhatsApp",
      icon: RiWhatsappFill,
    },
  ];

  const Marquee = () => {
    return (
      <div className="relative w-full overflow-hidden cursor-pointer pt-5 mb-6 mt-6">
        {/* Marquee container */}
        <div className="marquee-container">
          <div className="marquee bordereffect">
            {/* Marquee Scroll Section */}
            {[1, 2, 3].map((_, index) => (
              <div
                key={index}
                className="marquee-scroll flex items-center justify-center"
              >
                {/* First Boho HR text */}
                <span className="bordereffect text-[96px] font-light  ml-25 lg:ml-20 md:ml-20">
                  Follow Us
                </span>

                {/* Single Image between Boho HR texts */}
                <Image
                  src="/Homepage/Svg/square.svg"
                  alt="Star Image"
                  width={100}
                  height={100}
                  className="object-contain mx-4" // Ensures the image fits and adds margin between text and image
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div>
        <Marquee />
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col w-full max-w-[100%] lg:mx-[10rem] md:mx-[10rem] mx-[1rem] px-5 space-y-4 mt-6 mb-6">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <div
                key={link.id}
                className="flex items-center justify-between border-[#475569] border-b pb-4 last:border-b-0 border-opacity-20"
              >
                <div className="flex items-center space-x-5">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-700 text-white">
                    {/* Dynamic Icon */}
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <span className="italic text-azText">{link.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SocialLinks;

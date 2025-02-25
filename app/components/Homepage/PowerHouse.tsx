"use client";
import gsap from "gsap";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { MdArrowOutward } from "react-icons/md";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const PowerHouse = () => {
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
    <div className="space-y-8 mx-4 mt-20" ref={sectionRef}>
      <div className="title text-center leading-tight">
        <h1 className="lg:text-[76px] md:text-[76px] text-[42px] text-center">
          Your <span className="italic">One-Stop</span>
        </h1>
        <h1 className="lg:text-[76px] md:text-[76px] text-[42px] text-center">
          <span className="italic">Creative</span> Powerhouse
        </h1>
      </div>
      {services.map((service, index) => (
        <div
          key={index}
          className={`flex lg:flex-row md:flex-row flex-col items-center justify-between pt-10 lg:pl-10 md:pl-10 pl-5 rounded-lg shadow-lg bg-gradient-to-r bg-[#151515] bg-blur-lg relative`}
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

          <div className="absolute lg:left-[-60px] md:left-[-60px] right-0  bottom-0 overflow-hidden lg:w-full md:w-full w-full h-[350px]">
            <Image
              src={service.absolute}
              alt={`${service.title} Image`}
              width={600}
              height={300}
              className="object-cover "
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PowerHouse;

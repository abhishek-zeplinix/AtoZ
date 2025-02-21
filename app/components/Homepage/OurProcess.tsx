"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
const OurProcess = () => {
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
      duration: 0.1,
      start: "top 80%",
      end: "top 60%",
      ease: "power1.out",
      stagger: 0.6,

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
              stagger: 0.2,
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
  const steps = [
    {
      title: "Discover",
      icon: "/Homepage/process/step-1.png",
      arrow: "/Homepage/process/arrow-down.png",
    },
    {
      title: "Ideation",
      icon: "/Homepage/process/step-2.png",
      arrow: "/Homepage/process/arrow-up.png",
    },
    {
      title: "Design",
      icon: "/Homepage/process/step-3.png",
      arrow: "/Homepage/process/arrow-down.png",
    },
    {
      title: "Delivery",
      icon: "/Homepage/process/step-4.png",
      arrow: null, // No arrow after the last step
    },
  ];

  const StepsComponent = () => {
    return (
      <div className="flex items-center justify-center w-full py-8">
        <div className="flex items-center gap-4">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center gap-4">
              {/* Step Icon + Title */}
              <div className="flex flex-col items-center">
                <Image
                  src={step.icon}
                  alt={step.title}
                  width={150}
                  height={150}
                />
                <p className="mt-2 text-center text-[30px]">{step.title}</p>
              </div>

              {/* Arrow */}
              {step.arrow && (
                <Image
                  src={step.arrow}
                  alt="Arrow"
                  width={140}
                  height={40}
                  className=""
                />
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };
  return (
    <div className="mt-20" ref={sectionRef}>
      <div className="text-center">
        <div>
          <label
            htmlFor=""
            className="bg-[#E2E8F0]  text-azText p-2 rounded-md"
          >
            Our Process
          </label>
        </div>
        <div>
          <h1 className="italic text-[70px] title">We Design. You Grow</h1>
        </div>

        <div>
          <StepsComponent />
        </div>
      </div>
    </div>
  );
};

export default OurProcess;

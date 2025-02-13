import Image from "next/image";
import React from "react";

const OurProcess = () => {
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
    <div className="mt-20">
      <div className="text-center">
        <div>
          <label htmlFor="" className="bg-[#E2E8F0] text-azText p-2 rounded-md">
            Our Process
          </label>
        </div>
        <div>
          <h1 className="italic text-[70px]">We Design. You Grow</h1>
        </div>

        <div>
          <StepsComponent />
        </div>
      </div>
    </div>
  );
};

export default OurProcess;

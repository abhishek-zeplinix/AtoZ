import React from "react";

const BenefitsSection = () => {
  const benefits = [
    {
      id: 1,
      title: "Tailored Solutions",
      description: (
        <>
          <p>
            We create custom branding <br /> strategies that align perfectly
            with <br /> your unique vision.,
          </p>
        </>
      ),
    },
    {
      id: 2,
      title: "Expertise",
      description: (
        <>
          <p>
            Our experienced team ensures <br /> creative designs that deliver{" "}
            <br />
            measurable results.
          </p>
        </>
      ),
    },
    {
      id: 3,
      title: "Innovative Design",
      description: (
        <>
          <p>
            We craft trend-driven, forward- <br />
            thinking designs that stand the test <br /> of time.
          </p>
        </>
      ),
    },
    {
      id: 4,
      title: "Timely Delivery",
      description: (
        <>
          <p>
            We guarantee high-quality work <br /> delivered on time,
            <br /> every time.
          </p>
        </>
      ),
    },
  ];

  return (
    <div className="bg-[#29292961] text-white p-8 border border-opacity-35 border-[#ffffff]  rounded-xl backdrop-blur-md shadow-md mx-20 ">
      <h2 className="text-[60px] font-normal leading-tight mb-6">
        Benefit of working <br /> with Us
      </h2>
      <div className="space-y-6 mt-20">
        {benefits.map((benefit) => (
          <div
            key={benefit.id}
            className="flex justify-between items-center border-b border-[#ffffff] border-opacity-35 last:border-none pb-10 last:pb-0"
          >
            {/* Circle Icon */}
            <div className="w-6 h-6 rounded-full bg-gray-600 flex-shrink-0"></div>

            {/* Title - Left-Aligned */}
            <div className="text-left flex-grow ml-40">
              <h3 className="text-xl italic">{benefit.title}</h3>
            </div>

            {/* Description - Right-Aligned */}
            <div className="text-right">
              <h3 className="text-sm ">{benefit.description}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitsSection;

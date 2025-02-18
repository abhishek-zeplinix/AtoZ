"use client";
import Image from "next/image";
import React, { useState } from "react";

const BrandingSolutions = () => {
  const [activeSection, setActiveSection] = useState<number | null>(null);
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const toggleItem = (idx: number) => {
    setActiveItem(activeItem === idx ? null : idx);
  };
  const sections = [
    {
      title: "Branding Solution",
      content: {
        description:
          "We craft unique brand identities that resonate with your audience and tell your story with authenticity. From logos to comprehensive brand guidelines, we ensure your brand stands out and stays memorable.",
        items: [
          {
            title: "Logo Design",
            subdesc:
              "Planning, designing, and managing social media campaigns.",
          },
          {
            title: "Brand Guidelines",
            subdesc:
              "Planning, designing, and managing social media campaigns.",
          },
          {
            title: "Naming & Taglines",
            subdesc:
              "Planning, designing, and managing social media campaigns.",
          },
          {
            title: "Corporate Identity Design",
            subdesc:
              "Planning, designing, and managing social media campaigns.",
          },
          {
            title: "Packaging Design",
            subdesc:
              "Planning, designing, and managing social media campaigns.",
          },
          {
            title: "Rebranding",
            subdesc:
              "Planning, designing, and managing social media campaigns.",
          },
          {
            title: "Brand Audit",
            subdesc:
              "Planning, designing, and managing social media campaigns.",
          },
        ],
      },
      bgColor: "#007AFF",
      image: "/OurSolutions/first.png",
    },
    {
      title: "Media Solution",

      content: {
        description:
          "Elevate your presence with tailored media strategies and campaigns that connect, engage, and inspire. We leverage digital platforms and creative content to amplify your brand’s message across all channels.",

        items: [
          {
            title: "Social Media Management",
            subdesc:
              "Planning, designing, and managing social media campaigns.",
          },
          {
            title: "Content Creation",
            subdesc:
              "Planning, designing, and managing social media campaigns.",
          },
          {
            title: "Ad Campaigns Design",
            subdesc:
              "Planning, designing, and managing social media campaigns.",
          },
          {
            title: "Print Media Design",
            subdesc:
              "Planning, designing, and managing social media campaigns.",
          },
          {
            title: "Email Marketing Design",
            subdesc:
              "Planning, designing, and managing social media campaigns.",
          },
          {
            title: "Event Branding",
            subdesc:
              "Planning, designing, and managing social media campaigns.",
          },
          {
            title: "Public Relations Materials",
            subdesc:
              "Planning, designing, and managing social media campaigns.",
          },
          {
            title: "Digital Marketing Graphics",
            subdesc:
              "Planning, designing, and managing social media campaigns.",
          },
        ],
      },
      bgColor: "#34C759",
      image: "/OurSolutions/second.png",
    },
    {
      title: "UI/UX Solution",
      content: {
        description:
          "Deliver seamless and intuitive digital experiences with our UI/UX solutions. We design user-centric interfaces that combine aesthetics with functionality to ensure user satisfaction and engagement.",

        items: [
          {
            title: "Website Design & Development",
            subdesc:
              "Planning, designing, and managing social media campaigns.",
          },
          {
            title: "Mobile App Design",
            subdesc:
              "Planning, designing, and managing social media campaigns.",
          },
          {
            title: "Wireframing & Prototyping",
            subdesc:
              "Planning, designing, and managing social media campaigns.",
          },
          {
            title: "UX Research & Analysis",
            subdesc:
              "Planning, designing, and managing social media campaigns.",
          },
          {
            title: "Dashboard Design",
            subdesc:
              "Planning, designing, and managing social media campaigns.",
          },
          {
            title: "Landing Page Design",
            subdesc:
              "Planning, designing, and managing social media campaigns.",
          },
          {
            title: "Interaction Design",
            subdesc:
              "Planning, designing, and managing social media campaigns.",
          },
          {
            title: "Accessibility Design",
            subdesc:
              "Planning, designing, and managing social media campaigns.",
          },
        ],
      },
      bgColor: "#5856D6",
      image: "/OurSolutions/third.png",
    },
    {
      title: "Film & Videography",
      content: {
        description:
          "Bring your brand to life with visually captivating films and videos. From concept to final cut, we create compelling content that speaks volumes and leaves a lasting impact.",
        items: [
          {
            title: "Corporate Videos",
            subdesc:
              "Planning, designing, and managing social media campaigns.",
          },
          {
            title: "Product Videos",
            subdesc:
              "Planning, designing, and managing social media campaigns.",
          },
          {
            title: "Event Coverage",
            subdesc:
              "Planning, designing, and managing social media campaigns.",
          },
          {
            title: "Explainer Videos",
            subdesc:
              "Planning, designing, and managing social media campaigns.",
          },
          {
            title: "Advertisement Films",
            subdesc:
              "Planning, designing, and managing social media campaigns.",
          },
          {
            title: "Social Media Videos",
            subdesc:
              "Planning, designing, and managing social media campaigns.",
          },
          {
            title: "Documentaries",
            subdesc:
              "Planning, designing, and managing social media campaigns.",
          },
          {
            title: "Drone Videography",
            subdesc:
              "Planning, designing, and managing social media campaigns.",
          },
        ],
      },
      bgColor: "#FF2D55",
      image: "/OurSolutions/fourth.png",
    },
  ];

  return (
    <div className="flex flex-col mt-32">
      {/* Sidebar */}
      <ul className="bg-white border-r w-full relative">
        {sections.map((section, index) => (
          <li
            key={index}
            style={{
              backgroundColor: activeSection === index ? section.bgColor : "",
            }}
            className={`p-4 cursor-pointer text-xl border-b border-[#475569] last:border-none last:pb-0 relative ${
              activeSection === index ? "text-white" : "hover:bg-gray-100"
            }`}
            onMouseEnter={() => setActiveSection(index)}
            onMouseLeave={() => setActiveSection(null)} // Reset the active section when mouse leaves
          >
            <h1 className="text-center text-[50px] p-10">{section.title}</h1>

            {/* Render the content below the hovered item with smooth transitions */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                activeSection === index
                  ? "max-h-full opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="grid grid-cols-2 mt-2 p-4 rounded-lg shadow-md">
                <div>
                  <p className="mt-4 text-lg px-10">
                    {section.content.description}
                  </p>
                  <Image
                    className="absolute left-0 bottom-0"
                    src={section.image}
                    alt=""
                    width={520}
                    height={300}
                  />
                </div>
                <ul className="mt-6 space-y-2">
                  {section.content.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="border-b border-[#ffffff] last:border-none"
                    >
                      {/* Clickable Title */}
                      <button
                        onClick={() => toggleItem(idx)}
                        className="w-full flex justify-between items-center p-3  text-left"
                      >
                        <span>{item.title}</span>
                        <span
                          className={`text-white transition-transform duration-300 ${
                            activeItem === idx ? "rotate-180" : ""
                          }`}
                        >
                          ▾
                        </span>
                      </button>

                      {/* Expandable Description */}
                      <div
                        className={`transition-all duration-300 ease-in-out overflow-hidden ${
                          activeItem === idx
                            ? "max-h-40 opacity-100 px-4 pb-4"
                            : "max-h-0 opacity-0"
                        } `}
                      >
                        <p className="text-sm text-white">{item.subdesc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BrandingSolutions;

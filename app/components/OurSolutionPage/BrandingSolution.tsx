"use client";
import React, { useState } from "react";

const BrandingSolutions = () => {
  const [activeSection, setActiveSection] = useState<number | null>(null);

  const sections = [
    {
      title: "Branding Solution",
      content: {
        description:
          "We craft unique brand identities that resonate with your audience and tell your story with authenticity. From logos to comprehensive brand guidelines, we ensure your brand stands out and stays memorable.",
        items: [
          "Logo Design",
          "Brand Guidelines",
          "Naming & Taglines",
          "Corporate Identity Design",
          "Packaging Design",
          "Rebranding",
          "Brand Audit",
        ],
      },
    },
    {
      title: "Media Solution",
      content: {
        description:
          "Innovative media strategies to connect with your audience across various platforms.",
        items: ["Social Media Management", "Video Production", "Ad Campaigns"],
      },
    },
    {
      title: "UI/UX Solution",
      content: {
        description:
          "Beautiful and user-friendly designs to provide seamless experiences.",
        items: ["Wireframes", "Mockups", "Prototyping", "User Testing"],
      },
    },
    {
      title: "Film & Videography",
      content: {
        description:
          "Creative storytelling through the art of film and videography.",
        items: ["Script Writing", "Filming", "Editing", "Production"],
      },
    },
  ];

  return (
    <div className="flex flex-col mt-32">
      {/* Sidebar */}
      <ul className="bg-white border-r w-full">
        {sections.map((section, index) => (
          <li
            key={index}
            className={`p-4 cursor-pointer text-xl border-b border-[#475569] last:border-none  last:pb-0 ${
              activeSection === index ? " text-black" : "hover:bg-gray-100"
            }`}
            onMouseEnter={() => setActiveSection(index)}
            onMouseLeave={() => setActiveSection(null)} // Reset the active section when mouse leaves
          >
            <h1 className="text-center text-[50px] p-10">{section.title}</h1>

            {/* Render the content below the hovered item with smooth transitions */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                activeSection === index
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className=" mt-2 p-4 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold">{section.title}</h2>
                <p className="mt-4 text-lg">{section.content.description}</p>
                <ul className="mt-6 space-y-2">
                  {section.content.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm hover:bg-blue-50"
                    >
                      <span>{item}</span>
                      <span className="text-gray-400">▾</span>
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

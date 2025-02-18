"use client";
import React, { useState } from "react";

const BrandingSolutions = () => {
  const [activeSection, setActiveSection] = useState<number | null>(null);
  const [activeItem, setActiveItem] = useState<number | null>(null);
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
      bgColor: "#007AFF",
    },
    {
      title: "Media Solution",
      content: {
        description:
          "Innovative media strategies to connect with your audience across various platforms.",
        items: ["Social Media Management", "Video Production", "Ad Campaigns"],
      },
      bgColor: "#34C759",
    },
    {
      title: "UI/UX Solution",
      content: {
        description:
          "Beautiful and user-friendly designs to provide seamless experiences.",
        items: ["Wireframes", "Mockups", "Prototyping", "User Testing"],
      },
      bgColor: "#5856D6",
    },
    {
      title: "Film & Videography",
      content: {
        description:
          "Creative storytelling through the art of film and videography.",
        items: ["Script Writing", "Filming", "Editing", "Production"],
      },
      bgColor: "#FF2D55",
    },
  ];

  return (
    <div className="flex flex-col mt-32">
      {/* Sidebar */}
      <ul className="bg-white border-r w-full">
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
                <p className="mt-4 text-lg">{section.content.description}</p>
                <ul className="mt-6 space-y-2">
                  {section.content.items.map((item, idx) => (
                    <li
                      key={idx}
                      onMouseEnter={() => setActiveItem(idx)} // Set active item on hover
                      onMouseLeave={() => setActiveItem(null)} // Reset active item on hover leave
                      className={`flex justify-between items-center p-3 border-b border-[#ffffff] last:border-none last:pb-0 relative ${
                        activeItem === idx ? "bg-gray-100 text-blue-500" : ""
                      }`}
                    >
                      <span>{item}</span>
                      <span className="text-white">▾</span>

                      {/* Render content for the hovered item */}
                      <div
                        className={`absolute left-0 w-full bg-white mt-2 p-4 shadow-lg z-10 transition-all duration-300 ease-in-out ${
                          activeItem === idx
                            ? "max-h-full opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <p className="text-sm">Details for {item}</p>{" "}
                        {/* Example content for the item */}
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

"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const categories = [
  "All",
  "Daily Creativity",
  "Case Study",
  "Branding",
  "UI/UX",
  "Videography",
];

const items = [
  {
    id: 1,
    title: "Upskill - UI/UX",
    category: "UI/UX",
    description: "The first super app in the United Arab Emirates",
    image: "/Homepage/projects/first.png",
  },
  {
    id: 2,
    title: "Upskill - Branding",
    category: "Branding",
    description: "The first super app in the United Arab Emirates",
    image: "/Homepage/projects/four.png",
  },
  {
    id: 3,
    title: "Modeon Lang - Case Study",
    category: "Case Study",
    description: "The first super app in the United Arab Emirates",
    image: "/Homepage/projects/second.png",
  },
  {
    id: 4,
    title: "Upskill - Videography",
    category: "Videography",
    description: "The first super app in the United Arab Emirates",
    image: "/Homepage/projects/fifth.png",
  },
  {
    id: 5,
    title: "Daily Creativity",
    category: "Daily Creativity",
    description: "Showcasing creative designs daily.",
    image: "/Homepage/projects/third.png",
  },
  {
    id: 6,
    title: "Daily Creativity",
    category: "Daily Creativity",
    description: "Showcasing creative designs daily.",
    image: "/Homepage/projects/six.png",
  },
  {
    id: 7,
    title: "Daily Creativity",
    category: "Daily Creativity",
    description: "Showcasing creative designs daily.",
    image: "/Homepage/projects/second.png",
  },
  {
    id: 8,
    title: "Daily Creativity",
    category: "Daily Creativity",
    description: "Showcasing creative designs daily.",
    image: "/Homepage/projects/first.png",
  },
];

const encryptId = (id: number) => {
  const encoded = btoa(id.toString().split("").reverse().join("")); // Reverse + Base64 Encode
  return encodeURIComponent(encoded); // URL safe
};

export default function Portfolios() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("All");

  const filteredItems =
    activeTab === "All"
      ? items
      : items.filter((item) => item.category === activeTab);

  const handleNavigate = (id: number) => {
    const encryptedId = encryptId(id);
    router.push(`/our-portfolio/${encryptedId}`); // Navigate to the dynamic route
  };
  return (
    <div className="p-6 lg:mx-12 md:mx-12 mx-5">
      {/* Tabs */}
      <div className="lg:flex md:flex flex-wrap gap-10 mb-8 lg:space-y-0 md:space-y-0 space-y-4 lg:space-x-0 md:space-x-0 space-x-2">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-10 py-2 text-sm rounded-full  ${
              activeTab === category
                ? "bg-black text-white"
                : "text-gray-500 border border-gray-300"
            }`}
            onClick={() => setActiveTab(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Zigzag Layout */}
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8">
        {/* Column 1 */}
        <div className="flex flex-col gap-8">
          {filteredItems
            .filter((_, index) => index % 2 === 0) // Cards for column 1
            .map((item) => (
              <div
                key={item.id}
                className=" rounded-lg overflow-hidden mt-10 relative cursor-pointer"
                onClick={() => handleNavigate(item.id)}
              >
                <div className="absolute bg-black text-white rounded-lg px-3 py-1 right-5 top-5">
                  {item.category}
                </div>
                <Image
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[550px] object-cover rounded-xl"
                  height={500}
                  width={400}
                />
                <div className="py-4">
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-gray-500">{item.description}</p>
                </div>
              </div>
            ))}
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-8 lg:mt-20 md:mt-20 mt-5">
          {filteredItems
            .filter((_, index) => index % 2 !== 0) // Cards for column 2
            .map((item) => (
              <div
                key={item.id}
                className="rounded-lg overflow-hidden lg:mt-20 md:mt-20 mt-5 relative cursor-pointer"
                onClick={() => handleNavigate(item.id)}
              >
                <div className="absolute bg-black text-white rounded-lg px-3 py-1 right-5 top-5">
                  {item.category}
                </div>
                <Image
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[550px] object-cover rounded-xl"
                  height={500}
                  width={400}
                />
                <div className="py-4">
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-gray-500">{item.description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

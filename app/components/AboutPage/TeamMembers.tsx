import Image from "next/image";
import React from "react";

const TeamMembers = () => {
  const team = [
    {
      name: "Ammenda J",
      role: "Art Director",
      image: "/AboutPage/image/team/first.png", // Replace with actual image URL
    },
    {
      name: "Ammenda J",
      role: "Art Director",
      image: "/AboutPage/image/team/first.png", // Replace with actual image URL
    },
    {
      name: "John D",
      role: "Graphic Designer",
      image: "/AboutPage/image/team/first.png", // Replace with actual image URL
    },
    {
      name: "Mark S",
      role: "Content Writer",
      image: "/AboutPage/image/team/first.png", // Replace with actual image URL
    },
  ];

  return (
    <div className="mx-auto p-6 max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 relative">
      {team.map((member, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-xl p-4 flex flex-col items-center text-center"
        >
          <Image
            src={member.image}
            alt={member.name}
            className="w-32 h-32 rounded-full mb-4"
            width={100}
            height={100}
          />
          <h3 className="text-lg font-semibold">{member.name}</h3>
          <p className="text-gray-500">{member.role}</p>
        </div>
      ))}

      {/* Dotted background */}
      <div className="absolute inset-0 -z-10">
        <div className="grid grid-rows-[repeat(20,1fr)] gap-y-4 h-full">
          {Array.from({ length: 20 }).map((_, rowIndex) => (
            <div
              key={rowIndex}
              className={`grid grid-cols-[repeat(12,minmax(0,1fr))] gap-x-4 ${
                rowIndex % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              {Array.from({ length: 12 }).map((_, colIndex) => (
                <div
                  key={`${rowIndex}-${colIndex}`}
                  className="w-1.5 h-1.5 rounded-full bg-gray-300"
                ></div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;

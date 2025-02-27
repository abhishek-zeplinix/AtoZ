import React from "react";
import TeamMembers from "./TeamMembers";

const CreativeMinds = () => {
  const rows = Array.from({ length: 20 });
  const columns = Array.from({ length: 12 });

  return (
    <div className="mx-1 hidden lg:block md:block">
      <div className="relative h-screen w-[100%] mt-16 ">
        <div className="z-40 pt-32">
          <h1 className="text-[80px] text-center leading-tight">
            The <span className="italic">Creative</span> Minds Behind <br />{" "}
            Your <span className="italic font-semibold">Success</span>
          </h1>
        </div>
        <TeamMembers />
        <div
          className="absolute inset-0 grid gap-y-16
        grid-rows-[repeat(20,minmax(0,1fr))]"
          style={{ zIndex: "-1" }}
        >
          {rows.map((_, rowIndex) => (
            <div
              key={rowIndex}
              className={`grid grid-cols-[repeat(12,minmax(0,1fr))] gap-x-24 ${
                rowIndex % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              {columns.map((_, colIndex) => (
                <div
                  key={`${rowIndex}-${colIndex}`}
                  className="w-2 h-2 rounded-full bg-gray-300"
                ></div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CreativeMinds;

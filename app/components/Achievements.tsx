import React from "react";
import { ProcessAchievementProps, ProcessData } from "../types";

const ProcessAchievement: React.FC<ProcessAchievementProps> = ({
  data,
  mainTitle = `Our <span class="italic">Achievement</span> <br />
    Through the <span class="italic">Process</span> `,
}) => {
  const defaultData: ProcessData[] = [
    {
      title: "Discovery",
      items: [
        "95% client alignment achieved within the first meeting.",
        "80% of projects begin with new insights uncovered during discovery.",
        "100+ hours spent annually on client interviews to understand unique needs.",
      ],
    },
    {
      title: "Strategy",
      items: [
        "90% of proposed strategies lead to measurable ROI improvements.",
        "75% of clients approve our first strategic direction proposal.",
        "We analyze 15+ industry trends for every project to stay ahead of the curve.",
      ],
    },
    {
      title: "Design",
      items: [
        "85% of designs finalized within two rounds of revisions.",
        "Over 300 unique design concepts delivered every year.",
        "98% of clients rate our designs as 'creative and impactful.'",
      ],
    },
    {
      title: "Delivery",
      items: [
        "Average project delivery time: 20% faster than industry standards.",
        "Zero missed deadlines in the last 12 months.",
        "Over 95% of clients see immediate engagement post-launch.",
      ],
    },
  ];

  const processData = data || defaultData;
  return (
    <div className="bg-custom-gradient text-white py-10 lg:mx-12 md:mx-12 mx-3 rounded-3xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2
            className="lg:text-[72px] md:text-[72px] text-[32px] leading-tight"
            dangerouslySetInnerHTML={{ __html: mainTitle }}
          ></h2>
        </div>

        {/* Process Sections */}
        <div className="space-y-10 px-10">
          {processData.map((section, index) => (
            <div
              key={index}
              className="flex lg:flex-row md:flex-row flex-col justify-between border-b border-[#475569] last:border-none pb-10 last:pb-0"
            >
              <h3 className="text-xl italic">{section.title}</h3>
              <ul className="lg:pl-6 md:pl-6 pl-0 space-y-2 lg:text-right md:text-right text-left lg:mt-0 md:mt-0 mt-4">
                {section.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex justify-end items-center space-x-2 "
                  >
                    <span className="h-2 w-2 bg-white rounded-full"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessAchievement;

import React from "react";
import ProcessAchievement from "../Achievements";

const OurService = () => {
  const serviceData = [
    {
      title: "Branding",
      items: [
        "95% client alignment achieved within the first meeting.",
        "80% of projects begin with new insights uncovered during discovery.",
        "100+ hours spent annually on client interviews to understand unique needs.",
      ],
    },
    {
      title: "Media",
      items: [
        "90% of proposed strategies lead to measurable ROI improvements.",
        "75% of clients approve our first strategic direction proposal.",
        "We analyze 15+ industry trends for every project to stay ahead of the curve.",
      ],
    },
    {
      title: "UI/UX",
      items: [
        "85% of designs finalized within two rounds of revisions.",
        "Over 300 unique design concepts delivered every year.",
        "98% of clients rate our designs as 'creative and impactful.'",
      ],
    },
    {
      title: "Film & Videography",
      items: [
        "Average project delivery time: 20% faster than industry standards.",
        "Zero missed deadlines in the last 12 months.",
        "Over 95% of clients see immediate engagement post-launch.",
      ],
    },
  ];

  const processData = serviceData;

  const title = `Why <span class="italic">Our Services</span> Are<br />
    a Cut <span class="italic">Above</span>`;

  return (
    <div>
      <ProcessAchievement data={processData} mainTitle={title} />
    </div>
  );
};

export default OurService;

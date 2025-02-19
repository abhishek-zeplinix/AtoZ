import React from "react";
import TellUs from "../components/Homepage/TellUs";
import SocialLinks from "../components/Homepage/SocialLinks";
import AboutUsBanner from "../components/AboutPage/Banner";
import MissionSection from "../components/AboutPage/MissionandVision";
import OurCreativity from "../components/AboutPage/OurCreativity";
import CreativeMinds from "../components/AboutPage/CreativeMinds";

const AboutPage = () => {
  return (
    <div>
      <AboutUsBanner />
      <MissionSection />
      <OurCreativity />
      <CreativeMinds />
      <div className="mt-24">
        <TellUs content="Got a Creative <br /> Challenge for us?" />
      </div>
      <SocialLinks />
    </div>
  );
};

export default AboutPage;

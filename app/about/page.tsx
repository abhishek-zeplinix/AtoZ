import React from "react";
import TellUs from "../components/Homepage/TellUs";
import SocialLinks from "../components/Homepage/SocialLinks";
import AboutUsBanner from "../components/AboutPage/Banner";

const AboutPage = () => {
  return (
    <div>
      <AboutUsBanner />
      <div className="mt-24">
        <TellUs content="Got a Creative <br /> Challenge for us?" />
      </div>
      <SocialLinks />
    </div>
  );
};

export default AboutPage;

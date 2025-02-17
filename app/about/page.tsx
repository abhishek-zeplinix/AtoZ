import React from "react";
import AboutUsBanner from "../components/AboutPage/Banner";
import TellUs from "../components/Homepage/TellUs";
import SocialLinks from "../components/Homepage/SocialLinks";

const AboutPage = () => {
  return (
    <div>
      <AboutUsBanner />
      <TellUs content="Got a Creative <br /> Challenge for us?" />
      <SocialLinks />
    </div>
  );
};

export default AboutPage;

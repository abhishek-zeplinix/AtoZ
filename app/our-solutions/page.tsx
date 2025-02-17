import React from "react";
import TellUs from "../components/Homepage/TellUs";
import SocialLinks from "../components/Homepage/SocialLinks";
import OurService from "../components/OurSolutionPage/OurService";

const OurSolutionPage = () => {
  return (
    <div>
      <OurService />
      <TellUs
        content="Ready to Create Something Extraordinary!"
        button="Contact Us"
      />
      <SocialLinks />
    </div>
  );
};

export default OurSolutionPage;

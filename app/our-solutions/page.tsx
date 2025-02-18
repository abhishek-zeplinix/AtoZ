import React from "react";
import TellUs from "../components/Homepage/TellUs";
import SocialLinks from "../components/Homepage/SocialLinks";
import OurService from "../components/OurSolutionPage/OurService";
import SolutionPageBanner from "../components/OurSolutionPage/Banner";
import BrandingSolutions from "../components/OurSolutionPage/BrandingSolution";

const OurSolutionPage = () => {
  return (
    <div>
      <SolutionPageBanner />
      <BrandingSolutions />
      <div className="mt-40">
        <OurService />
      </div>
      <TellUs
        content="Ready to Create Something Extraordinary!"
        button="Contact Us"
      />
      <SocialLinks />
    </div>
  );
};

export default OurSolutionPage;

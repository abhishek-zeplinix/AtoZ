import React from "react";
import TellUs from "../components/Homepage/TellUs";
import SocialLinks from "../components/Homepage/SocialLinks";

const OurPortfolioPage = () => {
  return (
    <div>
      <TellUs content="Have a Project in <br/> Mind?" button="Contact Us" />
      <SocialLinks />
    </div>
  );
};

export default OurPortfolioPage;

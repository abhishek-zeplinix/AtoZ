import React from "react";
import TellUs from "../components/Homepage/TellUs";
import SocialLinks from "../components/Homepage/SocialLinks";
import OurPortfolioBanner from "../components/OurPortfolioPage/Banner";

const OurPortfolioPage = () => {
  return (
    <div>
      <OurPortfolioBanner />
      <TellUs content="Have a Project in <br/> Mind?" button="Contact Us" />
      <SocialLinks />
    </div>
  );
};

export default OurPortfolioPage;

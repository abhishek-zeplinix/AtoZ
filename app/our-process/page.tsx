import React from "react";
import TellUs from "../components/Homepage/TellUs";
import SocialLinks from "../components/Homepage/SocialLinks";
import ProcessAchievement from "../components/Achievements";

const OurProcessPage = () => {
  return (
    <div>
      <ProcessAchievement />
      <TellUs content="Start your journey!" button="Contact Us" />
      <SocialLinks />
    </div>
  );
};

export default OurProcessPage;

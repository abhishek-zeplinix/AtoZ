import React from "react";
import TellUs from "../components/Homepage/TellUs";
import SocialLinks from "../components/Homepage/SocialLinks";
import ProcessAchievement from "../components/Achievements";
import OurProcessBanner from "../components/OurProcessPage/Banner";

const OurProcessPage = () => {
  return (
    <div>
      <OurProcessBanner />
      <div className="mt-16">
        <ProcessAchievement />
      </div>
      <TellUs content="Start your journey!" button="Contact Us" />
      <SocialLinks />
    </div>
  );
};

export default OurProcessPage;

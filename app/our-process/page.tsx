import React from "react";
import TellUs from "../components/Homepage/TellUs";
import SocialLinks from "../components/Homepage/SocialLinks";
import ProcessAchievement from "../components/Achievements";
import OurProcessBanner from "../components/OurProcessPage/Banner";
import StepsSection from "../components/OurProcessPage/Steps";

const OurProcessPage = () => {
  return (
    <div>
      <OurProcessBanner />
      <StepsSection />
      <div className="mt-16">
        <ProcessAchievement />
      </div>
      <TellUs content="Start your journey!" button="Contact Us" />
      <SocialLinks />
    </div>
  );
};

export default OurProcessPage;

// components/AboutUs.tsx
import AboutVideo from "./AboutVideo";
import SubPageBanner from "../SubPageBanner";

const AboutUsBanner = () => {
  return (
    <>
      <SubPageBanner
        title="About Us"
        subText={`Building Bridges <br /> Between <span class='italic'>Brands</span> and <br /> <span class='italic'>Audiences.</span>`}
        iconImage="/CommonbannerImage/abouticon.png"
        bannerImage="/CommonbannerImage/aboutBanner.png"
        titlePosition={{ top: "-20px", left: "-30px" }}
        bannerPosition={{ top: "-10px", right: "0px" }}
      />
      <AboutVideo />
    </>
  );
};

export default AboutUsBanner;

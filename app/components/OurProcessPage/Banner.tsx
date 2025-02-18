// components/AboutUs.tsx
import SubPageBanner from "../SubPageBanner";

const OurProcessBanner = () => {
  return (
    <>
      <SubPageBanner
        title="Our Process"
        subText={`<span class='italic'>"Four"</span> Steps to <br /> Unleashing Your <br/>Brand’s Potential. `}
        iconImage="/CommonbannerImage/ourProcessicon.png"
        bannerImage="/CommonbannerImage/ourProcessBanner.png"
        titlePosition={{ top: "-60px", left: "-60px" }}
        bannerPosition={{ top: "-90px", right: "0px" }}
        iconImageSize={{ width: 150, height: 150 }}
        bannerImageSize={{ width: 400, height: 400 }}
      />
    </>
  );
};

export default OurProcessBanner;

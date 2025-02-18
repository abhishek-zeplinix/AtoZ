// components/AboutUs.tsx
import SubPageBanner from "../SubPageBanner";

const OurPortfolioBanner = () => {
  return (
    <>
      <SubPageBanner
        title="Our Work"
        subText={`See Our<span class='italic'>Creativity</span> <br />  in <span class='italic'>Action</span>. `}
        iconImage="/CommonbannerImage/OurPortfolioicon.png"
        bannerImage="/CommonbannerImage/OurPortfolioBanner.png"
        titlePosition={{ top: "-60px", left: "-60px" }}
        bannerPosition={{ top: "-90px", right: "0px" }}
        iconImageSize={{ width: 150, height: 150 }}
        bannerImageSize={{ width: 400, height: 400 }}
      />
    </>
  );
};

export default OurPortfolioBanner;

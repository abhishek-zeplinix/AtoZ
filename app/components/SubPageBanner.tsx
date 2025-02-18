import Image from "next/image";
import React from "react";
import { SubPageBannerProps } from "../types";

const SubPageBanner: React.FC<SubPageBannerProps> = ({
  title,
  subText,
  iconImage,
  bannerImage,
  titlePosition = { top: "-20px", left: "-30px" }, // Default position for the icon
  bannerPosition = { top: "-10px", right: "0px" }, // Default position for the banner
  iconImageSize = { width: 80, height: 80 }, // Default size for the icon image
  bannerImageSize = { width: 300, height: 300 }, // Default size for the banner image
}) => {
  return (
    <div className="relative">
      <div className="mx-44 flex flex-col">
        <div className="mt-10 relative">
          {/* Dynamic Title */}
          <h1 className="text-2xl relative z-10 bg-transparent">{title}</h1>

          {/* Dynamic Icon Image */}
          <div
            className="absolute z-0"
            style={{ top: titlePosition.top, left: titlePosition.left }}
          >
            <Image
              src={iconImage}
              alt="Icon Image"
              width={iconImageSize.width} // Adjust width
              height={iconImageSize.height} // Fixed height for logos
              objectFit="contain" // Ensures logos retain aspect ratio
            />
          </div>
        </div>

        <div className="mt-10">
          {/* Dynamic SubText */}
          <div>
            <span
              className="text-[80px] leading-tight font-light text-[#131518]"
              dangerouslySetInnerHTML={{ __html: subText }}
            ></span>
          </div>

          {/* Dynamic Banner Image */}
          <div
            className="absolute z-[-1]"
            style={{ top: bannerPosition.top, right: bannerPosition.right }}
          >
            <Image
              src={bannerImage}
              alt="Banner Image"
              width={bannerImageSize.width} // Adjust width
              height={bannerImageSize.height} // Fixed height for logos
              objectFit="contain" // Ensures logos retain aspect ratio
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubPageBanner;

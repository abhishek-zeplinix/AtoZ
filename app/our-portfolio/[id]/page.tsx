"use client";
import SocialLinks from "@/app/components/Homepage/SocialLinks";
import TellUs from "@/app/components/Homepage/TellUs";
import ProductSlider from "@/app/components/OurPortfolioPage/ProductSlider";
import { Portfolio } from "@/app/types";
import Image from "next/image";
import { useParams } from "next/navigation";
import { JSX } from "react";

const portfolioData: Record<string, Portfolio> = {
  "1": {
    label: "UI/UX",
    title:
      "Delivering a gorgeous web experience for UK's top Home Energy Conservation Leader.",
    services: [
      "Film & Video",
      "Data Solutions",
      "Web Solutions",
      "Tech Solutions",
      "Brand Solutions",
    ],
    industry: "FMGC & Technology",
    tools: ["Figma", "Photoshop", "React"],
    clientOverview:
      "LuxeWear is a high-end fashion brand specializing in luxury apparel. They approached us to refresh their brand identity and create a cohesive digital experience that resonates with their elite clientele.",
    challenge: [
      "Outdated brand identity that lacked modern appeal.",
      "Low engagement on digital platforms.",
      "Need for a seamless UI/UX experience across web & mobile.",
    ],
    approach: [
      "Branding: Developed a refined visual identity with a sophisticated logo, typography, and color palette.",
      "Media Strategy: Crafted a premium social media campaign and high-quality brand videos.",
      "UI/UX Design: Redesigned their website with an intuitive shopping experience.",
      "Film & Videography: Created a stunning brand film showcasing LuxeWear’s craftsmanship.",
    ],
    results: [
      "30% increase in brand engagement within 3 months.",
      "20% boost in online sales after website revamp.",
      "10M+ impressions on social media campaigns.",
    ],
    clientTestimonial: `"AtoZ transformed our brand beyond our expectations! The new identity perfectly represents our vision, and the website is a game-changer." – LuxeWear CEO"`,
    images: [
      "/OurPortfolio/first.png",
      "/OurPortfolio/second.png",
      "/OurPortfolio/third.png",
      "/OurPortfolio/fourth.png",
    ],
  },
  "2": {
    label: "UI/UX",
    title: "A modern tech solution for a global SaaS company.",
    services: ["Cloud Solutions", "AI & ML", "Cybersecurity"],
    industry: "SaaS & Enterprise",
    tools: ["Next.js", "Tailwind CSS", "Node.js"],
    clientOverview: "A global SaaS provider looking to scale efficiently.",
    challenge: [
      "Outdated brand identity that lacked modern appeal.",
      "Low engagement on digital platforms.",
      "Need for a seamless UI/UX experience across web & mobile.",
    ],
    approach: [
      "Branding: Developed a refined visual identity with a sophisticated logo, typography, and color palette.",
      "Media Strategy: Crafted a premium social media campaign and high-quality brand videos.",
      "UI/UX Design: Redesigned their website with an intuitive shopping experience.",
      "Film & Videography: Created a stunning brand film showcasing LuxeWear’s craftsmanship.",
    ],
    results: [
      "30% increase in brand engagement within 3 months.",
      "20% boost in online sales after website revamp.",
      "10M+ impressions on social media campaigns.",
    ],
    clientTestimonial: "The best decision we made for our platform!",
    images: ["/saas1.jpg", "/saas2.jpg", "/saas3.jpg"],
  },
};

const decryptId = (encryptedId: string): number | null => {
  try {
    const decoded = decodeURIComponent(encryptedId); // Decode URL-safe characters
    const reversed = atob(decoded); // Base64 decode
    return parseInt(reversed.split("").reverse().join(""), 10); // Reverse back & convert to number
  } catch (error) {
    console.error("Error decrypting ID:", error);
    return null;
  }
};
export default function PortfolioDetails(): JSX.Element {
  const params = useParams();
  const encryptedId = params.id as string;
  const id = decryptId(encryptedId);

  if (!id || !portfolioData[id]) {
    return <h1 className="text-center text-red-500">Portfolio Not Found</h1>;
  }
  const data = portfolioData[id];
  return (
    <>
      <div className="lg:p-8 md:p-8 p-3 lg:mx-8 md:mx-8 mx-3">
        <div className="mb-5 bg-black text-white rounded-lg px-3 py-1 inline-block">
          {data.label}
        </div>
        <h1 className="lg:text-[54px] md:text-[54px] text-[32px] font-light leading-tight mb-4">
          {data.title}
        </h1>
        <div className="">
          <Image
            src={data.images[0]}
            alt="Portfolio Image"
            className="rounded-lg  w-full lg:h-[500px] md:h-[500px] h-[250px]"
            width={500}
            height={500}
          />
          <div className="grid grid-cols-5">
            <div className="lg:col-span-2 md:col-span-2 col-span-5 mt-5">
              <h2 className="text-2xl font-normal">Service</h2>
              <ul className="mt-2">
                {data.services.map((service) => (
                  <li key={service} className="text-[#64748B]">
                    {service}
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl font-normal mt-5">Industry</h2>
              <p className="mt-2 text-[#64748B]">{data.industry}</p>

              <h2 className="text-2xl font-normal mt-5">Tools</h2>
              <ul className="mt-2 ">
                {data.tools.map((tool) => (
                  <li key={tool} className="text-[#64748B]">
                    {tool}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 lg:col-span-2 md:col-span-2 col-span-5">
              <div className="bg-[#F8FAFC] lg:p-8 md:p-8 p-0 rounded-lg  pr-20">
                <h2 className="text-md font-semibold">Client Overview</h2>
                <p className="mt-1 text-[#64748B]">{data.clientOverview}</p>

                <h2 className="text-md font-semibold mt-4">Challenges</h2>
                <div className="mt-2">
                  {data.challenge.map((challenge) => (
                    <p
                      key={challenge}
                      className="text-[#64748B] p-0 leading-tight"
                    >
                      {challenge}
                    </p>
                  ))}
                </div>

                <h2 className="text-md font-semibold mt-4">Approach</h2>
                <div className="mt-2">
                  {data.approach.map((approach) => (
                    <li
                      key={approach}
                      className="text-[#64748B] p-0 leading-tight"
                    >
                      {approach}
                    </li>
                  ))}
                </div>

                <h2 className="text-md font-semibold mt-4">Results</h2>
                <div className="mt-2">
                  {data.results.map((results) => (
                    <li
                      key={results}
                      className="text-[#64748B] p-0 leading-tight "
                    >
                      {results}
                    </li>
                  ))}
                </div>

                <h2 className="text-md font-semibold mt-4">
                  Client Testimonial
                </h2>
                <p className="text-[#64748B] mt-2">{data.clientTestimonial}</p>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <Image
              src={data.images[1]}
              alt="Portfolio Image"
              className="rounded-lg  w-full lg:h-[500px] md:h-[500px] h-[250px]"
              width={500}
              height={500}
            />
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="">
                <Image
                  src={data.images[2]}
                  alt="Portfolio Image"
                  className="rounded-lg  w-full lg:h-[500px] md:h-[500px] h-[180px]"
                  width={500}
                  height={500}
                />
              </div>
              <div className="">
                <Image
                  src={data.images[3]}
                  alt="Portfolio Image"
                  className="rounded-lg  w-full lg:h-[500px] md:h-[500px] h-[180px]"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <ProductSlider />
        <TellUs content="Have a Project in <br/> Mind?" button="Contact Us" />
        <SocialLinks />
      </div>
    </>
  );
}

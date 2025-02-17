// components/AboutUs.tsx
import Image from "next/image";
import AboutVideo from "./AboutVideo";

const AboutUsBanner = () => {
  return (
    <>
      <section className="flex items-center justify-between py-16 px-8 bg-gradient-to-r from-blue-500 to-purple-500">
        <div className="max-w-2xl">
          <h2 className="text-5xl font-semibold text-white">
            Building Bridges Between{" "}
            <span className="font-extrabold text-black">Brands</span> and{" "}
            <span className="font-extrabold text-black">Audiences.</span>
          </h2>
        </div>
        <div className="relative w-40 h-40 flex-shrink-0">
          <Image
            src="/images/about-us-icon.png"
            alt="About Us"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </section>
      <AboutVideo />
    </>
  );
};

export default AboutUsBanner;

import About from "./components/Homepage/About";
import Banner from "./components/Homepage/Banner";
import Blogs from "./components/Homepage/Blogs";
import OurProcess from "./components/Homepage/OurProcess";
import PowerHouse from "./components/Homepage/PowerHouse";
import Projects from "./components/Homepage/Projects";
import SocialLinks from "./components/Homepage/SocialLinks";
import TellUs from "./components/Homepage/TellUs";
import Video from "./components/Homepage/Video";

export default function Home() {
  return (
    <>
      <Banner />
      <About />
      <Video />
      <OurProcess />
      <PowerHouse />
      <Projects />
      <Blogs />
      <TellUs />
      <SocialLinks />
    </>
  );
}

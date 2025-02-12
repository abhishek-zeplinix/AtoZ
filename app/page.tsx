import Footer from "./components/Footer";
import Banner from "./components/Homepage/Banner";
import SocialLinks from "./components/Homepage/SocialLinks";
import TellUs from "./components/Homepage/TellUs";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <TellUs />
      <SocialLinks />
      <Footer />
    </>
  );
}

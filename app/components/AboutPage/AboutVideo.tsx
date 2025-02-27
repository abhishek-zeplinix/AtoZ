import React from "react";

const AboutVideo = () => {
  return (
    <div className="w-full lg:h-screen md:h-screen h-[300px] overflow-hidden relative mt-28">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/AboutPage/video/about.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default AboutVideo;

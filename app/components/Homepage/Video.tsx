import React from "react";

const Video = () => {
  return (
    <div className="w-full h-screen overflow-hidden relative mt-28">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/Homepage/Video/bench.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;

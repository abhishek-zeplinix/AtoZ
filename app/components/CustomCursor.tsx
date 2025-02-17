"use client";

import React, { useEffect, useState } from "react";
import { gsap } from "gsap";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const delay = 1;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animateCursor = () => {
      setPos((prevPos) => ({
        x: prevPos.x + (mousePosition.x - prevPos.x) / delay,
        y: prevPos.y + (mousePosition.y - prevPos.y) / delay,
      }));

      gsap.set(".follower", {
        css: {
          left: pos.x - 5,
          top: pos.y - 5,
        },
      });

      gsap.set(".cursor", {
        css: {
          left: mousePosition.x - 4,
          top: mousePosition.y - 4,
        },
      });

      requestAnimationFrame(animateCursor);
    };

    animateCursor();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mousePosition, pos]);

  const handleMouseEnter = () => {
    gsap.to(".cursor, .follower", { scale: 10, duration: 0.3 });
  };

  const handleMouseLeave = () => {
    gsap.to(".cursor, .follower", { scale: 1, duration: 0.3 });
  };

  return (
    <>
      <div className="follower fixed w-2.5 h-2.5 bg-[#000000]/50 rounded-full pointer-events-none transition-transform ease-out duration-400 z-[1000]"></div>
      <div
        className="btn inline-block w-40 text-center text-lg mx-4"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      ></div>
    </>
  );
};

export default CustomCursor;

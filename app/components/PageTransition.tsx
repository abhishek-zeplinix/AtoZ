"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const PageTransition = ({ isActive }: { isActive: boolean }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isActive) {
      setIsAnimating(true);
      const size = Math.max(window.innerWidth, window.innerHeight) * 2;

      gsap.fromTo(
        circleRef.current,
        { width: 0, height: 0, opacity: 1 },
        {
          width: size,
          height: size,
          duration: 0.8,
          ease: "power3.out",
          onComplete: () => setIsAnimating(false),
        }
      );
    }
  }, [isActive]);

  return (
    <div
      ref={wrapperRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none flex items-center justify-center z-[9999]"
    >
      <div
        ref={circleRef}
        className="absolute bg-purple-600 rounded-full transform scale-0"
        style={{ width: 0, height: 0 }}
      />
    </div>
  );
};

export default PageTransition;

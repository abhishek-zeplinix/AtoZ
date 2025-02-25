/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import type { Testimonial } from "@/app/types";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Import Autoplay module
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
const testimonials: Testimonial[] = [
  {
    id: 1,
    rating: 5,
    text: "Dude, your stuff is the bomb! House rent is the real deal! I STRONGLY recommend house rent to EVERYONE interested in running a successful online business!",
    name: "Lana Bernier",
    role: "Senior Marketing Strategist",
    bgColor: "bg-blue-500",
  },
  {
    id: 2,
    rating: 5,
    text: "Dude, your stuff is the bomb! House rent is the real deal! I STRONGLY recommend house rent to EVERYONE interested in running a successful online business!",
    name: "Lana Bernier",
    role: "Senior Marketing Strategist",
    bgColor: "bg-green-500",
  },
  {
    id: 3,
    rating: 5,
    text: "Dude, your stuff is the bomb! House rent is the real deal! I STRONGLY recommend house rent to EVERYONE interested in running a successful online business!",
    name: "Lana Bernier",
    role: "Senior Marketing Strategist",
    bgColor: "bg-purple-500",
  },
  {
    id: 4,
    rating: 5,
    text: "Dude, your stuff is the bomb! House rent is the real deal! I STRONGLY recommend house rent to EVERYONE interested in running a successful online business!",
    name: "Lana Bernier",
    role: "Senior Marketing Strategist",
    bgColor: "bg-red-500",
  },
  {
    id: 5,
    rating: 5,
    text: "Dude, your stuff is the bomb! House rent is the real deal! I STRONGLY recommend house rent to EVERYONE interested in running a successful online business!",
    name: "Lana Bernier",
    role: "Senior Marketing Strategist",
    bgColor: "bg-red-500",
  },
];
const Testimonial = () => {
  gsap.registerPlugin(ScrollTrigger);

  const sectionRef = useRef(null);

  useEffect(() => {
    const q = gsap.utils.selector(sectionRef);

    // Split the text into characters
    const split = new SplitType(q(".title"), {
      types: "chars",
      tagName: "span",
    });

    // Animate characters appearing when scrolled into view
    gsap.from(q(".title .char"), {
      opacity: 0,
      y: 10,
      duration: 2,
      ease: "power1.out",
      stagger: 0.2,

      scrollTrigger: {
        trigger: q(".title"),
        start: "top 80%", // Adjust visibility trigger
        end: "top 50%",
        scrub: true,
      },
    });

    // Scroll-triggered text animation
    gsap.fromTo(
      q(".text-animation"),
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: q(".text-animation"),
          start: "top 90%",
          end: "top 90%",
          scrub: true,
        },
      }
    );
  }, []);
  return (
    <div className="" ref={sectionRef}>
      <div className="py-16  bg-white mt-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="relative mb-12">
            <div className="absolute text-gray-200 text-8xl -top-200 left-[30%] transform -translate-x-1/2 -translate-y-1/2 z-0">
              <Image
                src="/Homepage/testimonials/comma.svg"
                alt="Testimonial Comma Image"
                width={200}
                height={200}
                objectFit="contain"
              />
            </div>

            <h2 className="lg:text-[76px] md:text-[76px] text-[56px] leading-tight z-10 relative title">
              What <span className="italic text-primary">People</span> says{" "}
              <br />
              <span className="italic text-primary">About Us</span>
            </h2>
          </div>

          <Swiper
            modules={[Autoplay]}
            loop={true}
            spaceBetween={20}
            slidesPerView="auto"
            autoplay={{
              delay: 1000, // Set delay between slides in milliseconds
              disableOnInteraction: false, // Keeps autoplay running after manual swipes
            }}
            speed={2000}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            className="px-4"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div
                  className={`p-6 rounded-xl shadow-lg text-white ${testimonial.bgColor}`}
                >
                  <div className="mb-4 flex items-center justify-between">
                    <div className="">
                      {Array.from({ length: testimonial.rating }, (_, i) => (
                        <span key={i} className="text-white text-lg">
                          &#9733;
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-2 items-center">
                      <span>
                        <Image
                          src="/Homepage/testimonials/thumb.svg"
                          alt="Testimonial Thumb Image"
                          width={20} // Adjust width
                          height={20} // Fixed height for logos
                          objectFit="contain" // Ensures logos retain aspect ratio
                        />
                      </span>
                      <span>Testimonials</span>
                    </div>
                  </div>
                  <p className="mb-4 text-sm text-left">{testimonial.text}</p>
                  <div className="flex items-center mt-4">
                    <Image
                      src="/Homepage/testimonials/profile.png"
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-3"
                      width={50}
                      height={50}
                    />
                    <div className="text-left">
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-xs">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

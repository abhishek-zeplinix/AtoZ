"use client";
import type { ProductSlider } from "@/app/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Import Autoplay module

const testimonials: ProductSlider[] = [
  {
    id: 1,
    category: "Web Development",
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform with seamless UI/UX.",
    image: "/OurPortfolio/first.png",
    bgColor: "bg-blue-500",
  },
  {
    id: 2,
    category: "Mobile App",
    title: "Fitness Tracker App",
    description: "An interactive fitness tracker app for iOS & Android.",
    image: "/OurPortfolio/second.png",
    bgColor: "bg-green-500",
  },
  {
    id: 3,
    category: "Marketing",
    title: "SEO Optimization",
    description: "Boosted website SEO rankings with AI-driven insights.",
    image: "/OurPortfolio/third.png",
    bgColor: "bg-purple-500",
  },
  {
    id: 4,
    category: "Marketing",
    title: "SEO Optimization",
    description: "Boosted website SEO rankings with AI-driven insights.",
    image: "/OurPortfolio/fourth.png",
    bgColor: "bg-purple-500",
  },
  {
    id: 5,
    category: "Marketing",
    title: "SEO Optimization",
    description: "Boosted website SEO rankings with AI-driven insights.",
    image: "/OurPortfolio/first.png",
    bgColor: "bg-purple-500",
  },
];

const ProductSlider = () => {
  const router = useRouter();

  const handleNavigate = (id: number) => {
    router.push(`/our-portfolio/${id}`); // Navigate to the dynamic route
  };

  return (
    <div>
      <div className="py-5 bg-white mt-10">
        <div className="max-w-7xl mx-auto text-center">
          <Swiper
            modules={[Autoplay]}
            loop={true}
            spaceBetween={20}
            slidesPerView="auto"
            autoplay={{
              delay: 2000, // Slide transition delay
              disableOnInteraction: false,
            }}
            speed={1500}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 10 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
            className="px-4"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <div
                  className="rounded-lg overflow-hidden mt-5 relative cursor-pointer lg:mx-3 md:mx-3 mx-0"
                  onClick={() => handleNavigate(item.id)}
                >
                  <div className="absolute bg-black text-white rounded-lg px-3 py-1 right-3 top-3">
                    {item.category}
                  </div>
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="w-full lg:h-[400px] md:h-[400px] h-[300px] object-cover rounded-xl "
                    height={400}
                    width={400}
                  />
                  <div className="py-4 text-left">
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <p className="text-gray-500">{item.description}</p>
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

export default ProductSlider;

"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { IoIosSearch } from "react-icons/io";
import Link from "next/link";
import { useRouter } from "next/navigation";
import PageTransition from "./PageTransition";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/our-portfolio", label: "Our Portfolio" },
    { href: "/our-process", label: "Our Process" },
    { href: "/our-solutions", label: "Our Solutions" },
  ];

  const openDrawer = () => {
    setIsOpen(true);
    gsap.fromTo(
      menuRef.current,
      { y: "-100%", opacity: 0 },
      { y: "0%", opacity: 1, duration: 0.6, ease: "power3.out" }
    );
  };

  const closeDrawer = () => {
    gsap.to(menuRef.current, {
      y: "-100%",
      opacity: 0,
      duration: 0.5,
      ease: "power3.in",
      onComplete: () => setIsOpen(false),
    });
  };

  const handleNavigate = (href: string, event: React.MouseEvent) => {
    event.preventDefault();
    const { clientX: x, clientY: y } = event;
    const size = Math.max(window.innerWidth, window.innerHeight) * 2;

    const wrapper = document.createElement("div");
    wrapper.className = "page-transition-circle-wrapper";
    wrapper.style.setProperty("--animation-duration-circle", "1000ms");
    wrapper.style.setProperty("--animation-duration-opacity", "600ms");

    const circle = document.createElement("div");
    circle.className = "page-transition-circle";
    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;

    wrapper.appendChild(circle);
    document.body.appendChild(wrapper);

    gsap.to(".page-transition", {
      y: "0%",
      opacity: 1,
      duration: 0.3,
      ease: "power3.out",
      onComplete: () => {
        router.push(href);
        setTimeout(() => {
          gsap.to(".page-transition", {
            y: "-100%",
            opacity: 0,
            duration: 0.6,
            ease: "power3.in",
          });
        }, 500);

        setTimeout(() => {
          circle.style.opacity = "0";
        }, 500);

        setTimeout(() => {
          wrapper.remove();
        }, 500);
      },
    });

    closeDrawer();
  };

  return (
    <>
      <PageTransition isActive={isTransitioning} />
      <nav className="bg-white font-matter mx-2 px-4 md:px-6 lg:px-10">
        <div className="container mx-auto flex items-center justify-between p-4 flex-wrap">
          {/* Left section - Social Links */}
          <div className="hidden md:flex items-center space-x-4 text-gray-600 text-sm">
            <a href="#" className="hover:text-gray-800">
              FB
            </a>
            <span>•</span>
            <a href="#" className="hover:text-gray-800">
              IN
            </a>
            <span>•</span>
            <a href="#" className="hover:text-gray-800">
              DR
            </a>
            <span>•</span>
            <a href="#" className="hover:text-gray-800">
              BE
            </a>
          </div>

          {/* Center section - Logo (Centered on small screens) */}
          <div className="flex-1 flex justify-center">
            <Link href="/">
              <Image
                src="/logo.svg"
                alt="Logo"
                className="h-10 w-auto cursor-pointer"
                width={100}
                height={100}
              />
            </Link>
          </div>

          {/* Right section - Search & Menu */}
          <div className="flex items-center gap-4 md:gap-10">
            {/* Search Icon (Hidden on small screens) */}
            <div className="hidden md:flex items-center">
              <IoIosSearch className="w-10 h-7" />
            </div>

            {/* Divider (Hidden on small screens) */}
            <div className="hidden md:block h-10 w-px bg-gray-800"></div>

            {/* Menu Button */}
            <button
              onClick={isOpen ? closeDrawer : openDrawer}
              className="relative"
            >
              <div className="flex items-center gap-2">
                <span className="text-base font-medium hidden md:block">
                  MENU
                </span>
                <div className="flex flex-col gap-1">
                  <div
                    className={`h-[2px] w-6 bg-gray-800 transition-transform duration-300 ${
                      isOpen ? "rotate-45 translate-y-[6px]" : ""
                    }`}
                  ></div>
                  <div
                    className={`h-[2px] w-4 bg-gray-800 transition-transform duration-300 ${
                      isOpen ? "-rotate-45 -translate-y-[6px]" : ""
                    }`}
                  ></div>
                </div>
              </div>
            </button>
          </div>

          {/* Full-Screen Drawer */}
          <div
            ref={menuRef}
            className={`fixed top-0 left-0 w-full h-full bg-white text-black z-50 ${
              isOpen ? "block" : "hidden"
            }`}
          >
            {/* Close Button */}
            <button
              onClick={closeDrawer}
              className="absolute top-5 right-5 text-3xl"
            >
              &times;
            </button>

            {/* Drawer Content */}
            <div className="flex flex-col items-center justify-center h-full space-y-8 text-center">
              {links.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-2xl font-semibold hover:underline"
                  onClick={(event) => handleNavigate(link.href, event)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

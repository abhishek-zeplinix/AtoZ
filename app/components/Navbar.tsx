"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { IoIosSearch } from "react-icons/io";
import Link from "next/link";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/our-portfolio", label: "Our Portfolio" },
    { href: "/our-process", label: "Our Process" },
    { href: "/our-solutions", label: "Our Solutions" },
  ];
  const openDrawer = () => {
    setIsOpen(true); // First, show the drawer
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
      onComplete: () => setIsOpen(false), // Hide the drawer after animation
    });
  };
  return (
    <nav className="bg-white font-matter mx-2 ">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Left section - Links */}
        <div className="flex items-center space-x-4 text-gray-600 text-sm">
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

        {/* Center section - Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Logo"
              className="h-10 w-auto mr-2 cursor-pointer"
              width={100}
              height={100}
            />
          </Link>
        </div>

        {/* Right section - Search & Menu */}
        <div className="flex items-center justify-center gap-10 text-gray-800">
          <div className="flex items-center">
            <IoIosSearch className="w-10 h-7" />
          </div>

          <div className="h-10 w-px bg-gray-800"></div>

          <button onClick={isOpen ? closeDrawer : openDrawer}>
            <div className="flex items-center gap-2">
              <span className="text-base font-medium">MENU</span>
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
            <div className="flex flex-col items-center justify-center h-full space-y-8 ">
              {links.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-2xl font-semibold hover:underline"
                  onClick={closeDrawer}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

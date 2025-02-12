import Image from "next/image";
import React from "react";
import { IoIosSearch } from "react-icons/io";
const Navbar = () => {
  return (
    <nav className="bg-white font-matter mx-2">
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
          <Image
            src="/logo.svg"
            alt="Logo"
            className="h-10 w-auto mr-2"
            width={100}
            height={100}
          />
        </div>

        {/* Right section - Search & Menu */}
        <div className="flex items-center justify-center gap-10 text-gray-800">
          <div className="flex items-center">
            <IoIosSearch className="w-10 h-7" />
          </div>

          <div className="h-10 w-px bg-gray-800"></div>

          <div className="flex items-center gap-2">
            <span className="text-base font-medium">MENU</span>
            <div className="flex flex-col gap-1">
              <div className="h-[2px] w-6 bg-gray-800"></div>
              <div className="h-[2px] w-4 bg-gray-800"></div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

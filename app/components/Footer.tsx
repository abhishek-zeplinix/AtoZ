import Image from "next/image";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <footer className="bg-[#131518] text-white rounded-t-[70px] mt-5">
        <div className="relative flex flex-wrap items-center justify-between lg:p-6 md:p-6 p-0 rounded-t-2xl pt-8">
          {/* Left Section */}
          <div className="w-full md:w-1/2 lg:w-1/2 space-y-4 flex flex-col justify-between">
            <div className="flex lg:flex-row flex-col justify-around lg:space-y-0 md:space-y-0 space-y-5">
              <div className="flex flex-col  italic items-start space-y-2 text-xl lg:px-0 md:px-0 px-6">
                <Image
                  src="/footer-icon.svg"
                  alt="Logo"
                  className="h-5 w-5"
                  width={100}
                  height={100}
                />
                <p className="m-0 ">901 N Pitt Street</p>
                <p className="m-0">Alexandria VA, 22314</p>
                <div className="flex items-center gap-2 border rounded-full px-3 py-1">
                  <FaPhoneAlt />
                  <p>234 567 6776</p>
                </div>
              </div>
              <div className="flex flex-col italic items-start space-y-2 text-xl lg:px-0 md:px-0 px-6">
                <Image
                  src="/footer-icon.svg"
                  alt="Logo"
                  className="h-5 w-5"
                  width={100}
                  height={100}
                />
                <p className="m-0">901 N Pitt Street</p>
                <p className="m-0">Alexandria VA, 22314</p>
                <div className="flex items-center gap-2 border rounded-full px-3 py-1">
                  <FaPhoneAlt />
                  <p>234 567 6776</p>
                </div>
              </div>
            </div>
            <div className="text-left lg:mx-12 md:mx-12 mx-2 lg:px-0 md:px-0 px-2">
              <p className="italic font-light text-white lg:text-xl md:text-xl text-sm mt-5">
                Copyright ©AtoZMedia All Rights Reserved.
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/2 lg:w-1/2 text-center relative hidden lg:block md:block">
            <div className="text-gray-400 absolute top-[-135px] w-full overflow-hidden">
              <Image src="/footertext.svg" alt="" width={520} height={300} />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

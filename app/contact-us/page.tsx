import Image from "next/image";
import React from "react";
import SocialLinks from "../components/Homepage/SocialLinks";

const page = () => {
  return (
    <>
      <div className="mt-10">
        <div>
          <h1 className="text-[72px] text-center italic">
            Contact Now <span>..</span>
          </h1>
          <h3 className="text-[32px] italic text-center">
            Any question or remarks? Just write us a message!
          </h3>
        </div>
        <div className="card mx-8 mt-10">
          <div className="flex flex-col md:flex-row bg-[#F8FAFC] p-4 md:p-4 md:pb-0 pb-0 rounded-2xl  space-y-8 md:space-y-0 border gap-8">
            {/* Left Panel */}
            <div className="relative flex-[4] bg-gray-900 text-white p-4 mb-6 rounded-2xl space-y-6">
              <h2 className="text-2xl font-bold">Contact Information</h2>
              <p className="text-gray-300">
                Say something to start a live chat!
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <i className="pi pi-phone text-xl"></i>
                  <span>+012 3456 789</span>
                </div>
                <div className="flex items-center space-x-4">
                  <i className="pi pi-envelope text-xl"></i>
                  <span>demo@gmail.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <i className="pi pi-map-marker text-xl"></i>
                  <span>132 Dartmouth Street Boston, MA 02156 USA</span>
                </div>
              </div>
              <div className="flex space-x-4 pt-4">
                <i className="pi pi-twitter text-xl cursor-pointer"></i>
                <i className="pi pi-instagram text-xl cursor-pointer"></i>
                <i className="pi pi-discord text-xl cursor-pointer"></i>
              </div>
              <div className="absolute bottom-0 right-0">
                <Image
                  src="/ContactUs/images/absolute.png"
                  alt="title"
                  className=""
                  width={200}
                  height={100}
                />
              </div>
            </div>

            {/* Right Panel */}
            <div className="flex-[6] p-4 pb-0 rounded-2xl space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:ring-black focus:border-black bg-transparent"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:ring-black focus:border-black bg-transparent"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    className="mt-1 block w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:ring-black focus:border-black bg-transparent"
                    placeholder="example@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="mt-1 block w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:ring-black focus:border-black bg-transparent"
                    defaultValue="+012 3456 789"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Select Subject?
                </label>
                <div className="flex space-x-4 mt-2">
                  {[
                    "General Inquiry",
                    "General Inquiry",
                    "General Inquiry",
                    "General Inquiry",
                  ].map((subject, index) => (
                    <label key={index} className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="subject"
                        className="form-radio h-4 w-4 text-black focus:ring-black"
                        defaultChecked={index === 0}
                      />
                      <span>{subject}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  className="mt-1 block w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:ring-black focus:border-black bg-transparent"
                  placeholder="Write your message..."
                  rows={1}
                ></textarea>
              </div>
              <div className="flex justify-end ">
                <button className="flex items-center  space-x-2 bg-black text-white px-6 py-2 rounded-md shadow hover:bg-gray-800">
                  <span>Send Message</span>
                  <i className="pi pi-send"></i>
                </button>
              </div>
              <div
                className="flex justify-end mr-10 mt-0"
                style={{ marginTop: "0px" }}
              >
                <Image
                  src="ContactUs/svg/message.svg"
                  alt="title"
                  className=""
                  width={200}
                  height={100}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <SocialLinks />
      </div>
    </>
  );
};

export default page;

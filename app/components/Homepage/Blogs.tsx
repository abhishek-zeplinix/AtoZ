import Image from "next/image";
import React from "react";
const cardData = [
  {
    image: "/Homepage/blogs/first.png", // Replace with actual image URL
    title: "Opening Day Of Boating Season, Seattle WA",
    author: "Mark Hatter",
    views: 15,
    rating: 4.5,
  },
  {
    image: "/Homepage/blogs/second.png", // Replace with actual image URL
    title: "Opening Day Of Boating Season, Seattle WA",
    author: "Mark Hatter",
    views: 15,
    rating: 4.5,
  },
  {
    image: "/Homepage/blogs/third.png", // Replace with actual image URL
    title: "Opening Day Of Boating Season, Seattle WA",
    author: "Mark Hatter",
    views: 15,
    rating: 4.5,
  },
  {
    image: "/Homepage/blogs/second.png", // Replace with actual image URL
    title: "Opening Day Of Boating Season, Seattle WA",
    author: "Mark Hatter",
    views: 15,
    rating: 4.5,
  },
  {
    image: "/Homepage/blogs/third.png", // Replace with actual image URL
    title: "Opening Day Of Boating Season, Seattle WA",
    author: "Mark Hatter",
    views: 15,
    rating: 4.5,
  },
  {
    image: "/Homepage/blogs/first.png", // Replace with actual image URL
    title: "Opening Day Of Boating Season, Seattle WA",
    author: "Mark Hatter",
    views: 15,
    rating: 4.5,
  },
];

const Blogs = () => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <h1 className="text-[70px]">Read Our Blogs</h1>
      </div>
      <div className=" py-10 px-5 md:px-10 lg:px-20">
        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-300 p-3"
            >
              <div>
                {/* Card Image */}
                <div className="relative ">
                  <Image
                    src={card.image}
                    alt="Card Image"
                    className="w-full h-full object-cover"
                    width={100}
                    height={100}
                  />
                </div>

                {/* Card Content */}
                <div className="p-4 space-y-3">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-600">{card.author}</p>

                  {/* Card Footer */}
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <span className="flex items-center space-x-1">
                        <i className="pi pi-eye" />
                        <span>{card.views}k</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <i className="pi pi-star" />
                        <span>{card.rating}</span>
                      </span>
                    </div>
                    <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                      <i className="pi pi-arrow-right" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;

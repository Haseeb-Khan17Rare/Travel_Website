import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import PakistanImg from "../assets/Pakistan.jpg";
import China from "../assets/China.jpg";
import TokyoImg from "../assets/Tokyo.jpg";
import Turkey from "../assets/Turkey.jpg";
import DubaiImg from "../assets/Dubai.jpg";
import Saudi_Arab from "../assets/saudiarab.jpg";

const destinations = [
  {
    name: "PAKISTAN",
  description:
    "A land of diverse cultures, ancient history, and stunning natural beauty — from majestic mountains to vibrant cities, Pakistan offers unforgettable experiences for every traveler.",
    image: PakistanImg, // make sure you import PakistanImg at the top
  },  
  {
      name: "CHINA",
      description:
        "A country rich in history, culture, and innovation — from the Great Wall to vibrant modern cities, China offers an unforgettable journey.",
      image: China, // make sure to import this image
  },
  {
    name: "JAPAN",
    description: "A mix of tradition and future with temples and skyscrapers.",
    image: TokyoImg,
  },
  {
      name: "SAUDI ARABIA",
      description:
        "A land of timeless deserts, spiritual heritage, and modern marvels — where ancient traditions meet the future in cities like Riyadh and Jeddah.",
      image: Saudi_Arab, // make sure to import this image
  },
  {
      name: "TURKEY",
      description:
      "Where East meets West — Turkey is a land of rich history, stunning architecture, and breathtaking landscapes from Istanbul to Cappadocia.",
      image: Turkey, // make sure to import this image
  },
  {
    name: "United Arab Emirates",
    description: "A futuristic city in the desert with luxury and innovation.",
    image: DubaiImg,
  },
];

export default function TravelSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div
      className="relative w-full min-h-screen overflow-hidden flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12 py-8"
      style={{
        backgroundImage: `url(${destinations[activeIndex].image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Left Section */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start gap-6 text-white text-center lg:text-left mb-10 lg:mb-0">
        {/* Stepper */}
        <div className="flex lg:flex-col items-center justify-center gap-3">
          {destinations.map((_, i) => (
            <div key={i} className="flex flex-col items-center">
              <span
                className={`flex items-center justify-center w-7 h-7 rounded-full border-2 transition-all duration-500 ${
                  i === activeIndex
                    ? "bg-blue-500 text-white border-blue-500 scale-125"
                    : "bg-transparent text-gray-400 border-gray-400"
                }`}
              >
                {i + 1}
              </span>
              {i !== destinations.length - 1 && (
                <div className="hidden lg:block w-0.5 h-6 bg-gray-400"></div>
              )}
            </div>
          ))}
        </div>

        {/* Text */}
        <div className="relative z-10 max-w-xl text-white">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold">
            {destinations[activeIndex].name}
          </h1>
          <p className="mt-4 text-gray-200 text-sm sm:text-base">
            {destinations[activeIndex].description}
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 text-sm sm:text-base">
            Explore →
          </button>
        </div>
      </div>

      {/* Right Side Cards */}
      <div className="relative z-10 w-full lg:w-[45rem]">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          spaceBetween={20}
          speed={1000}
          onSlideChangeTransitionStart={(swiper) =>
            setActiveIndex(swiper.realIndex)
          }
        >
          {destinations.map((place, index) => (
            <SwiperSlide key={index}>
              <div
                className={`relative group rounded-2xl overflow-hidden transition-all duration-500 ${
                  index === activeIndex
                    ? "scale-105 shadow-2xl border-2 border-blue-400"
                    : "scale-95 opacity-80"
                }`}
              >
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-64 sm:h-72 lg:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 p-4 text-white">
                  <h3 className="font-semibold text-lg">{place.name}</h3>
                  <p className="text-sm text-gray-200 mt-1 line-clamp-2">
                    {place.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

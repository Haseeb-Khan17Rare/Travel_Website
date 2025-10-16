import React from "react";
import { Link } from "react-router-dom";

// Import your new package images
import PakistanImg from "../assets/pakistan.jpg";
import SaudiArabiaImg from "../assets/Saudi Arab.jpg";
import ChinaImg from "../assets/china.jpg";
import TurkeyImg from "../assets/turkey.jpg";

const Packages = () => {
  const packages = [
    {
      id: 1,
      name: "Explore Pakistan",
      slug: "explore-pakistan",
      country: "Pakistan",
      image: PakistanImg,
      short: "Experience mountains, valleys, and cultural heritage across Pakistan.",
      details:
        "Discover the natural beauty and rich culture of Pakistan: visit Hunza, Skardu, Swat, and immerse yourself in local traditions and cuisine.",
      price: "$1200",
      duration: "7 Days / 6 Nights",
      highlights: ["Hunza Valley", "Skardu", "Swat Valley", "Fairy Meadows"],
    },
    {
      id: 2,
      name: "Saudi Arabia Adventure",
      slug: "saudi-arabia-adventure",
      country: "Saudi Arabia",
      image: SaudiArabiaImg,
      short: "Explore deserts, cities, and spiritual landmarks in Saudi Arabia.",
      details:
        "Travel through Riyadh, Jeddah, and visit Makkah and Madinah. Enjoy modern architecture, desert experiences, and rich cultural history.",
      price: "$1500",
      duration: "6 Days / 5 Nights",
      highlights: ["Makkah & Madinah", "Riyadh Kingdom Centre", "Jeddah Corniche", "Edge of the World"],
    },
    {
      id: 3,
      name: "Discover China",
      slug: "discover-china",
      country: "China",
      image: ChinaImg,
      short: "A journey through ancient history, modern cities, and iconic landmarks.",
      details:
        "Visit the Great Wall, Forbidden City, Terracotta Army, and explore bustling cities and serene landscapes across China.",
      price: "$1800",
      duration: "8 Days / 7 Nights",
      highlights: ["Great Wall", "Forbidden City", "Terracotta Army", "Guilin Landscapes"],
    },
    {
      id: 4,
      name: "Turkey Explorer",
      slug: "turkey-explorer",
      country: "Turkey",
      image: TurkeyImg,
      short: "Experience the fusion of East and West, history, and stunning landscapes.",
      details:
        "Travel through Istanbul, Cappadocia, Pamukkale, and enjoy hot air balloons, historic sites, and local cuisine in Turkey.",
      price: "$1600",
      duration: "7 Days / 6 Nights",
      highlights: ["Istanbul Grand Bazaar", "Cappadocia Balloons", "Hagia Sophia", "Pamukkale Thermal Pools"],
    },
  ];

  return (
    <section
      id="packages"
      className="py-20 bg-gray-50 text-black pt-5 px-4 sm:px-8 lg:px-16"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-blue-600">
        Featured Packages
      </h2>
      <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto text-sm sm:text-base">
        Choose from our best travel experiences crafted for your comfort.
      </p>

      {/* ✅ Responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300"
          >
            <img
              src={pkg.image}
              alt={pkg.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                {pkg.name}
              </h3>
              <p className="text-gray-500 text-sm mb-1">{pkg.country}</p>
              <p className="text-gray-600 text-sm mb-3">{pkg.short}</p>
              <p className="text-blue-600 font-medium">{pkg.price}</p>
              <p className="text-gray-700 text-sm mb-3">
                Duration: {pkg.duration}
              </p>

              <Link
                to={`/packages/${pkg.slug}`}
                state={{ pkg }}
                className="inline-block mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                View Details →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Packages;

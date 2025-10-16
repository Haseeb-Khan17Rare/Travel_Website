import React from "react";
import { useLocation, Link } from "react-router-dom";

function DestinationDetails() {
  const location = useLocation();
  const destination = location.state?.destination;

  // ✅ Extra details for new destinations
  const moreDetails = {
    Pakistan: {
      attractions: [
        "Hunza Valley",
        "Skardu",
        "Swat Valley",
        "Fairy Meadows",
      ],
      bestTime: "March to June and September to November",
      tips: "Carry warm clothes for northern areas. Try local cuisine like chapli kebab and saag.",
    },
    "Saudi Arabia": {
      attractions: [
        "Makkah and Madinah",
        "Riyadh Kingdom Centre",
        "Jeddah Corniche",
        "Edge of the World",
      ],
      bestTime: "October to March",
      tips: "Respect local customs and dress codes. Stay hydrated in desert areas.",
    },
    China: {
      attractions: [
        "Great Wall of China",
        "Forbidden City",
        "Terracotta Army",
        "Guilin Landscapes",
      ],
      bestTime: "April to May and September to October",
      tips: "Use public transport for big cities. Learn basic Mandarin phrases.",
    },
    Turkey: {
      attractions: [
        "Istanbul Grand Bazaar",
        "Cappadocia Hot Air Balloons",
        "Hagia Sophia",
        "Pamukkale Thermal Pools",
      ],
      bestTime: "April to June and September to October",
      tips: "Try Turkish tea and local sweets. Dress comfortably for walking tours.",
    },
  };

  if (!destination) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-gray-700">
        <h2 className="text-2xl font-bold mb-4">Destination Not Found 😢</h2>
        <Link
          to="/"
          className="text-blue-500 font-semibold hover:underline"
        >
          ← Back to Home
        </Link>
      </div>
    );
  }

  const extra = moreDetails[destination.name] || {};

  return (
    <div className="pt-28 pb-16 px-6 bg-gray-50 text-black min-h-screen">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-96 object-cover"
        />
        <div className="p-8">
          <h1 className="text-4xl font-bold mb-2">{destination.name}</h1>
          <p className="text-gray-700 text-base mb-6">{destination.description}</p>

          {/* 🏙️ Extra Details */}
          {extra.attractions && (
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-3 text-blue-700">
                Top Attractions
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {extra.attractions.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {extra.bestTime && (
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-green-700">Best Time to Visit</h3>
              <p className="text-gray-700 mt-2">{extra.bestTime}</p>
            </div>
          )}

          {extra.tips && (
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-orange-600">Travel Tips</h3>
              <p className="text-gray-700 mt-2">{extra.tips}</p>
            </div>
          )}

          <Link
            to="/"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DestinationDetails;

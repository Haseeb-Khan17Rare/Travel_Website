import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Detail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const destination = location.state?.destination;

  if (!destination) {
    return (
      <div className="text-center text-red-500 mt-40 text-2xl">
        Destination not found 😢
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6 pt-28 text-black">
      <button
        onClick={() => navigate(-1)}
        className="text-blue-500 mb-4 hover:underline"
      >
        ← Back to Destinations
      </button>

      <img
        src={destination.image}
        alt={destination.name}
        className="w-full h-96 object-cover rounded-2xl mb-6 shadow-lg"
      />

      <h1 className="text-4xl font-bold mb-3">{destination.name}</h1>
      <h3 className="text-xl text-gray-600 mb-4">
        Country / Region:{" "}
        <span className="font-semibold text-gray-800">
          {destination.country}
        </span>
      </h3>

      <p className="text-lg text-gray-700 mb-6">
        {destination.details}
      </p>

      <div className="bg-blue-50 rounded-xl p-4 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-blue-700 font-medium">
          💰 Price / Package: {destination.price}
        </p>
        <p className="text-gray-700 font-medium">
          🕒 Duration: {destination.duration}
        </p>
      </div>
    </div>
  );
};

export default Detail;

import React from "react";
import { Link } from "react-router-dom";

const DestinationCard = ({ destination }) => (
  <Link to={destination.link}>
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <img
        src={destination.image}
        alt={destination.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{destination.name}</h2>
        <p className="text-gray-600">{destination.description}</p>
      </div>
    </div>
  </Link>
);

export default DestinationCard;

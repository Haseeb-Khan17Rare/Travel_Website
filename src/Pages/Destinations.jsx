import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Pakistan from "../assets/Pakistan.jpg";
import SaudiArabia from "../assets/saudiarab.jpg";
import China from "../assets/China.jpg";
import Turkey from "../assets/Turkey.jpg";


const Destinations = () => {
  const traveler = useSelector((state) => state.user.traveler);

  const destinations = [
    { id: 1, name: "Pakistan", image: Pakistan },
    { id: 2, name: "SaudiArab", image: SaudiArabia},
    { id: 3, name: "China", image: China },
    { id: 4, name: "Turkey", image: Turkey },
  ];

  const handleAppointment = (destination) => {
    if (traveler) {
      alert(
        `✅ Appointment booked for ${destination.name}!\nTraveler: ${traveler.name}\nEmail: ${traveler.email}`
      );
    } else {
      alert("⚠️ Please register first to book an appointment!");
    }
  };

  return (
    <section id="destinations" className="py-20 bg-gray-50 text-blue-600 pt-28">
      <h2 className="text-3xl font-bold text-center mb-10">
        Popular Destinations
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6">
        {destinations.map((destination) => (
          <div
            key={destination.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden transform hover:-translate-y-2 transition duration-300"
          >
            <img
              src={destination.image}
              alt={destination.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {destination.name}
              </h3>

              <Link
                to={`/destination/${destination.name.toLowerCase()}`}
                state={{ destination }}
                className="inline-block text-blue-600 font-semibold hover:underline"
              >
                View Details →
              </Link>

              <button
                onClick={() => handleAppointment(destination)}
                className="mt-3 w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition"
              >
                Book Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Destinations;

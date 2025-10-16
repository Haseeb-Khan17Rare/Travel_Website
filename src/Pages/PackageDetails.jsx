// src/Pages/PackageDetails.jsx
import React from "react";
import { useLocation, useParams, Link } from "react-router-dom";

const PackageDetails = () => {
  const location = useLocation();
  const { slug } = useParams();
  const pkg = location.state?.pkg;

  if (!pkg) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-8">
        <h2 className="text-2xl font-bold mb-4">Package not found</h2>
        <Link to="/" className="text-blue-600 hover:underline">
          ← Back to Home
        </Link>
      </div>
    );
  }

  return (
    <section className="pt-28 pb-16 bg-gray-50 text-black min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        {/* Hero Image */}
        <div className="rounded-2xl overflow-hidden shadow-lg mb-8">
          <img
            src={pkg.image}
            alt={pkg.name}
            className="w-full h-72 object-cover"
          />
        </div>

        <h1 className="text-3xl font-bold mb-2">{pkg.name}</h1>
        <p className="text-gray-500 mb-4">{pkg.country} · {pkg.duration}</p>

        <p className="text-gray-700 mb-6">{pkg.details}</p>

        <h3 className="text-xl font-semibold mb-3">Highlights</h3>
        <ul className="list-disc list-inside mb-6 text-gray-700">
          {pkg.highlights.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <div className="bg-white rounded-xl p-6 shadow-md">
          <p className="text-lg font-semibold mb-2">Price</p>
          <p className="text-2xl font-bold text-blue-600 mb-4">{pkg.price}</p>
          <Link
            to="/"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
          >
            Back to Packages
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PackageDetails;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerTraveler } from "../Features/user/userSlice";

const Contact = () => {
  const dispatch = useDispatch();
  const traveler = useSelector((state) => state.user.traveler);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerTraveler(formData));
    alert("Traveler registered successfully!");
    setFormData({ name: "", email: "", password: "" });
  };

  return (
    <div
      id="Contact"
      className="py-16 flex items-center justify-center bg-cover bg-center min-h-screen"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')",
      }}
    >
      {!traveler && (
        <div className="bg-white/20 backdrop-blur-lg p-10 rounded-2xl shadow-xl w-[75%] max-w-2xl md:max-w-lg sm:max-w-sm border border-white/30 transition-all duration-300 flex flex-col items-center justify-center min-h-[20rem] md:min-h-[20rem] sm:min-h-fit">
          <h2 className="text-3xl md:text-2xl font-bold text-center text-white mb-8">
            Traveler Registration
          </h2>

          <form
            onSubmit={handleSubmit}
            className="w-full space-y-5 flex flex-col justify-center"
            autoComplete="off"
          >
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 sm:p-2.5 rounded-lg bg-white/80 focus:ring-2 focus:ring-blue-400 text-base sm:text-sm"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 sm:p-2.5 rounded-lg bg-white/80 focus:ring-2 focus:ring-blue-400 text-base sm:text-sm"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-3 sm:p-2.5 rounded-lg bg-white/80 focus:ring-2 focus:ring-blue-400 text-base sm:text-sm"
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 sm:py-2 rounded-lg font-semibold text-base sm:text-sm hover:bg-blue-700 transition-all"
            >
              Submit Details
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Contact;

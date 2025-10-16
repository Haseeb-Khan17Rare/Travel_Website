import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutTraveler } from "../Features/user/userSlice";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // icons for hamburger and close

function Navbar() {
  const traveler = useSelector((state) => state.user.traveler);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logoutTraveler());
    navigate("/");
  };

  const firstName = traveler?.name?.split?.(" ")?.[0];

  return (
    <header className="absolute top-0 left-0 right-0 z-20 bg-slate-900">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-400">
          Traveler
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-white">
          <li><Link to="/" className="hover:text-blue-300">Home</Link></li>
          <li><a href="#destinations" className="hover:text-blue-300">Destinations</a></li>
          <li><a href="#packages" className="hover:text-blue-300">Packages</a></li>
          <li><a href="#Contact" className="hover:text-blue-300">Contact</a></li>
        </ul>

        {/* Traveler Section */}
        {traveler && (
          <div className="hidden md:flex text-white items-center gap-2">
            <span>Hello, <span className="font-semibold">{firstName}</span></span>
            <button
              onClick={handleLogout}
              className="ml-3 bg-red-500 text-white px-3 py-1 rounded-md text-sm hover:bg-red-600 transition"
            >
              Logout
            </button>
          </div>
        )}

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
  <div className="absolute right-0 top-full mt-2 w-48 bg-slate-800 rounded-lg shadow-lg py-3 px-4 text-white text-left md:hidden">
    <Link
      to="/"
      className="block py-2 hover:text-blue-300"
      onClick={() => setIsOpen(false)}
    >
      Home
    </Link>
    <a
      href="#destinations"
      className="block py-2 hover:text-blue-300"
      onClick={() => setIsOpen(false)}
    >
      Destinations
    </a>
    <a
      href="#packages"
      className="block py-2 hover:text-blue-300"
      onClick={() => setIsOpen(false)}
    >
      Packages
    </a>
    <a
      href="#Contact"
      className="block py-2 hover:text-blue-300"
      onClick={() => setIsOpen(false)}
    >
      Contact
    </a>

    {traveler && (
      <div className="border-t border-gray-700 mt-2 pt-2">
        <p className="text-sm">
          Hello, <span className="font-semibold">{firstName}</span>
        </p>
        <button
          onClick={() => {
            handleLogout();
            setIsOpen(false);
          }}
          className="mt-2 bg-red-500 text-white px-4 py-1.5 rounded-md text-sm hover:bg-red-600 transition w-full"
        >
          Logout
        </button>
      </div>
    )}
  </div>
)}

    </header>
  );
}

export default Navbar;

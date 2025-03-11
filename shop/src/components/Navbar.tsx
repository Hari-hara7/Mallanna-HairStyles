import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaHome, FaInfoCircle, FaServicestack, FaImages, FaBoxOpen, FaEnvelope, FaSignInAlt } from "react-icons/fa";
import logo from "../assets/logo.png"; // Ensure the path is correct

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Navigation Links with Icons
  const navLinks = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "About", path: "/about", icon: <FaInfoCircle /> },
    { name: "Services", path: "/services", icon: <FaServicestack /> },
    { name: "Gallery", path: "/gallery", icon: <FaImages /> },
    { name: "Products", path: "/products", icon: <FaBoxOpen /> },
    { name: "Contact", path: "/contact", icon: <FaEnvelope /> },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black border-b border-[#FFD700] shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo - Increased Size */}
        <Link to="/" className="flex items-center gap-2">
          <img 
            src={logo} 
            alt="Mallanna Salon" 
            className="w-16 h-16 rounded-full object-cover transition hover:scale-110"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-[#FFD700] text-lg font-medium">
          {navLinks.map((item) => (
            <li key={item.name} className="flex items-center gap-2">
              {item.icon}
              <Link
                to={item.path}
                className="hover:text-white transition transform hover:scale-110"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Sign In Button */}
        <Link
          to="/signin"
          className="hidden md:flex items-center gap-2 bg-[#FFD700] text-black px-5 py-2 rounded-lg shadow-md transition hover:bg-white hover:text-black hover:scale-105"
        >
          <FaSignInAlt />
          Sign In
        </Link>

        {/* Mobile Burger Icon */}
        <button
          className="md:hidden text-[#FFD700] text-2xl transition hover:scale-110"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu (Sleek Sliding Panel from Right) */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-black border-l border-[#FFD700] shadow-2xl transition-all duration-500 ease-in-out transform ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-5 right-5 text-[#FFD700] text-3xl transition hover:scale-125"
          onClick={() => setIsOpen(false)}
        >
          <FaTimes />
        </button>

        {/* Mobile Menu Links */}
        <ul className="flex flex-col items-center mt-20 gap-6 text-[#FFD700] text-lg font-medium">
          {navLinks.map((item) => (
            <li key={item.name} className="flex items-center gap-3 w-full text-center">
              <Link
                to={item.path}
                className="flex items-center gap-3 w-full px-6 py-3 hover:bg-[#FFD700]/20 rounded-lg transition hover:scale-105"
                onClick={() => setIsOpen(false)}
              >
                {item.icon} {item.name}
              </Link>
            </li>
          ))}

          {/* Sign In Button */}
          <Link
            to="/signin"
            className="mt-4 flex items-center gap-2 bg-[#FFD700] text-black px-6 py-3 rounded-lg shadow-md transition hover:bg-white hover:text-black hover:scale-105"
            onClick={() => setIsOpen(false)}
          >
            <FaSignInAlt />
            Sign In
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube, FaMapMarkerAlt } from "react-icons/fa";
import logo from "../assets/logo.png"; // Ensure correct path

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-t from-black to-gray-900/80 text-white py-12 px-6 text-center backdrop-blur-lg border-t border-[#FFD700] shadow-2xl">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        
        {/* Left Section - Logo & Branding */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="relative p-2 bg-black/50 rounded-full shadow-xl animate-pulse transition hover:scale-110 hover:shadow-[#FFD700]/80">
            <img 
              src={logo} 
              alt="Mallanna Logo" 
              className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-[#FFD700] shadow-md transition hover:rotate-6"
            />
          </div>
          <p className="text-gray-300 mt-4 text-lg font-semibold">
            <span className="text-[#FFD700] font-bold">Mallanna</span> – Luxury & Elegance, Redefined.
          </p>
        </div>

        {/* Middle Section - Google Map */}
        <div className="w-full md:w-1/2 h-52 rounded-lg overflow-hidden shadow-md bg-black/30 border border-[#FFD700] transition hover:scale-105">
          <iframe
            className="w-full h-full border-none rounded-lg"
            src="https://maps.google.com/maps?q=Mallanna%20Salon&t=&z=13&ie=UTF8&iwloc=&output=embed"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

      </div>

      {/* Quick Links */}
      <div className="flex flex-wrap justify-center mt-10 gap-6 text-gray-300 text-lg">
        {["Home", "About", "Services", "Gallery", "Products", "Contact"].map((link, index) => (
          <a
            key={index}
            href={`#${link.toLowerCase()}`}
            className="relative group transition hover:text-[#FFD700] hover:scale-105"
          >
            {link}
            <span className="block h-0.5 w-0 bg-[#FFD700] transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center mt-6 space-x-6">
        {[
          { icon: <FaFacebook />, link: "#" },
          { icon: <FaInstagram />, link: "#" },
          { icon: <FaTwitter />, link: "#" },
          { icon: <FaLinkedin />, link: "#" },
          { icon: <FaYoutube />, link: "#" },
        ].map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FFD700] text-3xl transition transform hover:scale-125 hover:text-white hover:rotate-6"
          >
            {social.icon}
          </a>
        ))}
      </div>

      {/* Address & Copyright */}
      <div className="mt-10 text-gray-400 text-sm">
        <p className="flex justify-center items-center gap-2">
          <FaMapMarkerAlt className="text-[#FFD700]" /> Kadiri Court Road, Andhra Pradesh
        </p>
        <p className="mt-2">&copy; {new Date().getFullYear()} Mallanna. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

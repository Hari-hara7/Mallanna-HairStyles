import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import logo from "../assets/logo.png"; // Make sure this path is correct

const Footer = () => {
  return (
    <footer className="relative bg-black/40 text-white py-10 px-6 text-center backdrop-blur-lg border-t border-[#FFD700]">
      {/* Logo & Branding */}
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        {/* Logo with Highlight Effect */}
        <div className="flex items-center space-x-3">
          <div className="p-1 bg-black rounded-full shadow-lg animate-pulse">  
            <img 
              src={logo} 
              alt="Mallanna Logo" 
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-[#FFD700] shadow-md"
            />
          </div>
        </div>

        {/* Tagline */}
        <p className="text-gray-300 mt-4 sm:mt-0 text-sm sm:text-base">
          <span className="text-[#FFD700] font-semibold">Luxury & Elegance</span>, Redefined.
        </p>
      </div>

      {/* Links Section */}
      <div className="flex flex-wrap justify-center mt-6 space-x-6 text-gray-300">
        {["Home", "About Us", "Services", "Gallery", "Contact"].map((link, index) => (
          <a
            key={index}
            href={`#${link.toLowerCase()}`}
            className="transition hover:text-[#FFD700] hover:scale-110"
          >
            {link}
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
            className="text-[#FFD700] text-2xl transition hover:text-white hover:scale-125"
          >
            {social.icon}
          </a>
        ))}
      </div>

      {/* Copyright */}
      <p className="text-gray-400 mt-6 text-sm">© 2024 Mallanna. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;

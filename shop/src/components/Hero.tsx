import heroBg from "../assets/image.jpg";
import logo from "../assets/logo.png"; // Import your brand logo
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section
      className="relative h-screen flex flex-col items-center justify-center text-center px-6 sm:px-12 md:px-16 text-white overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Soft Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-56 h-56 bg-[#FFD700] opacity-20 blur-3xl rounded-full animate-pulse hidden md:block"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-[#FFD700] opacity-20 blur-3xl rounded-full animate-pulse hidden md:block"></div>

      {/* Logo */}
      <motion.img
        src={logo}
        alt="Brand Logo"
        className="relative z-10 w-50 sm:w-36 md:w-44 lg:w-52 xl:w-60 mb-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center w-full max-w-5xl px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Main Heading */}
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#ff8c00] uppercase tracking-wide"
          style={{ fontFamily: '"Cormorant Garamond", serif' }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Exclusive Luxury
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mt-4 max-w-4xl leading-relaxed"
          style={{ fontFamily: '"Cormorant Garamond", serif' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Elevate your grooming experience with premium salon services designed for elegance and perfection.
        </motion.p>

        {/* Call-To-Action Button */}
        <motion.button
          className="mt-8 px-6 sm:px-8 md:px-12 py-3 md:py-4 rounded-full bg-gradient-to-r from-[#FFD700] to-yellow-600 text-black font-semibold shadow-lg text-lg sm:text-xl md:text-2xl tracking-wide hover:scale-110 hover:shadow-2xl transition-transform duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/services")}
        >
          Explore Services
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;

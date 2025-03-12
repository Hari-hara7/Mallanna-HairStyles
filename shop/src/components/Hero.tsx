import heroBg from "../assets/image.jpg";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section
      className="relative h-screen flex flex-col items-center justify-center text-center px-6 sm:px-10 md:px-16 text-white overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Soft Glowing Lights for a Premium Feel */}
      <div className="absolute top-1/3 left-1/4 w-40 h-40 bg-[#FFD700] opacity-20 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-[#FFD700] opacity-20 blur-3xl rounded-full animate-pulse"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center w-full max-w-3xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Main Heading */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#FFD700] leading-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Redefining Luxury & Elegance
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="text-base sm:text-lg md:text-xl text-gray-300 mt-4 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Experience the finest salon services tailored for elegance and sophistication. Let our expert stylists transform your look with premium care.
        </motion.p>

        {/* Call-To-Action Button */}
        <motion.button
          className="mt-6 px-6 sm:px-10 py-3 rounded-full bg-gradient-to-r from-[#FFD700] to-yellow-600 text-black font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 flex items-center gap-3"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/services")} // Navigate to services page
        >
          Explore Services <FaArrowRight className="text-black text-lg sm:text-xl" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;

import heroBg from "../assets/image.jpg";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      className="relative h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 text-white overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-md"></div>

      {/* Content */}
      <motion.div 
        className="relative z-10 flex flex-col items-center w-full max-w-4xl px-4 sm:px-8 md:px-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1 
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#FFD700] drop-shadow-[0_0_10px_#FFD700] leading-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Experience Luxury & Elegance
        </motion.h1>
        <motion.p 
          className="text-base sm:text-lg md:text-xl text-gray-300 mt-4 max-w-2xl px-2 sm:px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Exclusive salon services tailored for a premium experience. Indulge in luxury with expert stylists and high-end products.
        </motion.p>
        <motion.button 
          className="mt-6 px-6 sm:px-8 py-3 rounded-full bg-gradient-to-r from-[#FFD700] to-yellow-600 text-black font-semibold shadow-lg flex items-center gap-2 sm:gap-3 hover:scale-105 hover:shadow-xl transition-transform duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Book an Appointment <FaArrowRight className="text-black text-base sm:text-lg" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;

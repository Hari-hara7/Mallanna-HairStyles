import { motion } from "framer-motion";
import { FaCrown, FaStar } from "react-icons/fa";
import { FaScissors } from "react-icons/fa6"; // Correct import

const AboutSection = () => {
  return (
    <section className="bg-black text-white py-12 px-4 sm:px-8 text-center relative overflow-hidden">
      {/* Gold Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-40"></div>

      {/* Content Wrapper */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Title with Icons (Hidden on Mobile) */}
        <motion.div
          className="hidden sm:flex justify-center items-center space-x-3"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <FaCrown className="text-[#FFD700] text-5xl" />
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#FFD700] drop-shadow-md mt-4">
            Experience True Luxury
          </h2>
          <FaCrown className="text-[#FFD700] text-5xl" />
        </motion.div>

        {/* Title for Mobile (Without Icons) */}
        <h2 className="sm:hidden text-3xl font-extrabold text-[#FFD700] drop-shadow-md">
          Experience True Luxury
        </h2>

        {/* Description */}
        <motion.p
          className="mt-4 text-sm sm:text-lg text-gray-300 leading-relaxed px-4 sm:px-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Indulge in a world of sophistication and elegance at our premium salon.
          Our expert stylists deliver high-end beauty services tailored to perfection.
        </motion.p>

        {/* Icon Features - Horizontal on Mobile, Grid on Larger Screens */}
        <motion.div
          className="flex flex-row sm:grid sm:grid-cols-3 justify-center items-center gap-6 mt-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          <div className="flex flex-col items-center hover:scale-110 transition-transform duration-300">
            <FaStar className="text-[#FFD700] text-4xl sm:text-5xl" />
            <p className="mt-2 text-gray-300 text-sm sm:text-base">Premium Service</p>
          </div>
          <div className="flex flex-col items-center hover:scale-110 transition-transform duration-300">
            <FaScissors className="text-[#FFD700] text-4xl sm:text-5xl" />
            <p className="mt-2 text-gray-300 text-sm sm:text-base">Expert Stylists</p>
          </div>
          <div className="flex flex-col items-center hover:scale-110 transition-transform duration-300">
            <FaCrown className="text-[#FFD700] text-4xl sm:text-5xl" />
            <p className="mt-2 text-gray-300 text-sm sm:text-base">Luxury Experience</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;

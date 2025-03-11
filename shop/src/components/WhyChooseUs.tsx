import { motion } from "framer-motion";
import { FaGem, FaCrown, FaHandsHelping, FaSpa } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <section className="relative bg-black text-white py-12 px-4 sm:px-12 text-center overflow-hidden">
      {/* Glassmorphism Background Effect */}
      <div className="absolute inset-0 backdrop-blur-lg bg-black border border-white/20 rounded-lg"></div>

      <motion.div
        className="relative z-10 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#FFD700] drop-shadow-md">
          Why Choose Us?
        </h2>

        {/* Description */}
        <p className="mt-4 text-gray-300 text-sm sm:text-lg leading-relaxed">
          Experience the perfect blend of elegance and expertise. We provide top-tier services, ensuring a truly luxurious and personalized experience.
        </p>

        {/* Features with Icons */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          {/* Feature 1 */}
          <div className="flex flex-col items-center bg-black border  border-[#FFD700] p-6 rounded-lg backdrop-blur-lg hover:scale-105 transition-transform duration-300">
            <FaGem className="text-[#FFD700] text-5xl mb-3" />
            <p className="text-gray-300 text-sm sm:text-base">Premium Quality Products</p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center bg-black border  border-[#FFD700] p-6 rounded-lg backdrop-blur-lg hover:scale-105 transition-transform duration-300">
            <FaCrown className="text-[#FFD700] text-5xl mb-3" />
            <p className="text-gray-300 text-sm sm:text-base">Highly Skilled Stylists</p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center bg-black border  border-[#FFD700] p-6 rounded-lg backdrop-blur-lg hover:scale-105 transition-transform duration-300">
            <FaSpa className="text-[#FFD700] text-5xl mb-3" />
            <p className="text-gray-300 text-sm sm:text-base">Luxurious Atmosphere</p>
          </div>

          {/* Feature 4 */}
          <div className="flex flex-col items-center bg-black border  border-[#FFD700] p-6 rounded-lg backdrop-blur-lg hover:scale-105 transition-transform duration-300">
            <FaHandsHelping className="text-[#FFD700] text-5xl mb-3" />
            <p className="text-gray-300 text-sm sm:text-base">Personalized Care</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhyChooseUs;

import { motion } from "framer-motion";
import { GiScissors, GiLipstick, GiHealing, GiSpinalCoil, GiSparkles, GiBeard } from "react-icons/gi";

const FeaturedSection = () => {
  return (
    <section className="bg-black text-white py-16 px-6 sm:px-12 text-center">
      <motion.h2
        className="text-4xl sm:text-5xl font-extrabold text-[#FFD700] drop-shadow-lg"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Featured Services
      </motion.h2>
      <motion.p
        className="mt-4 text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Indulge in luxury with our top-rated beauty services, tailored to perfection.
      </motion.p>

      {/* Service Cards */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {[
          { title: "Hair Styling", desc: "Get a professional and elegant haircut.", icon: <GiScissors className="text-[#FFD700] text-5xl" /> },
          { title: "Luxury Skincare", desc: "Pamper yourself with premium skincare.", icon: <GiHealing className="text-[#FFD700] text-5xl" /> },
          { title: "Spa & Wellness", desc: "Relax with a refreshing spa experience.", icon: <GiSpinalCoil className="text-[#FFD700] text-5xl" /> },
          { title: "Makeup & Beauty", desc: "Get the perfect glam look for any occasion.", icon: <GiLipstick className="text-[#FFD700] text-5xl" /> },
          { title: "Bridal Services", desc: "Exclusive bridal makeover packages.", icon: <GiSparkles className="text-[#FFD700] text-5xl" /> },
          { title: "Men's Grooming", desc: "Premium beard and hair styling for men.", icon: <GiBeard className="text-[#FFD700] text-5xl" /> },
        ].map((service, index) => (
          <motion.div
            key={index}
            className="relative bg-black/30 border border-[#FFD700] rounded-2xl p-6 shadow-lg backdrop-blur-lg transition transform hover:scale-105"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
          >
            <div className="flex justify-center">{service.icon}</div>
            <h3 className="text-2xl font-semibold mt-4 text-[#FFD700]">{service.title}</h3>
            <p className="text-gray-300 mt-2">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedSection;

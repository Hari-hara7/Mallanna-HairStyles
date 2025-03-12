import { FaCut, FaSpa, FaHandSparkles, FaAirFreshener, FaUserTie } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const services = [
  { title: "Luxury Haircut", description: "Precision styling with premium products.", icon: <FaCut className="text-6xl text-gold" /> },
  { title: "Spa & Massage", description: "Relaxing massage treatments for total comfort.", icon: <FaSpa className="text-6xl text-gold" /> },
  { title: "Manicure & Pedicure", description: "High-end nail care with gold-standard polish.", icon: <FaHandSparkles className="text-6xl text-gold" /> },
  { title: "Fragrance Therapy", description: "Soothing scents for a refreshing experience.", icon: <FaAirFreshener className="text-6xl text-gold" /> },
  { title: "Grooming & Styling", description: "Personalized styling for an elite look.", icon: <FaUserTie className="text-6xl text-gold" /> },
];

const Services = () => {
  return (
    <div className="bg-black text-white font-['Poppins'] overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section with 3D Text Effect */}
      <motion.div 
        className="relative h-46 flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: "url('/services-bg.jpg')" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <motion.h1
          className="relative text-4xl md:text-8xl font-extrabold text-transparent bg-clip-text  bg-gradient-to-r from-[#FFD700] to-[#ff8c00] drop-shadow-lg uppercase tracking-widest mt-30"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Our Premium Services
        </motion.h1>
      </motion.div>

      {/* Services Section */}
      <section className="py-20 px-6">
        <h2 className="text-5xl text-center font-bold text-[#FFD700] mb-16 tracking-wider glow-effect">
          Experience True Luxury
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-16 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="glass-card p-10 rounded-2xl text-center border border-[#FFD700]/50 shadow-lg hover:scale-105 transition-transform duration-300 relative overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Icon with Glow Effect */}
              <div className="flex justify-center mb-6">
                <motion.div 
                  className="text-[#FFD700] transition duration-300 group-hover:rotate-12"
                  whileHover={{ scale: 1.1 }}
                >
                  {service.icon}
                </motion.div>
              </div>
              
              {/* Title & Description */}
              <h3 className="text-3xl font-semibold text-[#FFD700]">{service.title}</h3>
              <p className="text-gray-300 mt-4 text-lg">{service.description}</p>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center text-xl font-semibold text-[#FFD700]">
                Unparalleled Elegance
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Client Testimonials - Floating Effect */}
      <section className="py-24 px-6 bg-gray-900 rounded-t-[50px]">
        <h2 className="text-5xl text-center font-bold text-[#FFD700] mb-16 tracking-wider glow-effect">
          What Our Clients Say
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {[
            { name: "Sophia L.", text: "The best salon experience ever! Their attention to detail is incredible." },
            { name: "James P.", text: "I've never had a better haircut in my life. Highly recommend!" },
            { name: "Anna M.", text: "The stylists are true professionals, and the ambiance is amazing." }
          ].map((review, index) => (
            <motion.div
              key={index}
              className="testimonial-card p-8 rounded-xl text-center border border-[#FFD700]/50 shadow-lg hover:scale-105 transition duration-300"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, repeat: Infinity, repeatType: "mirror", delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-[#FFD700]">{review.name}</h3>
              <p className="text-gray-300 mt-3">{review.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action - Book Now */}
<section className="py-16 px-4 sm:px-6 bg-black">
  <motion.div 
    className="max-w-3xl mx-auto text-center p-8 sm:p-12 border border-[#FFD700] rounded-2xl shadow-lg bg-gray-900/50"
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1, ease: "easeOut" }}
  >
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FFD700] mb-4 sm:mb-6 leading-tight">
      Book Your Appointment Now
    </h2>
    <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto">
      Experience luxury styling and grooming with our professional team.
    </p>
    <motion.button
      className="mt-6 sm:mt-8 px-6 sm:px-10 py-3 sm:py-4 text-lg sm:text-xl font-semibold bg-gradient-to-r from-[#FFD700] to-[#ff8c00] text-black rounded-md shadow-lg hover:scale-105 transition duration-300"
      whileHover={{ scale: 1.1 }}
    >
      Schedule a Visit
    </motion.button>
  </motion.div>
</section>


      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Services;

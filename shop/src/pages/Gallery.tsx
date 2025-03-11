import Navbar from "../components/Navbar";
import GalleryGrid from "../components/GalleryGrid";
import CircularGallery from "../components/CircularGallery";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const Gallery = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <motion.div
        className="relative text-center pt-32 px-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#ff8c00] drop-shadow-lg uppercase tracking-widest">
          Style & Elegance
        </h1>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mt-4">
          Experience the **art of grooming** with our premium haircuts, styling, and spa services. 
          A transformation you’ll love!
        </p>
      </motion.div>

      {/* Circular Gallery Section */}
      <motion.div
        style={{ height: "500px", position: "relative" }}
        className="mt-16 flex justify-center items-center"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
      </motion.div>

      {/* Grid Gallery */}
      <motion.section
        className="container mx-auto px-6 py-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-3xl md:text-5xl font-semibold text-center text-[#FFD700] mb-8">
          Our Signature Styles
        </h2>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
          Explore our finest haircuts, beard grooming, and luxury salon services captured in stunning visuals.
        </p>
  
      </motion.section>

      <Footer />
    </div>
  );
};

export default Gallery;

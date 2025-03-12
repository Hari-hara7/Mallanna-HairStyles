import { useState } from "react";
import { motion } from "framer-motion";
import { FaShoppingCart } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductModal from "../components/ProductModal";
import shampu from "../assets/luxuryshampoo.jpg";
import logo from "../assets/logo.png";
import gold from "../assets/gold.jpg";
import beard from "../assets/beard.jpg";
import wax from "../assets/wax.jpg";
import face from "../assets/face.jpg";

const products = [
  {
    name: "Luxury Shampoo",
    price: "₹1,999",
    image: shampu,
  },
  {
    name: "Gold Infused Conditioner",
    price: "₹2,499",
    image: gold,
  },
  {
    name: "Premium Beard Oil",
    price: "₹999",
    image: beard,
  },
  {
    name: "Hair Wax Pro",
    price: "₹1,299",
    image: wax,
  },
  {
    name: "Luxury Face Serum",
    price: "₹2,999",
    image: face,
  },
];

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <motion.div
        className="relative text-center py-20 px-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="flex justify-center">
          <img src={logo} alt="Mallanna Logo" className="w-32 md:w-40" />
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#ff8c00] uppercase tracking-wider sm:tracking-widest mt-3 sm:mt-4 md:mt-6 text-center font-['Cormorant_Garamond']">
  Exclusive Collection
</h1>

<p className="text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto mt-6 sm:mt-8 font-[Poppins] leading-relaxed text-center">
  Experience unmatched luxury with our handpicked premium grooming products.
</p>

      </motion.div>

      {/* Product Cards */}
      <section className="container mx-auto px-6 py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {products.map((product, index) => (
          <motion.div
            key={index}
            className="relative bg-white/10 backdrop-blur-lg border border-gray-700 rounded-2xl p-6 shadow-2xl hover:scale-105 transition-transform duration-300 overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {/* Product Image with Floating Logo */}
            <div className="relative flex justify-center">
              <img src={product.image} alt={product.name} className="w-40 h-40 object-cover rounded-lg shadow-lg" />
              <motion.img
                src={logo}
                alt="Brand Logo"
                className="absolute -top-4 -right-4 w-14 h-14 opacity-90 transform rotate-6"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              />
            </div>

            {/* Product Info */}
            <div className="mt-4 text-center">
              <h3 className="text-2xl font-bold text-[#FFD700] font-[Playfair Display]">{product.name}</h3>
              <p className="text-gray-300 mt-2 font-[Poppins]">{product.price}</p>
            </div>

            {/* Buy Now Button */}
            <button
              className="w-full mt-6 flex items-center justify-center gap-2 bg-gradient-to-r from-[#FFD700] to-[#ff8c00] text-black font-semibold py-3 rounded-lg shadow-lg hover:scale-110 transition duration-300 font-[Poppins]"
              onClick={() => setSelectedProduct(product)}
            >
              <FaShoppingCart /> Buy Now
            </button>
          </motion.div>
        ))}
      </section>

      {/* Buy Now Modal */}
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}

      <Footer />
    </div>
  );
};

export default Products;

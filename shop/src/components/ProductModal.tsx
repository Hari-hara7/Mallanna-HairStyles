import { useState } from "react";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { FaBoxOpen } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FiHash, FiHome } from "react-icons/fi";

import logo from "../assets/logo.png"; // Replace with the actual path to your logo

const ProductModal = ({ product, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    quantity: 1,
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black/80 flex justify-center items-center p-4 sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="bg-white/10 backdrop-blur-lg border border-gray-500 p-4 sm:p-6 rounded-2xl text-white w-full max-w-lg sm:max-w-md relative shadow-2xl transition-all"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
      >
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-xl sm:text-2xl text-[#FFD700] hover:text-red-500 transition-transform duration-200 hover:rotate-90"
          onClick={onClose}
        >
          <IoClose />
        </button>

        {/* Brand Logo */}
        <div className="flex justify-center mb-4">
          <img src={logo} alt="Brand Logo" className="w-16 h-16 sm:w-20 sm:h-20 rounded-full shadow-lg" />
        </div>

        {/* Product Title with Logo */}
        <h2 className="text-xl sm:text-3xl font-bold text-[#FFD700] mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
          <FaBoxOpen className="text-3xl sm:text-4xl" /> {product.name}
        </h2>

        {/* Order Form */}
        <form action="https://formspree.io/f/{your_formspree_id}" method="POST">
          {/* Name Field */}
          <div className="relative mb-3 sm:mb-4">
            <MdOutlineEmail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-2 sm:p-3 pl-12 sm:pl-14 bg-black border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-[#FFD700]"
              onChange={handleChange}
              required
            />
          </div>

          {/* Email Field */}
          <div className="relative mb-3 sm:mb-4">
  <MdOutlineEmail className="absolute left-4 sm:left-5 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg sm:text-xl" />
  <input
    type="email"
    name="email"
    placeholder="Your Email"
    className="w-full p-2 sm:p-3 pl-12 sm:pl-14 bg-black border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-[#FFD700]"
    onChange={handleChange}
    required
  />
</div>


          {/* Quantity Field */}
          <div className="relative mb-3 sm:mb-4">
            <FiHash className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
            <input
              type="number"
              name="quantity"
              min="1"
              placeholder="Quantity"
              className="w-full p-2 sm:p-3 pl-12 sm:pl-14 bg-black border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-[#FFD700]"
              onChange={handleChange}
              required
            />
          </div>

          {/* Address Field */}
          <div className="relative mb-4 sm:mb-6">
            <FiHome className="absolute left-3 top-3 text-gray-400 text-lg" />
            <textarea
              name="address"
              placeholder="Delivery Address"
              className="w-full p-2 sm:p-3 pl-12 sm:pl-14 bg-black border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-[#FFD700]"
              onChange={handleChange}
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 sm:py-3 bg-gradient-to-r from-[#FFD700] to-[#ff8c00] text-black font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Confirm Order
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default ProductModal;

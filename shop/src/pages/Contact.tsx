import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send. Please try again.");
      }
    } catch (error) {
      setStatus("An error occurred.");
    }
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-40 flex items-center justify-center text-center px-4">
        <motion.h1
          className="text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#ff8c00] drop-shadow-lg uppercase tracking-wide mt-20"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Contact Us
        </motion.h1>
      </div>

      {/* Contact Info & Form Section */}
      <div className="container mx-auto px-6 py-10 grid gap-10 md:grid-cols-2">
        
        {/* Left Section - Contact Info */}
        <motion.div
          className="bg-white/10 backdrop-blur-lg p-6 sm:p-8 rounded-lg shadow-lg border border-[#FFD700]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-[#FFD700] mb-6 text-center sm:text-left">
            Get in Touch
          </h2>
          <div className="space-y-4 text-lg">
            <p className="flex items-center"><FaPhone className="text-[#FFD700] mr-3" /> 88862 89728</p>
            <p className="flex items-center"><FaEnvelope className="text-[#FFD700] mr-3" /> mallanna@gmail.com</p>
            <p className="flex items-center"><FaMapMarkerAlt className="text-[#FFD700] mr-3" /> Mallanna Hair Styles, Court Road, Kadiri, Andhra Pradesh</p>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center sm:justify-start space-x-6 mt-6 text-2xl">
            <a href="#" className="text-[#FFD700] hover:text-[#ff8c00] transition"><FaFacebook /></a>
            <a href="#" className="text-[#FFD700] hover:text-[#ff8c00] transition"><FaInstagram /></a>
            <a href="#" className="text-[#FFD700] hover:text-[#ff8c00] transition"><FaWhatsapp /></a>
          </div>
        </motion.div>

        {/* Right Section - Contact Form */}
        <motion.form
          className="bg-white/10 backdrop-blur-lg p-6 sm:p-8 rounded-lg shadow-lg border border-[#FFD700]"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-[#FFD700] mb-6 text-center sm:text-left">
            Send a Message
          </h2>
          <div className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-black text-white border border-[#FFD700] focus:outline-none focus:ring-2 focus:ring-[#ff8c00]"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-black text-white border border-[#FFD700] focus:outline-none focus:ring-2 focus:ring-[#ff8c00]"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-black text-white border border-[#FFD700] focus:outline-none focus:ring-2 focus:ring-[#ff8c00]"
              required
            ></textarea>
            <button className="w-full p-3 bg-[#FFD700] text-black font-bold rounded-lg hover:bg-[#ff8c00] transition">
              Send Message
            </button>
          </div>
          {status && <p className="mt-4 text-center text-[#FFD700]">{status}</p>}
        </motion.form>
      </div>

      {/* Google Map */}
      <div className="w-full h-60 sm:h-72 px-6">
        <iframe
          className="w-full h-full rounded-lg shadow-lg border border-[#FFD700] mb-4"
          src="https://maps.google.com/maps?q=Mallanna%20Salon&t=&z=13&ie=UTF8&iwloc=&output=embed"
          loading="lazy"
        ></iframe>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;

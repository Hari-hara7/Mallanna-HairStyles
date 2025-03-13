import { useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Signin = () => {
  const { loginWithGoogle, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/dashboard"); // Redirect if logged in
    }
  }, [user, navigate]);

  return (
    <div className="relative min-h-screen flex flex-col bg-black text-white">
      {/* Navbar (Fixed on Top) */}
      <Navbar />

      {/* Background Glow Effects */}
      <motion.div
        className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#FFD700]/20 via-[#ff8c00]/10 to-transparent blur-[120px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      />

      {/* Content Wrapper (Fixes Footer Overlapping) */}
      <div className="flex flex-1 items-center justify-center px-6">
        <motion.div
          className="relative bg-black/80 backdrop-blur-md border border-[#FFD700]/30 rounded-2xl shadow-2xl p-10 w-full max-w-md text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Animated Title */}
          <motion.h2
            className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#ff8c00] mb-6 drop-shadow-lg uppercase"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Welcome Back
          </motion.h2>

          <p className="text-gray-400 text-lg mb-6">
            Sign in to access exclusive features.
          </p>

          {/* Google Sign-In Button */}
          <motion.button
            className="w-full flex items-center justify-center gap-3 bg-[#111] text-white font-semibold py-3 rounded-lg shadow-md border border-[#FFD700]/50 hover:border-[#ff8c00] hover:bg-[#222] transition-all duration-300"
            onClick={loginWithGoogle}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FcGoogle size={24} />
            Sign in with Google
          </motion.button>
        </motion.div>
      </div>

      {/* Floating Decorative Effects */}
      <motion.div
        className="absolute w-36 h-36 bg-[#FFD700]/20 rounded-full blur-3xl top-10 left-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1.2 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div
        className="absolute w-36 h-36 bg-[#ff8c00]/20 rounded-full blur-3xl bottom-10 right-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1.2 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Footer (Properly Placed at the Bottom) */}
     
    </div>
  );
};

export default Signin;

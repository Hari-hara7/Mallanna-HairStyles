import { useAuth } from "../contexts/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

import { FaUserCircle, FaCalendarCheck, FaCommentAlt, FaMoneyCheckAlt, FaSignOutAlt } from "react-icons/fa";

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  if (!user) return null;

  return (
    <div className="min-h-screen flex flex-col items-center bg-black text-white font-[Poppins] relative">
      {/* Navbar */}
      <Navbar />

      {/* Background Glow Effects */}
      <motion.div
        className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#FFD700]/40 via-[#ff8c00]/20 to-transparent blur-[180px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      />

      {/* Dashboard Container */}
      <motion.div
        className="relative w-full max-w-4xl bg-black/80 backdrop-blur-lg border border-[#FFD700]/60 rounded-2xl shadow-2xl px-6 py-10 sm:p-12 text-center mt-30"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Profile Section */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {user.photoURL ? (
            <img src={user.photoURL} alt="User" className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-[#FFD700]/80 shadow-lg" />
          ) : (
            <FaUserCircle className="text-6xl sm:text-7xl text-[#FFD700]" />
          )}
          <h1 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#ff8c00] mt-4 uppercase">
            Welcome, {user.displayName}
          </h1>
          <p className="text-[#FFD700]/80 mt-2 text-sm sm:text-base">{user.email}</p>
        </motion.div>

        {/* Action Buttons */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <ActionButton to="/appointments" icon={<FaCalendarCheck />} text="Book Appointment" />
          <ActionButton to="/feedback" icon={<FaCommentAlt />} text="Give Feedback" />
          <ActionButton to="/feedback-list" icon={<FaCommentAlt />} text="View Feedback" />
          <ActionButton to="/view-payments" icon={<FaMoneyCheckAlt />} text="View Payments" />
          <ActionButton to="/record-payment" icon={<FaMoneyCheckAlt />} text="Record Payment" />
        </div>

        {/* Logout Button */}
        <motion.button
          className="mt-8 w-full flex items-center justify-center gap-3 bg-[#111] text-[#FFD700] font-semibold py-3 rounded-lg shadow-md border border-[#FFD700]/80 hover:border-[#ff8c00] hover:bg-[#222] transition-all duration-300"
          onClick={logout}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaSignOutAlt />
          Logout
        </motion.button>
      </motion.div>

      {/* Floating Decorative Effects */}
      <motion.div
        className="absolute w-28 sm:w-36 h-28 sm:h-36 bg-[#FFD700]/30 rounded-full blur-3xl top-5 left-5 sm:top-10 sm:left-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1.2 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div
        className="absolute w-28 sm:w-36 h-28 sm:h-36 bg-[#ff8c00]/30 rounded-full blur-3xl bottom-5 right-5 sm:bottom-10 sm:right-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1.2 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      />


    </div>
  );
};

// Reusable Action Button Component
const ActionButton = ({ to, icon, text }) => (
  <motion.div 
    className="relative"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Link to={to} className="w-full flex items-center justify-center gap-3 bg-[#111] text-[#FFD700] font-semibold py-4 rounded-lg shadow-md border border-[#FFD700]/80 hover:border-[#ff8c00] hover:bg-[#222] transition-all duration-300">
      {icon}
      {text}
    </Link>
  </motion.div>
);

export default Dashboard;

// src/components/Appointments.js

import React, { useState, useEffect } from "react";
import { db, auth } from "../services/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { FaUserCircle, FaPhoneAlt, FaSignOutAlt, FaCalendarAlt, FaCheckCircle } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Appointments = () => {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    date: "",
  });
  const [success, setSuccess] = useState(false);

  // Track user authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        setFormData((prev) => ({
          ...prev,
          name: currentUser.displayName || "",
          email: currentUser.email || "",
        }));
      }
    });
    return () => unsubscribe();
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Book an appointment
  const handleBookAppointment = async () => {
    const { name, email, phone, serviceType, date } = formData;

    if (!name || !email || !phone || !serviceType || !date) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      await addDoc(collection(db, "appointments"), {
        ...formData,
        date: new Date(date).toISOString(),
        status: "pending",
        createdAt: serverTimestamp(),
      });

      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);

      // Reset form fields
      setFormData((prev) => ({
        ...prev,
        phone: "",
        serviceType: "",
        date: "",
      }));
    } catch (error) {
      console.error("Error booking appointment:", error.message);
      alert(`Failed to book appointment: ${error.message}`);
    }
  };

  // Sign out user
  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Sign-out error:", error.message);
    }
  };

  if (!user) {
    return (
      <div className="flex flex-col justify-center items-center h-screen text-white">
        <p className="text-2xl font-semibold">Please sign in to continue.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-6">
      <div className="w-full max-w-lg bg-black/40 backdrop-blur-md border border-yellow-500 shadow-2xl rounded-xl p-6 text-white relative overflow-hidden">

        {/* Success message */}
        {success && (
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-2 rounded-md flex items-center gap-2 shadow-lg">
            <FaCheckCircle /> Appointment Booked Successfully!
          </div>
        )}

        {/* User profile */}
        <div className="flex items-center justify-between p-4 bg-black/50 rounded-lg border border-yellow-400 mb-4 shadow-md">
          <div className="flex items-center">
            {user.photoURL ? (
              <img src={user.photoURL} alt="User Avatar" className="w-12 h-12 rounded-full border-2 border-yellow-400" />
            ) : (
              <FaUserCircle className="text-4xl text-yellow-400" />
            )}
            <div className="ml-3">
              <p className="text-lg font-semibold text-yellow-300">{user.displayName}</p>
              <p className="text-sm text-gray-400">{user.email}</p>
            </div>
          </div>
          <button onClick={handleSignOut} className="text-red-500 hover:text-red-400 flex items-center gap-1">
            <FaSignOutAlt /> Sign Out
          </button>
        </div>

        {/* Booking form */}
        <h2 className="text-2xl font-bold text-yellow-400 text-center mb-4">Book an Appointment</h2>

        <div className="space-y-3">
          <div className="flex items-center bg-black/50 p-3 rounded-lg border border-gray-600">
            <FaUserCircle className="text-yellow-400 text-xl mr-3" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="bg-transparent w-full outline-none text-white placeholder-gray-400"
            />
          </div>

          <div className="flex items-center bg-black/50 p-3 rounded-lg border border-gray-600">
            <IoMdMail className="text-yellow-400 text-xl mr-3" />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              className="bg-transparent w-full outline-none text-gray-400"
              disabled
            />
          </div>

          <div className="flex items-center bg-black/50 p-3 rounded-lg border border-gray-600">
            <FaPhoneAlt className="text-yellow-400 text-xl mr-3" />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="bg-transparent w-full outline-none text-white placeholder-gray-400"
            />
          </div>
          <div className="flex items-center bg-black/50 p-3 rounded-lg border border-gray-600">
  <FaCalendarAlt className="text-yellow-400 text-xl mr-3" />
  <select
    name="serviceType"
    value={formData.serviceType}
    onChange={handleChange}
    className="bg-black text-white w-full outline-none border-none appearance-none"
  >
    <option value="" className="bg-black text-white">
      Select Service
    </option>
    <option value="Haircut" className="bg-black text-white">
      Haircut
    </option>
    <option value="Shaving" className="bg-black text-white">
      Shaving
    </option>
    <option value="Hair Color" className="bg-black text-white">
      Hair Color
    </option>
    <option value="Facial" className="bg-black text-white">
      Facial
    </option>
  </select>
</div>


          <div className="flex items-center bg-black/50 p-3 rounded-lg border border-gray-600">
            <FaCalendarAlt className="text-yellow-400 text-xl mr-3" />
            <input
              type="datetime-local"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="bg-transparent w-full outline-none text-white placeholder-gray-400"
            />
          </div>
        </div>

        <button
          className="mt-6 w-full bg-yellow-500 text-black font-bold py-3 rounded-lg hover:bg-yellow-400"
          onClick={handleBookAppointment}
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Appointments;

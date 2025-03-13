import { useState, useEffect } from "react";
import { db, auth } from "../services/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { onAuthStateChanged, signOut } from "firebase/auth";

const Appointments = () => {
  const [user, setUser] = useState<any>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [date, setDate] = useState("");

  // Track Authentication State
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        setName(currentUser.displayName || "");
        setEmail(currentUser.email || "");
      }
    });
    return () => unsubscribe(); // Cleanup listener
  }, []);

  const handleBookAppointment = async () => {
    if (!name || !email || !phone || !serviceType || !date) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      await addDoc(collection(db, "appointments"), {
        name,
        email,
        phone,
        serviceType,
        date: new Date(date).toISOString(),
        status: "pending",
        createdAt: serverTimestamp(),
      });

      alert("Appointment booked successfully!");

      setPhone("");
      setServiceType("");
      setDate("");
    } catch (error) {
      console.error("Error booking appointment:", error);
      alert("Failed to book appointment. Please try again.");
    }
  };

  const handleSignOut = async () => {
    await signOut(auth);
  };

  if (!user) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <p className="text-xl text-gray-600">Please sign in to continue.</p>
      </div>
    );
  }

  return (
    <div className="p-4 max-w-lg mx-auto bg-white shadow-lg rounded-lg">
      {/* User Profile Section */}
      <div className="flex items-center justify-between p-4 bg-gray-100 rounded-md mb-4">
        <div className="flex items-center">
          <img
            src={user.photoURL || "https://via.placeholder.com/50"}
            alt="User Avatar"
            className="w-12 h-12 rounded-full mr-3"
          />
          <div>
            <p className="text-lg font-semibold">{user.displayName}</p>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
        </div>
        <button
          onClick={handleSignOut}
          className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600"
        >
          Sign Out
        </button>
      </div>

      {/* Appointment Booking Form */}
      <h2 className="text-xl font-semibold mb-4">Book an Appointment</h2>

      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 my-2 w-full rounded"
      />

      <input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 my-2 w-full rounded"
        disabled
      />

      <input
        type="tel"
        placeholder="Your Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="border p-2 my-2 w-full rounded"
      />

      <select
        value={serviceType}
        onChange={(e) => setServiceType(e.target.value)}
        className="border p-2 my-2 w-full rounded"
      >
        <option value="">Select Service</option>
        <option value="Haircut">Haircut</option>
        <option value="Shaving">Shaving</option>
        <option value="Hair Color">Hair Color</option>
        <option value="Facial">Facial</option>
      </select>

      <input
        type="datetime-local"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="border p-2 my-2 w-full rounded"
      />

      <button
        className="bg-green-500 text-white px-4 py-2 rounded w-full hover:bg-green-600 transition"
        onClick={handleBookAppointment}
      >
        Book Now
      </button>
    </div>
  );
};

export default Appointments;

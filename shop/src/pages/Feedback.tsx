import { useState } from "react";
import { db } from "../services/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext"; // Import Auth
import Navbar from "../components/Navbar";

import { 
  FaUserTie, FaStar, FaCommentDots, 
  FaPaperPlane, FaUserCircle 
} from "react-icons/fa";

const Feedback = () => {
  const { user } = useAuth(); // Get user details
  const [selectedWorker, setSelectedWorker] = useState("");
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(5);
  const navigate = useNavigate();

  // Workers List
  const workers = [
    { id: "worker1", name: "Worker 1" },
    { id: "worker2", name: "Worker 2" },
    { id: "worker3", name: "Worker 3" },
    { id: "worker4", name: "Worker 4" },
    { id: "worker5", name: "Worker 5" },
    { id: "worker6", name: "Worker 6" },
    { id: "worker7", name: "Worker 7" },
  ];

  // Submit Feedback
  const submitFeedback = async () => {
    if (!selectedWorker) {
      alert("⚠️ Please select a worker.");
      return;
    }
    if (!feedback.trim()) {
      alert("⚠️ Please enter feedback.");
      return;
    }

    try {
      await addDoc(collection(db, "feedbacks"), {
        workerId: selectedWorker,
        feedback,
        rating,
        userId: user?.uid,
        userName: user?.displayName || "Anonymous",
        userPhoto: user?.photoURL || "",
        createdAt: serverTimestamp(),
      });

      alert("✅ Feedback submitted successfully!");
      setSelectedWorker("");
      setFeedback("");
      setRating(5);

      navigate("/feedback-list");
    } catch (error) {
      console.error("❌ Error:", error);
      alert("Failed to submit feedback.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black text-white">
         <Navbar />
      <div className="p-6 w-full max-w-lg bg-black border border-yellow-500 shadow-2xl rounded-xl text-white mt-40">
        
        {/* User Profile Section */}
        <div className="flex flex-col items-center mb-6 ">
          {user?.photoURL ? (
            <img src={user.photoURL} alt="User" className="w-20 h-20 rounded-full border-4 border-yellow-500 shadow-lg" />
          ) : (
            <FaUserCircle className="text-6xl text-yellow-500" />
          )}
          <h2 className="text-xl font-bold text-yellow-400 mt-3">Welcome, {user?.displayName || "Guest"}</h2>
        </div>

        <h2 className="text-2xl font-bold text-yellow-400 mb-4 text-center">✨ Leave Feedback</h2>

        {/* Worker Selection */}
        <label className="block mb-2 text-lg flex items-center gap-2">
          <FaUserTie className="text-yellow-400" />
          Select a Worker:
        </label>
        <select
          value={selectedWorker}
          onChange={(e) => setSelectedWorker(e.target.value)}
          className="border p-2 w-full my-2 rounded bg-black text-white border-yellow-400 focus:ring-2 focus:ring-yellow-500 transition"
        >
          <option value="">Select Worker</option>
          {workers.map((worker) => (
            <option key={worker.id} value={worker.id}>
              {worker.name}
            </option>
          ))}
        </select>

        {/* Feedback Input */}
        <label className="block mb-2 text-lg flex items-center gap-2">
          <FaCommentDots className="text-yellow-400" />
          Your Feedback:
        </label>
        <textarea
          placeholder="Write your feedback here..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          className="border p-2 w-full my-2 rounded bg-black text-white border-yellow-400 focus:ring-2 focus:ring-yellow-500 transition min-h-[100px]"
        />

        {/* Rating Input */}
        <label className="block mb-2 text-lg flex items-center gap-2">
          <FaStar className="text-yellow-400" />
          Rating (1-5):
        </label>
        <input
          type="number"
          min="1"
          max="5"
          value={rating}
          onChange={(e) => setRating(parseInt(e.target.value))}
          className="border p-2 w-full my-2 rounded bg-black text-white border-yellow-400 focus:ring-2 focus:ring-yellow-500 transition"
        />

        {/* Submit Button */}
        <button
          className="bg-yellow-500 text-black px-4 py-2 rounded w-full hover:bg-yellow-600 transition flex items-center justify-center gap-2 mt-4 text-lg font-bold"
          onClick={submitFeedback}
        >
          <FaPaperPlane /> Submit Feedback
        </button>
      </div>
    </div>
  );
};

export default Feedback;

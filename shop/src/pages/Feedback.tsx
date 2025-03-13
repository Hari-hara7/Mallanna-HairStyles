import { useState } from "react";
import { db } from "../services/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Feedback = () => {
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(5);
  const navigate = useNavigate();

  const submitFeedback = async () => {
    if (!feedback.trim()) {
      alert("Please enter feedback before submitting.");
      return;
    }

    try {
      await addDoc(collection(db, "feedbacks"), {
        feedback,
        rating,
        createdAt: serverTimestamp(),
      });

      alert("Feedback submitted successfully!");
      setFeedback("");
      setRating(5);

      // Redirect to Feedback List Page
      navigate("/feedback-list");
    } catch (error) {
      console.error("Error submitting feedback:", error);
      alert("Failed to submit feedback. Please try again.");
    }
  };

  return (
    <div className="p-4 max-w-lg mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Leave Feedback</h2>

      <textarea
        placeholder="Your Feedback"
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        className="border p-2 w-full my-2 rounded"
      />

      <label className="block mb-2">Rating (1-5):</label>
      <input
        type="number"
        min="1"
        max="5"
        value={rating}
        onChange={(e) => setRating(parseInt(e.target.value))}
        className="border p-2 w-full my-2 rounded"
      />

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600 transition"
        onClick={submitFeedback}
      >
        Submit Feedback
      </button>
    </div>
  );
};

export default Feedback;

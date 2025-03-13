import { useEffect, useState } from "react";
import { db } from "../services/firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { FaUserCircle, FaStar, FaRegStar, FaQuoteLeft } from "react-icons/fa";
import Navbar from "../components/Navbar";


const FeedbackList = () => {
  const [feedbackList, setFeedbackList] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "feedbacks"), (snapshot) => {
      const feedbackData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setFeedbackList(feedbackData);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-6">  
    <Navbar />

      <div className="w-full max-w-4xl bg-black/40 backdrop-blur-md border border-yellow-500 shadow-xl rounded-xl p-6 text-white relative overflow-hidden mt-30">
        
        {/* Animated Border Glow */}
        <div className="absolute inset-0 border-2 border-transparent rounded-xl animate-border-glow"></div>

        <h2 className="text-3xl font-bold text-yellow-400 text-center mb-6 flex items-center justify-center gap-2">
          <FaQuoteLeft /> Customer Feedback
        </h2>

        {feedbackList.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-6">
            {feedbackList.map((fb, index) => (
              <div
                key={fb.id}
                className="p-4 bg-black/50 rounded-lg border border-yellow-400 shadow-lg transform transition-all hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* User Info */}
                <div className="flex items-center gap-3 mb-2">
                  {fb.userPhoto ? (
                    <img
                      src={fb.userPhoto}
                      alt={fb.userName}
                      className="w-10 h-10 rounded-full border-2 border-yellow-400"
                    />
                  ) : (
                    <FaUserCircle className="text-4xl text-yellow-400" />
                  )}
                  <div>
                    <h3 className="font-bold text-yellow-300">{fb.userName || "Anonymous"}</h3>
                    <p className="text-gray-400 text-sm">Posted recently</p>
                  </div>
                </div>

                {/* Feedback Message */}
                <p className="text-gray-200 text-lg italic">{`"${fb.feedback}"`}</p>

                {/* Rating System */}
                <div className="flex items-center mt-2 gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-xl">
                      {fb.rating >= star ? (
                        <FaStar className="text-yellow-400" />
                      ) : (
                        <FaRegStar className="text-gray-500" />
                      )}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-400 text-center">No feedback available yet.</p>
        )}
      </div>
    </div>
  );
};

export default FeedbackList;

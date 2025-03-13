import { useEffect, useState } from "react";
import { db } from "../services/firebase";
import { collection, onSnapshot } from "firebase/firestore";

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
    <div className="p-4 max-w-lg mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Customer Feedback</h2>

      {feedbackList.length > 0 ? (
        feedbackList.map((fb) => (
          <div key={fb.id} className="border-b py-2">
            <p className="text-gray-800">{fb.feedback}</p>
            <p className="text-yellow-500 font-bold">Rating: ⭐ {fb.rating}</p>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No feedback available.</p>
      )}
    </div>
  );
};

export default FeedbackList;

import { useState, useEffect } from "react";
import { getPayments } from "../services/firestore";
import { auth } from "../services/firebase";
import { onAuthStateChanged } from "firebase/auth";

const OWNER_UID = "vwVT2hRstWUMClMpU34YzA7YEEz1"; // Replace with actual owner's Firebase UID

const ViewPayments = () => {
  const [payments, setPayments] = useState<any[]>([]);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        });
        fetchPayments();
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const fetchPayments = async () => {
    try {
      const data = await getPayments();
      setPayments(data);
    } catch (error) {
      console.error("Error fetching payments:", error);
    }
  };

  if (!user) {
    return <p className="text-center text-red-500">You must be signed in to view payments.</p>;
  }

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl mb-4 font-semibold text-gray-800">
        {user.uid === OWNER_UID ? "All Workers' Payments" : "Your Recorded Payments"}
      </h2>

      {/* User Profile Info */}
      <div className="flex items-center gap-3 mb-4">
        {user.photoURL ? (
          <img src={user.photoURL} alt="Profile" className="w-12 h-12 rounded-full border" />
        ) : (
          <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-gray-600">
            ?
          </div>
        )}
        <div>
          <p className="font-semibold">{user.displayName}</p>
          <p className="text-sm text-gray-500">{user.email}</p>
        </div>
      </div>

      {payments.length === 0 ? (
        <p className="text-center text-gray-600">No payments recorded yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 shadow-md">
            <thead>
              <tr className="bg-gray-100 border-b">
                <th className="p-3 text-left">Worker</th>
                <th className="p-3 text-left">Customer</th>
                <th className="p-3 text-left">Service</th>
                <th className="p-3 text-left">Amount</th>
                <th className="p-3 text-left">Payment Method</th>
                <th className="p-3 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment) => (
                <tr key={payment.id} className="border-b hover:bg-gray-50">
                  {/* Worker Info */}
                  <td className="p-3 flex items-center gap-3">
                    {payment.workerPhotoURL ? (
                      <img
                        src={payment.workerPhotoURL}
                        alt={payment.workerName}
                        className="w-10 h-10 rounded-full border"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-600">
                        ?
                      </div>
                    )}
                    <div>
                      <p className="font-semibold">{payment.workerName || "Unknown"}</p>
                      <p className="text-xs text-gray-500">{payment.workerEmail || "No Email"}</p>
                    </div>
                  </td>

                  {/* Payment Details */}
                  <td className="p-3">{payment.customerName}</td>
                  <td className="p-3">{payment.service}</td>
                  <td className="p-3 font-semibold">₹{payment.amount}</td>
                  <td className="p-3">{payment.paymentMethod}</td>
                  <td className="p-3 text-sm text-gray-500">
                    {new Date(payment.timestamp.seconds * 1000).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ViewPayments;

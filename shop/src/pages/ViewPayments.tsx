import { useState, useEffect } from "react";
import { getPayments } from "../services/firestore";
import { auth } from "../services/firebase";
import { onAuthStateChanged } from "firebase/auth";
import Navbar from "../components/Navbar";

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

  const formatDate = (timestamp: any) => {
    const dateObj = new Date(timestamp.seconds * 1000);
    return dateObj.toLocaleDateString();
  };

  const formatTime = (timestamp: any) => {
    const dateObj = new Date(timestamp.seconds * 1000);
    return dateObj.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  if (!user) {
    return (
      <div className="h-screen flex justify-center items-center bg-black">
       
        <p className="text-yellow-400 text-xl md:text-2xl font-bold text-center p-4">
          Please sign in to view payments.
        </p>
      </div>
    );
  }

  return (
    
    <div className="min-h-screen bg-black text-yellow-400 p-4 md:p-8 ">
       
         
    
      <header className="text-center mb-8">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-wide">
          {user.uid === OWNER_UID ? "All Workers' Payments" : "Your Recorded Payments"}
        </h1>
        <p className="text-md md:text-lg mt-2 text-yellow-300">{user.email}</p>
      </header>

      {/* User Profile */}
      <section className="flex flex-col md:flex-row items-center gap-4 md:gap-6 bg-black/80 p-5 rounded-lg shadow-lg border border-yellow-500 mb-8">
        {user.photoURL ? (
          <img src={user.photoURL} alt="User Avatar" className="w-20 h-20 rounded-full border-2 border-yellow-500" />
        ) : (
          <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 text-2xl">
            ?
          </div>
        )}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold">{user.displayName}</h2>
          <p className="text-yellow-300 text-md">{user.email}</p>
        </div>
      </section>

      {/* Payments Table */}
      {payments.length === 0 ? (
        <p className="text-center text-yellow-500 text-lg">No payments recorded yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full bg-black/90 text-left border border-yellow-500 shadow-2xl rounded-lg">
            <thead>
              <tr className="bg-black/80 text-yellow-500 text-sm md:text-lg uppercase">
                <th className="p-3 md:p-5">Worker</th>
                <th className="p-3 md:p-5">Customer</th>
                <th className="p-3 md:p-5">Service</th>
                <th className="p-3 md:p-5">Amount</th>
                <th className="p-3 md:p-5">Payment Method</th>
                <th className="p-3 md:p-5">Date</th>
                <th className="p-3 md:p-5">Time</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment) => (
                <tr key={payment.id} className="border-t border-yellow-500 hover:bg-yellow-500/20 transition duration-300">
                  <td className="p-3 md:p-5 flex items-center gap-2 md:gap-4">
                    {payment.workerPhotoURL ? (
                      <img src={payment.workerPhotoURL} alt="Worker" className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-yellow-500" />
                    ) : (
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-300 flex items-center justify-center text-gray-600">
                        ?
                      </div>
                    )}
                    <div>
                      <p className="font-bold text-yellow-300 text-sm md:text-base">{payment.workerName || "Unknown"}</p>
                      <p className="text-yellow-400 text-xs md:text-sm">{payment.workerEmail || "No Email"}</p>
                    </div>
                  </td>
                  <td className="p-3 md:p-5 text-yellow-300 text-sm md:text-base">{payment.customerName}</td>
                  <td className="p-3 md:p-5 text-yellow-300 text-sm md:text-base">{payment.service}</td>
                  <td className="p-3 md:p-5 font-bold text-yellow-500 text-sm md:text-base">₹{payment.amount}</td>
                  <td className="p-3 md:p-5 text-yellow-300 text-sm md:text-base">{payment.paymentMethod}</td>
                  <td className="p-3 md:p-5 text-yellow-400 text-xs md:text-sm">{formatDate(payment.timestamp)}</td>
                  <td className="p-3 md:p-5 text-yellow-400 text-xs md:text-sm">{formatTime(payment.timestamp)}</td>
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

import { useState, useEffect } from "react";
import { addPayment, getPayments } from "../services/firestore";
import { auth } from "../services/firebase";
import { onAuthStateChanged } from "firebase/auth";

const RecordPayment = () => {
  const [customerName, setCustomerName] = useState("");
  const [service, setService] = useState("");
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Cash");
  const [user, setUser] = useState<any>(null);
  const [payments, setPayments] = useState<any[]>([]);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !service || !amount) {
      alert("Please fill in all fields");
      return;
    }

    try {
      await addPayment({
        customerName,
        service,
        amount: Number(amount),
        paymentMethod,
        workerName: user.displayName,
        workerEmail: user.email,
        workerPhotoURL: user.photoURL,
      });
      alert("Payment recorded successfully!");
      setCustomerName("");
      setService("");
      setAmount("");
      setPaymentMethod("Cash");
      fetchPayments();
    } catch (error) {
      alert("Failed to record payment: " + error.message);
    }
  };

  if (!user) {
    return <p className="text-center text-red-500">You must be signed in to access this page.</p>;
  }

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl mb-4">Record Payment</h2>
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

      <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
        <input
          type="text"
          placeholder="Customer Name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Service"
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border p-2 rounded"
        />
        <select
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="Cash">Cash</option>
          <option value="Card">Card</option>
          <option value="UPI">UPI</option>
        </select>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Save Payment
        </button>
      </form>

      <h3 className="text-xl mt-6">Recorded Payments</h3>
      <ul className="mt-2">
        {payments.map((payment) => (
          <li key={payment.id} className="border-b p-2 flex items-center gap-3">
            <div className="flex items-center gap-2">
              {payment.workerPhotoURL ? (
                <img
                  src={payment.workerPhotoURL}
                  alt="Worker Profile"
                  className="w-10 h-10 rounded-full border"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-600">
                  ?
                </div>
              )}
              <div>
                <p className="font-semibold">{payment.workerName}</p>
                <p className="text-xs text-gray-500">{payment.workerEmail}</p>
              </div>
            </div>
            <div>
              <strong>{payment.customerName}</strong> - {payment.service} - ₹{payment.amount} ({payment.paymentMethod})
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecordPayment;

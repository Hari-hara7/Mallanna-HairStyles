import { useState, useEffect } from "react";
import { addPayment, getPayments } from "../services/firestore";
import { auth } from "../services/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { FaRupeeSign, FaMoneyBillWave, FaUser, FaUserCircle } from "react-icons/fa";
import Navbar from "../components/Navbar";

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
    return <p className="text-center text-yellow-500">You must be signed in to access this page.</p>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center py-10 px-4" style={styles.container}>
        <Navbar />
      <div style={styles.card}>
        <h2 style={styles.title}>💰 Record Payment</h2>

        <div style={styles.profile}>
          {user.photoURL ? (
            <img src={user.photoURL} alt="Profile" style={styles.avatar} />
          ) : (
            <FaUserCircle style={styles.iconLarge} />
          )}
          <div>
            <p style={styles.username}>{user.displayName}</p>
            <p style={styles.userEmail}>{user.email}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <FaUser style={styles.inputIcon} />
            <input
              type="text"
              placeholder="Customer Name"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <FaMoneyBillWave style={styles.inputIcon} />
            <input
              type="text"
              placeholder="Service"
              value={service}
              onChange={(e) => setService(e.target.value)}
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <FaRupeeSign style={styles.inputIcon} />
            <input
              type="number"
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              style={styles.input}
            />
          </div>

          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            style={styles.select}
          >
            <option value="Cash">Cash</option>
            <option value="Card">Card</option>
            <option value="UPI">UPI</option>
          </select>

          <button type="submit" style={styles.button}>
            Save Payment
          </button>
        </form>
      </div>

     {/* Recorded Payments */}
<div style={styles.recordList}>
  <h3 style={styles.recordTitle}>📜 Recorded Payments</h3>
  <ul style={styles.recordGrid}>
    {payments.map((payment, index) => (
      <li key={payment.id} style={{ ...styles.recordItem, animationDelay: `${index * 0.1}s` }}>
        <div style={styles.workerAvatarContainer}>
          {payment.workerPhotoURL ? (
            <img src={payment.workerPhotoURL} alt="Worker" style={styles.smallAvatar} />
          ) : (
            <FaUserCircle style={styles.iconMedium} />
          )}
        </div>
        <div style={styles.recordContent}>
          <p style={styles.recordName}>{payment.customerName}</p>
          <p style={styles.recordDetails}>
            {payment.service} - <span style={styles.goldText}>₹{payment.amount}</span> ({payment.paymentMethod})
          </p>
        </div>
      </li>
    ))}
  </ul>
</div>
    </div>
  );
};

// Custom Inline Styles (Better than CSS File)
const styles = {
  container: {
    background: "linear-gradient(135deg, #000000, #222222)",
    color: "#FFD700",
  },
  card: {
    background: "rgba(0, 0, 0, 0.7)",
    backdropFilter: "blur(10px)",
    padding: "24px",
    borderRadius: "12px",
    boxShadow: "0px 0px 20px rgba(255, 215, 0, 0.5)",
    border: "1px solid #FFD700",
    maxWidth: "450px",
    width: "100%",
    textAlign: "center",
    marginTop: "80px", // ✅ Added margin top
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#FFD700",
  },
  profile: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    marginBottom: "20px",
  },
  avatar: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    border: "2px solid #FFD700",
  },
  iconLarge: {
    fontSize: "50px",
    color: "#FFD700",
  },
  username: {
    fontSize: "18px",
    fontWeight: "bold",
  },
  userEmail: {
    fontSize: "14px",
    color: "#aaaaaa",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  inputGroup: {
    position: "relative",
  },
  inputIcon: {
    position: "absolute",
    left: "10px",
    top: "50%",
    transform: "translateY(-50%)",
    color: "#FFD700",
  },
  input: {
    width: "100%",
    padding: "12px 40px",
    background: "rgba(0, 0, 0, 0.5)",
    border: "1px solid #FFD700",
    borderRadius: "8px",
    color: "white",
    outline: "none",
  },
  select: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #FFD700",
    background: "black",
    color: "#FFD700",
  },
  button: {
    padding: "12px",
    borderRadius: "8px",
    background: "#FFD700",
    color: "black",
    fontWeight: "bold",
    cursor: "pointer",
    boxShadow: "0px 0px 10px #FFD700",
    transition: "all 0.3s ease",
  },
  buttonHover: {
    background: "#FFEA00",
  },
  recordList: {
    maxWidth: "450px",
    marginTop: "20px",
  },
  recordTitle: {
    fontSize: "20px",
    fontWeight: "bold",
  },
  recordItem: {
    background: "rgba(0, 0, 0, 0.7)",
    padding: "10px",
    borderRadius: "8px",
    marginBottom: "10px",
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  recordList: {
    maxWidth: "600px",
    marginTop: "30px",
    padding: "20px",
    borderRadius: "12px",
    background: "rgba(0, 0, 0, 0.6)",
    border: "1px solid rgba(255, 215, 0, 0.5)",
    backdropFilter: "blur(15px)",
    boxShadow: "0 0 15px rgba(255, 215, 0, 0.3)",
  },
  recordTitle: {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#FFD700",
    textAlign: "center",
    marginBottom: "15px",
  },
  recordGrid: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "12px",
  },
  recordItem: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
    padding: "14px",
    borderRadius: "12px",
    background: "rgba(0, 0, 0, 0.7)",
    boxShadow: "0px 0px 10px rgba(255, 215, 0, 0.3)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    animation: "fadeInUp 0.5s ease forwards",
  },
  recordItemHover: {
    transform: "scale(1.05)",
    boxShadow: "0px 0px 20px rgba(255, 215, 0, 0.5)",
  },
  workerAvatarContainer: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    overflow: "hidden",
    border: "2px solid #FFD700",
  },
  smallAvatar: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  iconMedium: {
    fontSize: "50px",
    color: "#FFD700",
  },
  recordContent: {
    flex: 1,
  },
  recordName: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#FFD700",
  },
  recordDetails: {
    fontSize: "14px",
    color: "#aaa",
  },
  goldText: {
    color: "#FFD700",
    fontWeight: "bold",
  },
};

export default RecordPayment;

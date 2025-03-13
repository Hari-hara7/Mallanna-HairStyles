import { db, auth } from "./firebase";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";

const paymentsCollection = collection(db, "payments");

// Owner's UID (replace with actual UID of the owner)
const OWNER_UID = "vwVT2hRstWUMClMpU34YzA7YEEz1"; // Replace with the actual owner’s Firebase UID

// Function to add a payment
export const addPayment = async (paymentData: {
  customerName: string;
  service: string;
  amount: number;
  paymentMethod: string;
  workerName: string;
  workerEmail: string;
  workerPhotoURL: string | null;
}) => {
  const user = auth.currentUser;
  if (!user) {
    throw new Error("User must be signed in to record payments");
  }

  await addDoc(paymentsCollection, {
    ...paymentData,
    workerId: user.uid, // Storing worker ID
    timestamp: new Date(),
  });
};

// Function to get payments
export const getPayments = async () => {
  const user = auth.currentUser;
  if (!user) {
    throw new Error("User must be signed in to fetch payments");
  }

  let q;

  if (user.uid === OWNER_UID) {
    // Owner can see all payments
    q = query(paymentsCollection);
  } else {
    // Normal users can see only their payments
    q = query(paymentsCollection, where("workerId", "==", user.uid));
  }

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

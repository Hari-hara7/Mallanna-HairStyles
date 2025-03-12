import { db } from "./firebaseConfig";
import { collection, addDoc, getDocs, doc, deleteDoc } from "firebase/firestore";

// Add Product to Firestore
export const addProduct = async (product: { name: string; price: number }) => {
  await addDoc(collection(db, "products"), product);
};

// Fetch Products
export const getProducts = async () => {
  const snapshot = await getDocs(collection(db, "products"));
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// Delete Product
export const deleteProduct = async (id: string) => {
  await deleteDoc(doc(db, "products", id));
};

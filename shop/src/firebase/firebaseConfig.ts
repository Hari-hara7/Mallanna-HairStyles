import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDpzsAWqYzwAwN4qJwhZf9xCe3Opm1ymBM",
    authDomain: "mallanna-hairstyles.firebaseapp.com",
    projectId: "mallanna-hairstyles",
    storageBucket: "mallanna-hairstyles.firebasestorage.app",
    messagingSenderId: "167484689067",
    appId: "1:167484689067:web:3462d5b2b0e6b21e6a85ee",
    measurementId: "G-ZB2Y6QJCZJ"
  };
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

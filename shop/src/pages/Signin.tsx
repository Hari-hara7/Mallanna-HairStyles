import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Logging in:", email, password);
  };

  return (
    <div className="bg-black text-white">
      <Navbar />
      <div className="flex justify-center items-center min-h-screen">
        <form
          onSubmit={handleSubmit}
          className="bg-gray-900 p-8 rounded-lg shadow-lg w-80"
        >
          <h2 className="text-3xl text-gold font-bold text-center">Sign In</h2>
          <input
            type="email"
            placeholder="Email"
            className="mt-4 w-full p-3 rounded-lg bg-gray-800 text-white"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="mt-4 w-full p-3 rounded-lg bg-gray-800 text-white"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="mt-6 w-full bg-gold text-black p-3 rounded-lg hover:bg-red-900 hover:text-white transition"
          >
            Login
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Signin;

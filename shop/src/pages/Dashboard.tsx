import { useAuth } from "../contexts/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login"); // Redirect to Login if not authenticated
    }
  }, [user, navigate]);

  if (!user) return null; // Prevents rendering while redirecting

  return (
    <div className="p-4 flex flex-col items-center">
      <h1 className="text-2xl font-semibold">Welcome, {user.displayName}</h1>
      <img
        src={user.photoURL || ""}
        alt="User"
        className="w-16 h-16 rounded-full mt-2 border border-gray-300"
      />
      <p className="mt-2">Email: {user.email}</p>

      <div className="mt-6 space-y-3 flex flex-col items-center">
        <Link to="/book-appointment" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Book Appointment
        </Link>
        <Link to="/feedback" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Give Feedback
        </Link>
        <Link to="/view-feedback" className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">
          View Feedback
        </Link>
      </div>

      <button
        className="mt-6 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;

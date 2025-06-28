import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";

import BookAppointment from "./pages/BookAppointment";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Signin from "./pages/Signin";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Appointments from "./pages/Appointments";
import Feedback from "./pages/Feedback";
import FeedbackList from "./pages/FeedbackList";
import RecordPayment from "./pages/RecordPayment";
import ViewPayments from "./pages/ViewPayments";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
         
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/login" element={<Login />} />

          {/* Protected Pages (Authenticated Users) */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/feedback-list" element={<FeedbackList />} />
          <Route path="/record-payment" element={<RecordPayment />} />
          <Route path="/view-payments" element={<ViewPayments />} />

        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;

import Navbar from "../components/Navbar";
import AppointmentForm from "../components/AppointmentForm";
import Footer from "../components/Footer";

const BookAppointment = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <div className="flex justify-center items-center min-h-screen">
        <AppointmentForm />
      </div>
      <Footer />
    </div>
  );
};

export default BookAppointment;

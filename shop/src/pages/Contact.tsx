import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <div className="p-8 text-center">
        <h2 className="text-4xl text-gold font-bold">Contact Us</h2>
        <p className="text-lg text-gray-300 mt-4">Feel free to reach out for any inquiries.</p>
        <div className="mt-6 space-y-3">
          <p>📍 Address: Luxury Street, New York, USA</p>
          <p>📞 Phone: +1 234 567 890</p>
          <p>✉️ Email: contact@luxurysalon.com</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;

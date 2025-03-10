import Navbar from "../components/Navbar";
import ServiceCard from "../components/ServiceCard";
import Footer from "../components/Footer";

const Services = () => {
  const services = [
    { title: "Luxury Haircut", description: "Precision styling with premium products." },
    { title: "Spa & Massage", description: "Relaxing massage treatments for total comfort." },
    { title: "Manicure & Pedicure", description: "High-end nail care with gold-standard polish." }
  ];

  return (
    <div className="bg-black text-white">
      <Navbar />
      <div className="p-8 text-center">
        <h2 className="text-4xl text-gold font-bold">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;

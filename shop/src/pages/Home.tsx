import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedSection from "../components/FeaturedSection";
import WhyChooseUs from "../components/WhyChooseUs";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero />
      <FeaturedSection />
      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default Home;

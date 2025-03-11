import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedSection from "../components/FeaturedSection";
import WhyChooseUs from "../components/WhyChooseUs";
import Footer from "../components/Footer";//AboutSection
import AboutSection from "../components/AboutSection";

const Home = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero />
      <AboutSection />
      <FeaturedSection />
      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default Home;

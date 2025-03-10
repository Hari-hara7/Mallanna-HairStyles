import Navbar from "../components/Navbar";
import GalleryGrid from "../components/GalleryGrid";
import Footer from "../components/Footer";

const Gallery = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <GalleryGrid />
      <Footer />
    </div>
  );
};

export default Gallery;

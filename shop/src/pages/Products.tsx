import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

const Products = () => {
  const products = [
    { name: "Luxury Shampoo", price: "29.99" },
    { name: "Gold Infused Conditioner", price: "39.99" },
    { name: "Premium Beard Oil", price: "19.99" }
  ];

  return (
    <div className="bg-black text-white">
      <Navbar />
      <div className="p-8 text-center">
        <h2 className="text-4xl text-gold font-bold">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;

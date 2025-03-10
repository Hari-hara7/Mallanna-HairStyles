interface ProductProps {
    name: string;
    price: string;
  }
  
  const ProductCard = ({ name, price }: ProductProps) => {
    return (
      <div className="bg-black text-white p-4 rounded-lg shadow-lg">
        <h3 className="text-gold text-xl font-bold">{name}</h3>
        <p className="text-gray-300">${price}</p>
      </div>
    );
  };
  
  export default ProductCard;
  
const ProductCard = ({ name, price }: { name: string; price: number }) => (
  <div className="p-4 bg-gray-800 text-white rounded-lg">
    <h2 className="text-lg font-bold">{name}</h2>
    <p>${price}</p>
  </div>
);

export default ProductCard;

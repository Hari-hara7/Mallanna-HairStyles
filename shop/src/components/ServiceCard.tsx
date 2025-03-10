interface ServiceProps {
    title: string;
    description: string;
  }
  
  const ServiceCard = ({ title, description }: ServiceProps) => {
    return (
      <div className="bg-black text-white p-4 rounded-lg shadow-lg">
        <h3 className="text-gold text-xl font-bold">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    );
  };
  
  export default ServiceCard;
  
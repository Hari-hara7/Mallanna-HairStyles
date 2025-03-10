interface TeamProps {
    name: string;
    role: string;
    image: string;
  }
  
  const TeamCard = ({ name, role, image }: TeamProps) => {
    return (
      <div className="bg-black text-white p-4 rounded-lg shadow-lg">
        <img src={image} alt={name} className="w-32 h-32 mx-auto rounded-full" />
        <h3 className="text-gold text-xl font-bold mt-3">{name}</h3>
        <p className="text-gray-300">{role}</p>
      </div>
    );
  };
  
  export default TeamCard;
  
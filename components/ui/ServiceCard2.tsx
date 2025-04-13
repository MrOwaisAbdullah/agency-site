interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <div className="bg-[#1a1c20] p-6 rounded-lg border border-gray-800 hover:border-accent/30 transition-all duration-300 h-full">
      <div className="text-accent mb-4">
        <Icon size={28} />
      </div>
      <h3 className="text-xl font-bold mb-3 font-montserrat text-white">
        {title}
      </h3>
      <p className="text-gray-400 font-poppins">{description}</p>
    </div>
  );
};

export default ServiceCard;
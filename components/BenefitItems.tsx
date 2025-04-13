interface BenefitItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function BenefitItem({ icon, title, description }: BenefitItemProps) {
  return (
    <div className="flex gap-4">
      <div className="text-accent mt-1">{icon}</div>
      <div>
        <h3 className="text-xl font-semibold mb-2 font-montserrat">{title}</h3>
        <p className="text-gray-400 font-poppins">{description}</p>
      </div>
    </div>
  );
}

export default BenefitItem;
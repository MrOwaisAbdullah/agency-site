import { ArrowRight } from "lucide-react";
import Link from "next/link";

export interface CtaCardProps {
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
  }
  
  function CtaCard({ title, description, buttonText, buttonLink }: CtaCardProps) {
    return (
      <div className="mt-8 pt-8 border-t border-gray-800">
        <h4 className="text-xl font-bold mb-4 font-montserrat">{title}</h4>
        <p className="text-gray-400 mb-6 font-poppins">{description}</p>
        <Link href={buttonLink}>
          <button className="flex items-center gap-2 bg-gradient-to-br from-blue-900 via-accent to-blue-700 hover:from-blue-800 py-2 px-4 rounded-full md:text-md transition-all duration-300 transform shadow-lg shadow-accent/20">
            {buttonText} <ArrowRight size={16} />
          </button>
        </Link>
      </div>
    );
  }

  export default CtaCard;
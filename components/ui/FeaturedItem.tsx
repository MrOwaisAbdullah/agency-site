import { CheckCircle } from "lucide-react";

const FeatureItem = ({ title }: { title: string }) => {
    return (
      <div className="flex items-center space-x-3 mb-3">
        <div className="text-accent">
          <CheckCircle size={18} />
        </div>
        <span className="text-gray-300 font-poppins">{title}</span>
      </div>
    );
  };

  export default FeatureItem;
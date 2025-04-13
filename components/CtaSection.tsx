import Link from "next/link";
import FadeInSection from "./FadeInSection"

interface CtaSectionProps {
  title: string;
  paragraph: string;
  buttonText: string;
  buttonLink: string;
}

export default function CtaSection({
  title,
  paragraph,
  buttonText,
  buttonLink,
}: CtaSectionProps) {
  return (
    <section className="py-20 relative overflow-hidden bg-[#131519] rounded-t-[50px] border-t border-t-gray-600">
      {/* Grid Background Pattern */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(58, 105, 255, 0.1) 1px, transparent 1px), 
                            linear-gradient(to bottom, rgba(58, 105, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      ></div>

      {/* Glowing Elements with brand colors */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/15 blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-blue-900/15 blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <FadeInSection>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-montserrat">
              {title}
            </h2>
            <p className="text-gray-400 mb-10 text-lg font-poppins">
              {paragraph}
            </p>
            <Link href={buttonLink}>
              <button className="font-poppins bg-gradient-to-br from-blue-900 via-accent to-blue-700 hover:from-blue-800 py-3 px-8 rounded-full font-medium md:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-accent/20">
                {buttonText}
              </button>
            </Link>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
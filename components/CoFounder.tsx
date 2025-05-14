import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import FadeInSection from "./FadeInSection";

interface CoFounder {
  name: string;
  position: string;
  whatsapp: string;
  image: string;
}

const coFounders: CoFounder[] = [
  {
    name: "Umer Farooq",
    position: "Co-Founder",
    whatsapp: "+92 320 2019118",
    image: "/assets/umer-farooq.png",
  },
  {
    name: "Bint e Wali",
    position: "Co-Founder",
    whatsapp: "+923343473628",
    image: "",
  },
];

const CoFounders = () => {
  return (
    <FadeInSection>
      <div className="max-w-7xl mx-auto py-16 px-5">
        <div className="text-center mb-12">
          <h3 className="text-base text-accent font-medium sm:text-lg">
            Leadership
          </h3>
          <h2 className="sm:text-3xl text-2xl text-text font-medium title-font mb-4">
            Meet Our Co-Founders
          </h2>
          <p className="text-mutedforeground max-w-2xl mx-auto">
            The visionaries behind Burraq Digits who are passionate about
            helping brands grow and succeed in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {coFounders.map((founder, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-background shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row items-center p-6">
                <div className="mb-6 md:mb-0 md:mr-6 relative">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-accent/30 group-hover:border-accent/50 transition-all duration-300">
                    <Image
                      src={founder.image || "/assets/person-placeholder.jpeg"}
                      alt={founder.name}
                      width={128}
                      height={128}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <a
                    href={`https://wa.me/${founder.whatsapp.replace(
                      /\s+/g,
                      ""
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute flex justify-center items-center bottom-2 right-0 bg-gradient-to-br from-accent/80 via-accent to-accent/90 rounded-full p-2 shadow-lg transform group-hover:scale-110 transition-all duration-300"
                  >
                    <FaWhatsapp className="text-text text-xl" />
                  </a>
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-semibold text-text">
                    {founder.name}
                  </h3>
                  <p className="text-accent mb-3">{founder.position}</p>
                  <a
                    href={`https://wa.me/${founder.whatsapp.replace(
                      /\s+/g,
                      ""
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-mutedforeground hover:text-accent transition-colors duration-300"
                  >
                    <FaWhatsapp className="text-accent" />
                    <span className="text-gray-500 hover:text-accent">{founder.whatsapp}</span>
                  </a>
                </div>
              </div>
              <div className="h-2 bg-gradient-to-r from-accent/80 via-accent to-accent/90"></div>
            </div>
          ))}
        </div>
      </div>
    </FadeInSection>
  );
};

export default CoFounders;

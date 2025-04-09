"use client";
import hero from "../public/assets/hero.png";
import Image from "next/image";
import { Typewriter } from "nextjs-simple-typewriter";
import Link from "next/link";
import { HeroHighlight } from "./ui/HeroHighlight";
import { AnimatedTooltip } from "./ui/AnimatedTooltip";

const Hero = () => {
  return (
    <section className="relative text-gray-600 overflow-hidden z-0 -mt-24">
      {/* Modern gradient effects and decorative elements */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Primary gradient sphere - more sophisticated gradient */}
        <div className="absolute top-[15%] right-[10%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-accent/10 via-blue-600/5 to-transparent blur-[120px] opacity-80"></div>

        {/* Secondary gradient - more subtle and layered */}
        <div className="absolute bottom-[10%] left-[5%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-blue-900/5 via-accent/10 to-transparent blur-[100px] opacity-70"></div>

        {/* Accent highlight - smaller, more focused */}
        <div className="absolute top-[40%] right-[30%] w-[300px] h-[300px] rounded-full bg-accent/5 blur-[50px] opacity-60"></div>

        {/* Subtle dot pattern overlay */}
        <div className="absolute inset-0 bg-dot-thick bg-accent/[0.03] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        {/* Modern geometric elements */}
        <div className="absolute top-[20%] left-[15%] w-32 h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent rotate-[30deg]"></div>
        <div className="absolute bottom-[30%] right-[20%] w-32 h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent rotate-[-30deg]"></div>
        <div className="absolute top-[60%] left-[25%] w-16 h-16 border border-accent/10 rounded-full"></div>
        <div className="absolute top-[25%] right-[15%] w-24 h-24 border border-accent/5 rounded-full"></div>

        {/* Subtle grid lines */}
        <div className="absolute inset-0 [background-image:linear-gradient(to_right,#3a69ff10_1px,transparent_1px),linear-gradient(to_bottom,#3a69ff10_1px,transparent_1px)] [background-size:40px_40px] opacity-20"></div>
      </div>

      <HeroHighlight>
        <div className="max-w-7xl mx-auto flex px-5 pt-40 py-10 md:flex-row flex-col items-center">
          <div className="sm:entrance-left lg:flex-grow md:w-1/2 lg:pr-16 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center lg:w-3/5">
            <h2 className="title-font sm:text-lg text-base font-semibold mb-1 font-montserrat capitalize text-text">
              Not just another digital agency.
            </h2>
            <div className="">
              <h1 className="sm:text-5xl text-4xl mb-4 font-montserrat font-bold text-text ">
                We Build
                <span className="text-accent"> Brands & Businesses</span> That
                <br />
                <span className="">
                  <Typewriter
                    words={[
                      " Stand Out.",
                      " Sell More.",
                      " Scale Faster.",
                      " Shine Brighter.",
                      " Win Big.",
                      " Drive Sales.",
                      " Grow Fast.",
                    ]}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={140}
                    deleteSpeed={100}
                    delaySpeed={1200}
                  />
                </span>
              </h1>
            </div>
            <p className="mb-8 leading-relaxed font-poppins text-gray-400">
              More reach. More clicks. More trust. We craft the kind of presence
              that makes your brand look sharp, sound bold, and feel impossible
              to ignore — online and offline.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-2">
              <Link href="#projects" className="scroll-smooth duration-300">
                <button className="group flex items-center border-2 border-transparent hover:border-white/40 text-white py-2 bg-black/30 rounded-full font-medium text-lg px-8">
                  See Our Work
                </button>
              </Link>
              <Link href="#contact" className="scroll-smooth duration-300">
                <button className="group flex items-center border-2 border-transparent hover:border-black/50 text-white bg-gradient-to-br from-blue-900 via-accent to-blue-700 hover:from-blue-950 py-2 hover:bg-blue-500 hover:bg-gradient-to-tr rounded-full font-medium text-lg px-8">
                  Get a Free Consultation
                </button>
              </Link>
            </div>
          </div>

          <div className="lg:max-w-full md:w-2/5 sm:pt-0 md:ml-0 relative">
            {/* Image highlight effects */}
            <div className="absolute -z-10 inset-0 blur-[60px] bg-gradient-to-tr from-accent/20 via-blue-600/10 to-transparent rounded-full scale-90 opacity-70 "></div>

            {/* Decorative elements around image */}
            <div className="absolute -top-5 -right-5 w-20 h-20 border border-accent/10 rounded-full"></div>
            <div className="absolute -bottom-5 -left-5 w-16 h-16 border border-accent/10 rounded-full"></div>
            {/* Small decorative elements around the image - Increased opacity and size */}
            <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-accent/20 rounded-md rotate-45 animation-delay-3000 animate-spin-slow z-50"></div>

            {/* Subtle accent lines */}
            <div className="absolute top-1/2 -left-10 w-20 h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>
            <div className="absolute top-1/2 -right-10 w-20 h-[1px] bg-gradient-to-l from-transparent via-accent/30 to-transparent"></div>

            <div className="flex flex-row justify-center items-center relative z-10">
              <AnimatedTooltip
                tooltipTitle="BURRAQ DIGITS"
                tooltipDescription="Step Together Digitally"
              >
                <div className="relative">
                  <Image
                    src={hero || "/placeholder.svg"}
                    className="object-cover object-center w-full h-full relative z-10 opacity-80"
                    width={800}
                    height={600}
                    priority
                    alt="Burraq Digits"
                  />
                </div>
              </AnimatedTooltip>
            </div>
          </div>
        </div>
        <div className="h-px bg-gray-950 opacity-80 justify-center flex m-auto mt-10"></div>
      </HeroHighlight>
    </section>
  );
};

export default Hero;

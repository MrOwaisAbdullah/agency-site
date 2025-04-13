"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import FadeInSection from "./FadeInSection";

interface AnimatedCtaProps {
  subheading: string;
  heading: string;
  headingHighlight: string;
  heading2: string;
  paragraph: string;
  buttonText: string;
  buttonLink: string;
}

export default function ServiceHeroSection({
  subheading,
  heading,
  headingHighlight,
  heading2,
  paragraph,
  buttonText,
  buttonLink,
}: AnimatedCtaProps) {
  return (
    <section className="relative overflow-hidden md:pt-24 pt-8 pb-20 rounded-b-[50px] border-b border-b-gray-600">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          className="absolute bottom-[10%] left-[5%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-purple-900/20 via-accent/15 to-transparent blur-[80px] opacity-70"
          initial={{ x: 0, y: 0, scale: 1 }}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 1,
          }}
        ></motion.div>

        {/* Accent highlight with more visible pulse animation */}
        <motion.div
          className="absolute animate-float top-[40%] right-[30%] w-[300px] h-[300px] rounded-full bg-purple-500/15 blur-[70px]"
          initial={{ opacity: 0.5, scale: 1 }}
          animate={{
            opacity: [0.5, 0.8, 0.5],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 2,
          }}
        ></motion.div>

        {/* Animated decorative line 1 - more visible */}
        <motion.div
          className="absolute top-[20%] left-[15%] w-40 h-[3px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"
          initial={{ rotate: 30, scale: 1, opacity: 0.5 }}
          animate={{
            rotate: [30, 45, 30],
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        ></motion.div>

        {/* Animated decorative line 2 - more visible */}
        <motion.div
          className="absolute bottom-[30%] right-[20%] w-40 h-[3px] bg-gradient-to-r from-transparent via-accent/50 to-transparent"
          initial={{ rotate: -30, scale: 1, opacity: 0.5 }}
          animate={{
            rotate: [-30, -45, -30],
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 9,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 1,
          }}
        ></motion.div>

        {/* Animated circle 1 - larger and more visible */}
        <motion.div
          className="absolute top-[60%] left-[25%] w-20 h-20 border-2 border-purple-500/30 rounded-full"
          initial={{ scale: 1, rotate: 0, opacity: 0.3 }}
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            ease: "linear",
          }}
        ></motion.div>

        {/* Animated circle 2 - larger and more visible */}
        <motion.div
          className="absolute top-[25%] right-[15%] w-28 h-28 border-2 border-accent/25 rounded-full"
          initial={{ scale: 1, rotate: 0, opacity: 0.25 }}
          animate={{
            scale: [1, 0.8, 1],
            rotate: [0, -180, -360],
            opacity: [0.25, 0.4, 0.25],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            ease: "linear",
            delay: 2,
          }}
        ></motion.div>

        {/* Additional floating elements - larger and more visible */}
        <motion.div
          className="absolute top-[35%] left-[40%] w-10 h-10 bg-purple-500/20 rounded-md"
          initial={{ y: 0, rotate: 0, opacity: 0.2 }}
          animate={{
            y: [0, -25, 0],
            rotate: [0, 45, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        ></motion.div>

        <motion.div
          className="absolute bottom-[40%] right-[40%] w-12 h-12 border-2 border-accent/25 rounded-full"
          initial={{ y: 0, scale: 1, opacity: 0.25 }}
          animate={{
            y: [0, 25, 0],
            scale: [1, 1.2, 1],
            opacity: [0.25, 0.45, 0.25],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 1,
          }}
        ></motion.div>
      </div>

      <div className="px-4 z-10 relative">
        <FadeInSection>
          <div className="text-center mb-8">
            <span className="text-accent uppercase tracking-wider text-sm font-semibold font-montserrat">
              {subheading}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl md:leading-tight font-bold text-center mb-6 font-montserrat">
            {heading} <span className="text-accent">{headingHighlight}</span>
            <br />
            {heading2}
          </h1>
          <p className="text-gray-400 text-center max-w-3xl mx-auto mb-10 text-lg font-poppins">
            {paragraph}
          </p>
          <div className="flex justify-center">
            <Link href={buttonLink}>
              <button className="font-poppins bg-gradient-to-br from-blue-900 via-accent to-blue-700 hover:from-blue-950 py-3 px-8 rounded-full font-medium md:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-accent/20">
                {buttonText}
              </button>
            </Link>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}

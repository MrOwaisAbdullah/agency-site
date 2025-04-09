"use client";

import Image from "next/image";

const logos = [
  "/assets/logo.png",
  "/assets/logo1.png",
  "/assets/logo2.png",
];

export default function LogoSlider() {
  return (
    <section className="relative py-12 bg-background will-change-transform">
      <div className="max-w-7xl mx-auto">
        <div className="overflow-hidden">
          <div className="w-max flex flex-nowrap slider">
            {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
              <Image
                key={index}
                src={logo}
                alt={`Client logo ${(index % logos.length) + 1}`}
                width={300}
                height={150}
                className="mx-6 h-16 w-auto object-contain grayscale transition-all 
                  hover:grayscale-0 dark:opacity-80 dark:hover:opacity-100"
                onError={() => console.error(`Failed to load image: ${logo}`)}
              />
            ))}
          </div>
        </div>

        {/* Gradient fade edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
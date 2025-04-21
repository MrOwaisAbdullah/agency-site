"use client";

import Image from "next/image";

const logos = [
  "/assets/clients/al-hafiz.png",
  "/assets/clients/ac-wala.png",
  "/assets/clients/dr-mohiuddin.png",
  "/assets/clients/hawwa.png",
  "/assets/clients/maarij.png",
  "/assets/clients/malabis.png",
  "/assets/clients/slc.png",
  "/assets/clients/tech-academy.png",

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
                className="mx-6 h-20 w-auto object-contain grayscale transition-all 
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
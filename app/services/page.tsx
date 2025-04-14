import React from "react";
import Services from "@/components/Services";
import { Metadata } from "next";
import CtaSection from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Our Services | Burraq Digits",
  description:
    "Explore our comprehensive digital services including web development, digital marketing, UI/UX design, app development, SEO, and more.",
  openGraph: {
    title: "Our Services | Burraq Digits",
    description:
      "Explore our comprehensive digital services including web development, digital marketing, UI/UX design, app development, SEO, and more.",
    url: "https://burraqdigits.com/services",
  },
  alternates: {
    canonical: "/services",
  },
};

const services = () => {
  return (
    <>
      <Services />
      <div className="h-44"></div>
      {/* CTA Section */}
      <CtaSection
        title="Elevate Your Online Presence with Burraq Digits"
        paragraph="Are you ready to captivate your audience with an exceptional online presence? Contact Burraq Digits today for a free consultation and discover how our services can help you!"
        buttonText="Contact Us"
        buttonLink="/contact"
      />
    </>
  );
};

export default services;

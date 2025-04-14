import React from "react";
import About from "@/components/About";
import CtaSection from "@/components/CtaSection";
import { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "About Us | Burraq Digits",
  description:
    "Learn about Burraq Digits - your trusted partner in digital transformation. Discover our mission, vision, and the team behind our success.",
  openGraph: {
    title: "About Us | Burraq Digits",
    description:
      "Learn about Burraq Digits - your trusted partner in digital transformation. Discover our mission, vision, and the team behind our success.",
    url: "https://burraqdigits.com/about",
  },
  alternates: {
    canonical: "/about",
  },
};

const about = () => {
  return (
    <>
      <About />
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

export default about;

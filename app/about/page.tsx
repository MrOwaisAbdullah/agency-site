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
        title="Let&apos;s Make Your Brand Look Good - and Work Even Better"
        paragraph="Whether you need strategy, design, development, or content — we help businesses show up online with clarity and confidence. Ready to take the next step?"
        buttonText="LET&apos;S TALK"
        buttonLink="/contact"
      />
    </>
  );
};

export default about;

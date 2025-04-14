import React from "react";
import ProjectsTab from "@/components/ProjectsTab";
import CtaSection from "@/components/CtaSection";
import { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Our Projects | Burraq Digits",
  description:
    "Explore our portfolio of successful digital projects. See how we've helped businesses transform their online presence with our expertise.",
  openGraph: {
    title: "Our Projects | Burraq Digits",
    description:
      "Explore our portfolio of successful digital projects. See how we've helped businesses transform their online presence with our expertise.",
    url: "https://burraqdigits.com/projects",
  },
  alternates: {
    canonical: "/projects",
  },
};

const projects = () => {
  return (
    <>
      <ProjectsTab />
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

export default projects;

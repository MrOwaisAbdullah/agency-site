import React from "react";
import ProjectsTab from "@/components/ProjectsTab";
import CtaSection from "@/components/CtaSection";
import { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Our Projects & Portfolio",
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
        title="Let&apos;s Make Your Brand Look Good - and Work Even Better"
        paragraph="Whether you need strategy, design, development, or content — we help businesses show up online with clarity and confidence. Ready to take the next step?"
        buttonText="LET&apos;S TALK"
        buttonLink="/contact"
      />
    </>
  );
};

export default projects;

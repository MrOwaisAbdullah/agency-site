import CtaSection from "@/components/CtaSection";
import Services from "@/components/Services";
import React from "react";

const projects = () => {
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

export default projects;

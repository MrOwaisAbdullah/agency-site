import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Burraq Digits. We're here to help you transform your digital presence. Contact us for a free consultation.",
  openGraph: {
    title: "Contact Us | Burraq Digits",
    description:
      "Get in touch with Burraq Digits. We're here to help you transform your digital presence. Contact us for a free consultation.",
    url: "https://burraqdigits.com/contact",
  },
  alternates: {
    canonical: "/contact",
  },
};

const contact = () => {
  return <Contact />;
};

export default contact;

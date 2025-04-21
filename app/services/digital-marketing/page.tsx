import DigitalMarketingService from "@/components/services/DigitalMarketing";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing Services",
  description:
    "Comprehensive digital marketing solutions to grow your online presence. SEO, social media, content marketing, and more.",
  openGraph: {
    title: "Digital Marketing Services | Burraq Digits",
    description:
      "Comprehensive digital marketing solutions to grow your online presence. SEO, social media, content marketing, and more.",
    url: "https://burraqdigits.com/services/digital-marketing",
  },
  alternates: {
    canonical: "/services/digital-marketing",
  },
};

export const dynamic = "force-static";

const DigitalMarketing = () => {
  return <DigitalMarketingService />;
};

export default DigitalMarketing;

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
    images: [
      {
        url: "/assets/services/digital-marketing.jpg",
        width: 1200,
        height: 630,
        alt: "Digital Marketing Services - Burraq Digits",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Services | Burraq Digits",
    description:
      "Comprehensive digital marketing solutions to grow your online presence. SEO, social media, content marketing, and more.",
    images: ["/assets/services/digital-marketing.jpg"],
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

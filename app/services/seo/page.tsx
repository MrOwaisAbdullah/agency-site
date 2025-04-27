import SEOService from "@/components/services/Seo";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Services",
  description:
    "Boost your website's visibility and rankings with our professional SEO services.",
  openGraph: {
    title: "SEO Services | Burraq Digits",
    description:
      "Boost your website's visibility and rankings with our professional SEO services.",
    url: "https://burraqdigits.com/services/seo",
    images: [
      {
        url: "/assets/services/seo.jpg",
        width: 1200,
        height: 630,
        alt: "SEO Services - Burraq Digits",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Services | Burraq Digits",
    description:
      "Boost your website's visibility and rankings with our professional SEO services.",
    images: ["/assets/services/seo.jpg"],
  },
  alternates: {
    canonical: "/services/seo",
  },
};

export const dynamic = "force-static";

const seo = () => {
  return <SEOService />;
};

export default seo;

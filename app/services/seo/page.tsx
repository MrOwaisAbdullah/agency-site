import SEOService from "@/components/services/Seo";
import React from "react";

export const metadata = {
  title: "Search Engine Optimization Service | Burraq Digits",
  description:
    "Burraq Digits is a leading SEO service provider, offering tailored strategies to enhance your online visibility and drive organic traffic. Our expert team specializes in on-page and off-page optimization, keyword research, and content marketing to ensure your website ranks higher on search engines. Partner with us for effective SEO solutions that deliver results.",
  keywords:
    "SEO, Search Engine Optimization, SEO Services, Digital Marketing, Burraq Digits",
  openGraph: {
    title: "Search Engine Optimization Service | Burraq Digits",
    description:
      "Burraq Digits is a leading SEO service provider, offering tailored strategies to enhance your online visibility and drive organic traffic. Our expert team specializes in on-page and off-page optimization, keyword research, and content marketing to ensure your website ranks higher on search engines. Partner with us for effective SEO solutions that deliver results.",
    url: "https://burraqdigits.com/services/seo",
    siteName: "Burraq Digits",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Burraq Digits SEO Service",
      },
    ],
  },
};

export const dynamic = "force-static";

const seo = () => {
  return <SEOService />;
};

export default seo;

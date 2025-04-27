import AppDevelopmentService from "@/components/services/AppDevelopment";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "App Development Services",
  description:
    "Custom mobile app development services to bring your ideas to life with cutting-edge technology and user-centric design.",
  openGraph: {
    title: "App Development Services | Burraq Digits",
    description:
      "Custom mobile app development services to bring your ideas to life with cutting-edge technology and user-centric design.",
    url: "https://burraqdigits.com/services/app-development",
    images: [
      {
        url: "/assets/services/app-development.jpg",
        width: 1200,
        height: 630,
        alt: "App Development Services - Burraq Digits",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "App Development Services | Burraq Digits",
    description:
      "Custom mobile app development services to bring your ideas to life with cutting-edge technology and user-centric design.",
    images: ["/assets/services/app-development.jpg"],
  },
  alternates: {
    canonical: "/services/app-development",
  },
};

export const dynamic = "force-static";

const appDevelopment = () => {
  return <AppDevelopmentService />;
};

export default appDevelopment;

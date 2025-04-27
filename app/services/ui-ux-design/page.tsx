import UiUxDesignService from "@/components/services/UiDesign";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UI/UX Design Services",
  description:
    "Create intuitive and engaging user experiences with our professional UI/UX design services.",
  openGraph: {
    title: "UI/UX Design Services | Burraq Digits",
    description:
      "Create intuitive and engaging user experiences with our professional UI/UX design services.",
    url: "https://burraqdigits.com/services/ui-ux-design",
    images: [
      {
        url: "/assets/services/ui-ux-design.jpg",
        width: 1200,
        height: 630,
        alt: "UI/UX Design Services - Burraq Digits",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UI/UX Design Services | Burraq Digits",
    description:
      "Create intuitive and engaging user experiences with our professional UI/UX design services.",
    images: ["/assets/services/ui-ux-design.jpg"],
  },
  alternates: {
    canonical: "/services/ui-ux-design",
  },
};

export const dynamic = "force-static";

const uiUxDesign = () => {
  return <UiUxDesignService />;
};

export default uiUxDesign;

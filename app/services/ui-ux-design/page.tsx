import UiUxDesignService from "@/components/services/UiDesign";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UI/UX Design Services | Burraq Digits",
  description:
    "Expert UI/UX design services to create intuitive, user-friendly interfaces that enhance user experience and drive engagement.",
  openGraph: {
    title: "UI/UX Design Services | Burraq Digits",
    description:
      "Expert UI/UX design services to create intuitive, user-friendly interfaces that enhance user experience and drive engagement.",
    url: "https://burraqdigits.com/services/ui-ux-design",
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

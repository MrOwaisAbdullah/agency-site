import UiUxDesignService from "@/components/services/UiDesign";
import React from "react";

export const metadata = {
  title: "UI UX Design | Burraq Digits",
  description:
    "Burraq Digits is a leading UI/UX design agency that specializes in creating user-friendly and visually appealing interfaces for web and mobile applications. Our team of experienced designers focuses on delivering exceptional user experiences through innovative design solutions.",
};

export const dynamic = "force-static";

const uiUxDesign = () => {
  return <UiUxDesignService />;
};

export default uiUxDesign;

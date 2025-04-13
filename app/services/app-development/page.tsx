import AppDevelopmentService from "@/components/services/AppDevelopment";
import React from "react";

export const metadata = {
  title: "App Development Service | Burraq Digits",
  description:
    "Burraq Digits is a leading app development agency that specializes in creating innovative and user-friendly mobile applications for businesses of all sizes. Our team of experienced developers works closely with clients to understand their unique requirements and deliver custom app solutions that drive engagement and growth.",
  keywords: "App Development, Mobile Apps, Custom Software, Burraq Digits",
};

export const dynamic = "force-static";

const appDevelopment = () => {
  return <AppDevelopmentService />;
};

export default appDevelopment;

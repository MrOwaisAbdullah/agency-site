import AppDevelopmentService from "@/components/services/AppDevelopment";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "App Development Services | Burraq Digits",
  description:
    "Custom mobile and web application development services. We build scalable, secure, and user-friendly applications for your business needs.",
  openGraph: {
    title: "App Development Services | Burraq Digits",
    description:
      "Custom mobile and web application development services. We build scalable, secure, and user-friendly applications for your business needs.",
    url: "https://burraqdigits.com/services/app-development",
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

import LogoDesignService from "@/components/services/LogoDesign";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Logo Design Services | Burraq Digits",
  description:
    "Professional logo design services to create unique, memorable brand identities that represent your business values and vision.",
  openGraph: {
    title: "Logo Design Services | Burraq Digits",
    description:
      "Professional logo design services to create unique, memorable brand identities that represent your business values and vision.",
    url: "https://burraqdigits.com/services/logo-design",
  },
  alternates: {
    canonical: "/services/logo-design",
  },
};

export const dynamic = "force-static";

const logoDesign = () => {
  return <LogoDesignService />;
};

export default logoDesign;

import React from "react";
import { Metadata } from "next";
import OutdoorMarketingService from "@/components/services/OutdoorMarketing";

export const metadata: Metadata = {
  title: "Outdoor Marketing Services",
  description:
    "Professional outdoor marketing services to enhance your brand visibility and reach your target audience effectively.",
  openGraph: {
    title: "Outdoor Marketing Services | Burraq Digits",
    description:
      "Professional outdoor marketing services to enhance your brand visibility and reach your target audience effectively.",
    url: "https://burraqdigits.com/services/outdoor-marketing",
  },
  alternates: {
    canonical: "/services/outdoor-marketing",
  },
};

export const dynamic = "force-static";

const OutdoorMarketing = () => {
  return <OutdoorMarketingService />;
};

export default OutdoorMarketing;

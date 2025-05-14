import React from "react";
import { Metadata } from "next";
import OutdoorMarketingService from "@/components/services/OutdoorMarketing";

export const metadata: Metadata = {
  title: "Outdoor Marketing Services in Pakistan",
  description:
    "Professional outdoor marketing services to enhance your brand visibility and reach your target audience effectively.",
  openGraph: {
    title: "Outdoor Marketing Services | Burraq Digits",
    description:
      "Professional outdoor marketing services to enhance your brand visibility and reach your target audience effectively.",
    url: "https://burraqdigits.com/services/outdoor-marketing-in-pakistan",
    images: [
      {
        url: "/assets/services/outdoor-marketing.jpg",
        width: 1200,
        height: 630,
        alt: "Outdoor Marketing Services in Pakistan- Burraq Digits",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Outdoor Marketing Services in Pakistan | Burraq Digits",
    description:
      "Professional outdoor marketing services to enhance your brand visibility and reach your target audience effectively.",
    images: ["/assets/services/outdoor-marketing.jpg"],
  },
  alternates: {
    canonical: "/services/outdoor-marketing-in-pakistan",
  },
};

export const dynamic = "force-static";

const OutdoorMarketing = () => {
  return <OutdoorMarketingService />;
};

export default OutdoorMarketing;

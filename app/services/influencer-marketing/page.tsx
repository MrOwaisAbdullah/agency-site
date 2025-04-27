import React from "react";
import InfluencerMarketingService from "@/components/services/InfluencerMarketing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Influencer Marketing Services",
  description:
    "Strategic influencer marketing solutions to amplify your brand reach and engagement through authentic partnerships.",
  openGraph: {
    title: "Influencer Marketing Services | Burraq Digits",
    description:
      "Strategic influencer marketing solutions to amplify your brand reach and engagement through authentic partnerships.",
    url: "https://burraqdigits.com/services/influencer-marketing",
    images: [
      {
        url: "/assets/services/influencer-marketing.jpg",
        width: 1200,
        height: 630,
        alt: "Influencer Marketing Services - Burraq Digits",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Influencer Marketing Services | Burraq Digits",
    description:
      "Strategic influencer marketing solutions to amplify your brand reach and engagement through authentic partnerships.",
    images: ["/assets/services/influencer-marketing.jpg"],
  },
  alternates: {
    canonical: "/services/influencer-marketing",
  },
};

export const dynamic = "force-static";

const influencerMarketing = () => {
  return <InfluencerMarketingService />;
};

export default influencerMarketing;

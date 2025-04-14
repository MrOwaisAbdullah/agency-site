import React from "react";
import InfluencerMarketingService from "@/components/services/InfluencerMarketing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Influencer Marketing Services | Burraq Digits",
  description:
    "Strategic influencer marketing services to connect your brand with the right audience through authentic partnerships and campaigns.",
  keywords:
    "Influencer Marketing, Social Media, Brand Promotion, Burraq Digits",
  openGraph: {
    title: "Influencer Marketing Services | Burraq Digits",
    description:
      "Strategic influencer marketing services to connect your brand with the right audience through authentic partnerships and campaigns.",
    url: "https://burraqdigits.com/services/influencer-marketing",
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

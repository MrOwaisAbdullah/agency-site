import DigitalMarketingService from "@/components/services/DigitalMarketing";
import React from "react";

export const metadata = {
  title: "Digital Marketing Service| Burraq Digits",
  description:
    "Professional digital marketing services to boost your online presence, drive traffic, and increase conversions for your business.",
};

export const dynamic = "force-static";

const DigitalMarketing = () => {
  return <DigitalMarketingService />;
};

export default DigitalMarketing;

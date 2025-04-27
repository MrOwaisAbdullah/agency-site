import EventsManagementService from "@/components/services/EventsManagement";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events Management Services",
  description:
    "Professional events planning and management services to create memorable experiences for your brand and audience.",
  openGraph: {
    title: "Events Management Services | Burraq Digits",
    description:
      "Professional events planning and management services to create memorable experiences for your brand and audience.",
    url: "https://burraqdigits.com/services/events-management",
    images: [
      {
        url: "/assets/services/events-management.jpg",
        width: 1200,
        height: 630,
        alt: "Events Management Services - Burraq Digits",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Events Management Services | Burraq Digits",
    description:
      "Professional events planning and management services to create memorable experiences for your brand and audience.",
    images: ["/assets/services/events-management.jpg"],
  },
  alternates: {
    canonical: "/services/events-management",
  },
};

export const dynamic = "force-static";

const eventsManagement = () => {
  return <EventsManagementService />;
};

export default eventsManagement;

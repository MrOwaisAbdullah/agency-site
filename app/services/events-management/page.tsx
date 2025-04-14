import EventsManagementService from "@/components/services/EventsManagement";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events Management Services | Burraq Digits",
  description:
    "Professional event management services for digital and physical events. We handle planning, execution, and promotion to ensure successful events.",
  openGraph: {
    title: "Events Management Services | Burraq Digits",
    description:
      "Professional event management services for digital and physical events. We handle planning, execution, and promotion to ensure successful events.",
    url: "https://burraqdigits.com/services/events-management",
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

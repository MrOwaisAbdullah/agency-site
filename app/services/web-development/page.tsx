import WebDevelopmentService from "@/components/services/WebDevelopment";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Development Services",
  description:
    "Professional web development services to create modern, fast, and responsive websites for your business.",
  openGraph: {
    title: "Web Development Services | Burraq Digits",
    description:
      "Professional web development services to create modern, fast, and responsive websites for your business.",
    url: "https://burraqdigits.com/services/web-development",
    images: [
      {
        url: "/assets/services/web-development.jpg",
        width: 1200,
        height: 630,
        alt: "Web Development Services - Burraq Digits",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development Services | Burraq Digits",
    description:
      "Professional web development services to create modern, fast, and responsive websites for your business.",
    images: ["/assets/services/web-development.jpg"],
  },
  alternates: {
    canonical: "/services/web-development",
  },
};

export const dynamic = "force-static";

export default function WebDevelopmentPage() {
  return <WebDevelopmentService />;
}

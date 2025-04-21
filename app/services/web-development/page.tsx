import WebDevelopmentService from "@/components/services/WebDevelopment";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Development Services",
  description:
  "Professional web design and development services to create stunning, user-friendly websites that drive results for your business.",
  openGraph: {
    title: "Web Development Services | Burraq Digits",
    description:
      "Professional web development services for businesses. We create responsive, scalable, and high-performance websites using modern technologies.",
    url: "https://burraqdigits.com/services/web-development",
  },
  alternates: {
    canonical: "/services/web-development",
  },
};

export const dynamic = "force-static";

export default function WebDevelopmentPage() {
  return <WebDevelopmentService />;
}

import WebDevelopmentService from "@/components/services/WebDevelopment"

export const metadata = {
  title: "Web Design & Development Services | Burraq Digits",
  description:
    "Professional web design and development services to create stunning, user-friendly websites that drive results for your business.",
}

export const dynamic = "force-static";

export default function WebDevelopmentPage() {
  return <WebDevelopmentService />
}

import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Burraq Digits",
    short_name: "Burraq",
    description:
      "Not just another digital agency. We are your partners in digital transformation.",
    start_url: "/",
    display: "standalone",
    background_color: "#212428",
    theme_color: "#3a69ff",
    prefer_related_applications: false,
    orientation: "portrait",
    scope: "/",
    categories: ["business", "productivity", "web development"],
    icons: [
      {
        src: "/assets/logo-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/assets/logo-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/assets/logo.png",
        sizes: "1024x1024",
        type: "image/png",
        purpose: "any",
      },
    ],
    shortcuts: [
      {
        name: "Contact Us",
        url: "/contact",
        description: "Get in touch with us",
      },
      {
        name: "Our Services",
        url: "/services",
        description: "View our services",
      },
    ],
    screenshots: [
      {
        src: "/assets/screenshot-1.jpg",
        sizes: "1280x720",
        type: "image/jpeg",
        form_factor: "wide",
      },
    ],
  };
}

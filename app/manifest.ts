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
    icons: [
      {
        src: "/assets/logo.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/assets/logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}

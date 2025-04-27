import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/private/", "/admin/", "/*.json$"],
        crawlDelay: 10,
      },
      {
        userAgent: "GPTBot",
        allow: ["/"],
        disallow: ["/private/", "/admin/", "/api/"],
      },
      {
        userAgent: "Googlebot",
        allow: ["/"],
        disallow: ["/private/", "/admin/", "/api/"],
      },
    ],
    sitemap: "https://burraqdigits.com/sitemap.xml",
  };
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Burraq Digits | Step Together Digitally",
    template: "%s | Burraq Digits",
  },
  description:
    "Not just another digital agency. We are your partners in digital transformation.",
  applicationName: "Burraq Digits",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Burraq Digits",
    startupImage: [
      {
        url: "/assets/logo-512.png",
        media:
          "(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)",
      },
      {
        url: "/assets/logo-512.png",
        media:
          "(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)",
      },
      {
        url: "/assets/logo-512.png",
        media:
          "(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)",
      },
    ],
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  themeColor: "#3a69ff",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    viewportFit: "cover",
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/assets/logo-192.png", sizes: "192x192", type: "image/png" },
      { url: "/assets/logo-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/assets/logo-192.png", sizes: "192x192", type: "image/png" },
    ],
  },
  keywords: [
    "digital agency",
    "web development",
    "digital marketing",
    "UI/UX design",
    "app development",
    "SEO",
  ],
  authors: [{ name: "Burraq Digits" }],
  creator: "Burraq Digits",
  publisher: "Burraq Digits",
  metadataBase: new URL("https://burraqdigits.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Burraq Digits | Step Together Digitally",
    description:
      "Not just another digital agency. We are your partners in digital transformation.",
    url: "https://burraqdigits.com",
    siteName: "Burraq Digits",
    images: [
      {
        url: "/assets/logo.png",
        width: 1200,
        height: 630,
        alt: "Burraq Digits",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Burraq Digits | Step Together Digitally",
    description:
      "Not just another digital agency. We are your partners in digital transformation.",
    images: ["/assets/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification",
  },
};

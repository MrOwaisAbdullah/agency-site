"use client";

import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingNavbar from "@/components/FloatingNavbar";
import Script from "next/script";
import { Montserrat, Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { InstallPrompt } from "@/components/ui/PwaManager";
import { useEffect } from "react";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

export { metadata } from "@/app/layout-metadata";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Burraq Digits",
  url: "https://burraqdigits.com",
  logo: "https://burraqdigits.com/asstes/logo.png",
  description:
    "Not just another digital agency. We are your partners in digital transformation.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "PK",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: ["English"],
  },
  sameAs: [
    "https://facebook.com/burraqdigits",
    "https://twitter.com/burraqdigits",
    "https://linkedin.com/company/burraqdigits",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/sw.js")
          .then((registration) => {
            console.log(
              "Service Worker registered with scope:",
              registration.scope
            );
          })
          .catch((error) => {
            console.error("Service Worker registration failed:", error);
          });
      });
    }
  }, []);

  return (
    <html
      lang="en"
      className={`dark ${montserrat.variable} ${poppins.variable}`}
      style={{ colorScheme: "dark" }}
    >
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
            `,
          }}
        />
      </head>
      <body className={`${montserrat.className} ${poppins.className}`}>
        <FloatingNavbar />
        <Header />
        {children}
        <Footer />
        <InstallPrompt />
        <Analytics />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingNavbar from "@/components/FloatingNavbar";
import Script from "next/script";
import { Montserrat, Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

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

export const metadata: Metadata = {
  title: {
    default: "Burraq Digits | Step Together Digitally",
    template: "%s | Burraq Digits",
  },
  description:
    "Not just another digital agency. We are your partners in digital transformation.",
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
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
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
        <Analytics />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingNavbar from "@/components/FloatingNavbar";



export const metadata: Metadata = {
  title: "Burraq Digits | Step Together Digitally",
  description: "Not just another digital agency. We are your partners in digital transformation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: 'dark' }}>
      <body
      >
        <FloatingNavbar />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

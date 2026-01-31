import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PostHogLoader from "@/components/PostHogLoader";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SendNow PDF Tools - Free PDF Conversion & Manipulation",
  description: "Free online PDF tools for conversion, extraction, merging, and more. PDF to Text, OCR, PNG, JPG, and Page Splitting by SendNow.",
  keywords: "PDF tools, convert PDF to text, OCR PDF, PDF to PNG, PDF to JPG, split PDF, free PDF tools, SendNow",
  openGraph: {
    title: "SendNow PDF Tools",
    description: "Streamline your workflow with free PDF tools.",
    url: "https://pdf.sendnow.live",
    siteName: "SendNow PDF Tools",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${dmSans.className} antialiased bg-premium-gradient min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow pt-16">
          {children}
        </main>
        <Footer />
        <PostHogLoader />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PostHogLoader from "@/components/PostHogLoader";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

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
  verification: {
    google: "ZVT8Bo_CDTKt4nL_tk4aBvp6Kd5sfHxPoPtAQJHnAl8",
  },
  icons: {
    icon: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${dmSans.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-premium-gradient min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <PostHogLoader />
      </body>
    </html>
  );
}

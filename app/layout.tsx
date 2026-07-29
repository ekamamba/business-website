import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import StructuredData from "@/components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "DMK Consulting",
    template: "%s | DMK Consulting",
  },

  description:
    "Professional website development, custom software development, and IT consulting for businesses of all sizes.",

  keywords: [
    "website development",
    "software development",
    "IT consulting",
    "Next.js",
    "React",
    "business websites",
    "DMK Consulting",
  ],

  authors: [
    {
      name: "DMK Consulting",
    },
  ],

  creator: "DMK Consulting",

  applicationName: "DMK Consulting",

  verification: {
  google: "igfpMDYtf96DBVkDqpzvBVRyQpYgWqU66VhRlLKwIVc",
},

  openGraph: {
  title: "DMK Consulting",

  description:
    "Professional website development, custom software, and IT consulting.",

  url: "https://business-website-gilt-five.vercel.app/",

  siteName: "DMK Consulting",

  images: [
    {
      url: "/images/og-image.png",
      width: 1200,
      height: 630,
      alt: "DMK Consulting",
    },
  ],

  locale: "en_US",

  type: "website",
},

twitter: {
  card: "summary_large_image",

  title: "DMK Consulting",

  description:
    "Professional website development and custom software.",

  images: ["/images/og-image.png"],
},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
  className={`${geistSans.variable} ${geistMono.variable} min-h-full flex flex-col antialiased`}
>
        
          <StructuredData />
        <Header />

        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}

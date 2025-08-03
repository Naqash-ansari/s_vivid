import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./nav/page";
import Footer from "./footer/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sign Vivid",
  description: "Creative solutions in signage, design, and branding.",
  keywords: ["signage", "branding", "design", "creative", "sign vivid"],
  authors: [{ name: "Sign Vivid" }],
  creator: "Sign Vivid",
  openGraph: {
    title: "Sign Vivid",
    description: "Creative solutions in signage, design, and branding.",
    type: "website",
    url: "https://yourwebsite.com",
    images: [
      {
        url: "/logo.jpg", // must be in /public or full URL
        width: 1200,
        height: 630,
        alt: "Sign Vivid branding preview",
      },
    ],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}

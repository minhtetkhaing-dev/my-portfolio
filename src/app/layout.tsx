import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MHK | Portfolio",
  description: "Min Htet Khaing's Portfolio - Full Stack Developer",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/images/image.png", type: "image/png", sizes: "32x32" }
    ],
    apple: { url: "/apple-icon.png", sizes: "180x180" }
  },
  keywords: ["Min Htet Khaing", "Portfolio", "Full Stack Developer", "Web Developer", "Software Engineer"],
  authors: [{ name: "Min Htet Khaing" }],
  creator: "Min Htet Khaing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { PROFILE } from "./data";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${PROFILE.name} — ${PROFILE.role}`,
  description: `${PROFILE.role} with 4+ years of experience. ${PROFILE.tagline} PHP, Python, JavaScript, Laravel, WordPress, Django, Odoo, MySQL, PostgreSQL & Git.`,
  keywords: [
    "developer",
    "full-stack",
    "Min Htet Khaing",
    "PHP",
    "Python",
    "JavaScript",
    "Laravel",
    "WordPress",
    "Django",
    "Odoo",
    "portfolio",
  ],
  authors: [{ name: PROFILE.name }],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
  openGraph: {
    title: `${PROFILE.name} — ${PROFILE.role}`,
    description: `${PROFILE.role} with 4+ years of experience building robust web applications.`,
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0f",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`} suppressHydrationWarning>
      <body className="relative min-h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

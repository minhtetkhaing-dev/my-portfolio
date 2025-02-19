import type { Metadata } from "next";
import Navbar from "@/components/layout/NavBar";
import { ThemeProvider } from "@/components/layout/ThemeProvider";

export const metadata: Metadata = {
  title: "Experience Details | MHK Portfolio",
  description: "Detailed information about my professional experience",
};

export default function ExperienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <main className="pt-10 min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <Navbar />
        {children}
      </main>
    </ThemeProvider>
  );
}
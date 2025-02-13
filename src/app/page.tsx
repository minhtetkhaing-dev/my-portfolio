import { ThemeProvider } from "@/components/layout/ThemeProvider";
import ThemeToggle from "@/components/layout/ThemeToggle";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <ThemeProvider>
      <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <ThemeToggle />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </ThemeProvider>
  );
}
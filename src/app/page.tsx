import { ThemeProvider } from "@/components/layout/ThemeProvider";
import Navbar from "@/components/layout/NavBar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Experiences from "@/components/sections/Experiences";

export default function Home() {
  return (
    <ThemeProvider>
      <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Experiences />
        <Contact />
      </main>
    </ThemeProvider>
  );
}
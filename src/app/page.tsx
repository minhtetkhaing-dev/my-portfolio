import Background from "@/components/Background";
import FloatingGlyphs from "@/components/FloatingGlyphs";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
// import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StatusBar from "@/components/StatusBar";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      {/* Skip to content — accessibility */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>
      <Background />
      <FloatingGlyphs count={14} />
      <Navbar />
      <main id="main" className="pb-6">
        <Hero />
        <Skills />
        {/* <Projects /> */}
        <Experience />
        <Contact />
      </main>
      <Footer />
      <StatusBar />
    </>
  );
}

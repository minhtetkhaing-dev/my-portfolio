import React from 'react';
import CanvasBg from './components/CanvasBg';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Nav from './components/Nav';
import Particles from './components/Particles';
import Skills from './components/Skills';
import { useReveal } from './hooks/useReveal';

export default function App() {
  useReveal();

  return (
    <div className="app-root">
      <CanvasBg />
      <div className="noise" />
      <Particles />
      <Nav />
      <Hero />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

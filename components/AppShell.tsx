'use client';

import { useEffect, useState } from 'react';
import CanvasBg from '@/components/CanvasBg';
import Contact from '@/components/Contact';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Nav from '@/components/Nav';
import Particles from '@/components/Particles';
import Skills from '@/components/Skills';
import { useReveal } from '@/hooks/useReveal';

export type Theme = 'dark' | 'light';

export default function AppShell() {
  const [theme, setTheme] = useState<Theme>('dark');

  useReveal();

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('theme');
    if (savedTheme === 'light' || savedTheme === 'dark') {
      setTheme(savedTheme);
      return;
    }

    if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="app-root">
      <CanvasBg theme={theme} />
      <div className="noise" />
      <Particles />
      <Nav theme={theme} onToggleTheme={toggleTheme} />
      <Hero />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

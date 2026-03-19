'use client';

import { useTypewriter } from '@/hooks/useTypewriter';
import { PHRASES } from '@/lib/content';

export default function Hero() {
  const typed = useTypewriter(PHRASES);

  return (
    <section id="hero">
      <div className="hero-left">
        <p className="hero-eyebrow">I am</p>
        <h1>
          Min Htet
          {' '}
          <em>Khaing</em>
        </h1>
        <p className="hero-subtitle">Fullstack Developer</p>
        <div id="typewriter-wrap">
          <p id="typewriter">
            {typed}
            <span className="cursor" />
          </p>
        </div>
        <div className="hero-cta">
          <a href="#contact" className="btn-primary">
            <span>↓ Get in Touch</span>
          </a>
          <a href="#experience" className="btn-outline">
            <span>View My Work</span>
          </a>
        </div>
      </div>

      <div className="hero-right">
        <div className="photo-frame">
          <div className="photo-border" />
          <div className="photo-border-2" />
          <div className="decorative-num">01</div>

          <img className="photo-img" src="/images/profile.jpg" alt="Min Htet Khaing portrait" />

          <div className="photo-tag">
            <span className="photo-tag-text">Min Htet Khaing</span>
            <div className="status-dot" />
          </div>
        </div>
      </div>
    </section>
  );
}

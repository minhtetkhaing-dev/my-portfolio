import React from 'react';
import { PHRASES } from '../data/content';
import { useTypewriter } from '../hooks/useTypewriter';

export default function Hero() {
  const typed = useTypewriter(PHRASES);

  return (
    <section id="hero">
      <div className="hero-left">
        <p className="hero-eyebrow">I am</p>
        <h1>
          Min Htet <em>Khaing</em>
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

          <div className="photo-placeholder">
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="35" r="20" fill="#c9a84c" />
              <path d="M10 85 Q10 60 50 60 Q90 60 90 85" fill="#c9a84c" />
            </svg>
            <p>Your Photo Here</p>
          </div>

          <div className="photo-tag">
            <span className="photo-tag-text">Alex Morgan · SF</span>
            <div className="status-dot" />
          </div>
        </div>
      </div>
    </section>
  );
}

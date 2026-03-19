'use client';

import { useEffect, useState } from 'react';
import type { Theme } from '@/components/AppShell';

type NavProps = {
  theme: Theme;
  onToggleTheme: () => void;
};

export default function Nav({ theme, onToggleTheme }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const isDark = theme === 'dark';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={scrolled ? 'nav-scrolled' : ''}>
      <div className="nav-logo">MHK</div>
      <div className="nav-actions">
        <ul className="nav-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button
          type="button"
          className="theme-toggle"
          onClick={onToggleTheme}
          aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
          aria-pressed={theme === 'light'}
        >
          <span className="theme-toggle-icon" aria-hidden="true">
            {isDark ? (
              <svg viewBox="0 0 24 24" className="theme-icon" role="presentation">
                <circle cx="12" cy="12" r="4.5" fill="currentColor" />
                <path
                  d="M12 1.8v2.6M12 19.6v2.6M4.72 4.72l1.84 1.84M17.44 17.44l1.84 1.84M1.8 12h2.6M19.6 12h2.6M4.72 19.28l1.84-1.84M17.44 6.56l1.84-1.84"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="theme-icon" role="presentation">
                <path
                  d="M20.2 14.2A8.2 8.2 0 1 1 9.8 3.8a6.9 6.9 0 1 0 10.4 10.4Z"
                  fill="currentColor"
                />
              </svg>
            )}
          </span>
        </button>
      </div>
    </nav>
  );
}

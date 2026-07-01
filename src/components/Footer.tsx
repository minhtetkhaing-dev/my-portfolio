"use client";

import Image from "next/image";
import { FiArrowUp, FiHeart } from "react-icons/fi";
import { NAV_LINKS, PROFILE } from "../app/data";

export default function Footer() {
  return (
    <footer className="relative border-t border-fg-5 bg-bg-soft/50 pt-12 pb-10 backdrop-blur-sm md:pb-8">
      <div className="section-shell">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="text-center md:text-left">
            <a href="#home" className="flex items-center justify-center gap-2 md:justify-start">
              <span className="relative h-9 w-9 overflow-hidden rounded-lg border border-fg-10">
                <Image
                  src={PROFILE.logo}
                  alt=""
                  fill
                  sizes="36px"
                  className="object-cover"
                />
              </span>
              <span className="font-semibold tracking-tight text-fg">
                MHK<span className="text-accent">.</span>
              </span>
            </a>
            <p className="mt-3 max-w-xs text-sm text-muted">
              Full-stack developer crafting reliable, human-friendly web
              applications.
            </p>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-fg"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#home"
            aria-label="Back to top"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-fg-10 bg-fg-5 text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:text-fg"
          >
            <FiArrowUp size={18} />
          </a>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-fg-5 pt-6 text-center text-xs text-muted-60 md:flex-row">
          <p>© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</p>
          <p className="inline-flex items-center gap-1.5">
            Built with <FiHeart className="text-accent-pink" /> using Next.js &amp;
            Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

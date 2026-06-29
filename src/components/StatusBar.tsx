"use client";

import { useEffect, useState } from "react";
import { FiGitBranch, FiCheck, FiAlertCircle, FiBell, FiWifi } from "react-icons/fi";

/**
 * Sticky VS Code-style status bar at the very bottom of the viewport.
 * Shows live clock, git branch, encoding, language badge, etc.
 * Hidden on small screens to avoid clutter.
 */
export default function StatusBar() {
  const [time, setTime] = useState("--:--:--");

  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString("en-GB", { hour12: false }) // 24h HH:MM:SS
      );
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const Item = ({
    children,
    className = "",
  }: {
    children: React.ReactNode;
    className?: string;
  }) => (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono transition-colors hover:bg-white/15 ${
        className || ""
      }`}
    >
      {children}
    </span>
  );

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 hidden h-6 items-center justify-between border-t border-black/20 bg-[#007acc] px-1 text-white shadow-[0_-2px_12px_rgba(0,0,0,0.25)] md:flex"
      role="contentinfo"
      aria-label="Developer status bar"
    >
      {/* Left cluster */}
      <div className="flex h-full items-center">
        <Item>
          <FiGitBranch size={11} />
          <span>main</span>
          <span className="opacity-70">↑0 ↓0</span>
        </Item>
        <Item>
          <FiCheck size={11} className="text-emerald-200" />
          <span>0</span>
          <FiAlertCircle size={11} className="ml-1 text-amber-200" />
          <span>0</span>
        </Item>
        <Item className="hidden lg:inline-flex">
          <span className="opacity-90">● Live portfolio</span>
        </Item>
      </div>

      {/* Right cluster */}
      <div className="flex h-full items-center">
        <Item className="hidden lg:inline-flex">Ln 24, Col 8</Item>
        <Item className="hidden lg:inline-flex">Spaces: 2</Item>
        <Item>UTF-8</Item>
        <Item>LF</Item>
        <Item className="hidden sm:inline-flex">
          <span className="font-semibold">TypeScript React</span>
        </Item>
        <Item>
          <FiWifi size={11} />
        </Item>
        <Item>
          <FiBell size={11} />
        </Item>
        <Item className="bg-white/15">{time}</Item>
      </div>
    </div>
  );
}

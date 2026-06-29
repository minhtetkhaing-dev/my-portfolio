"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";

/**
 * Purely decorative: scattered developer code glyphs (</>, { }, [ ], ;, etc.)
 * drifting slowly across the viewport at low opacity. Pointer-events-none so
 * it never blocks interaction, and hidden under prefers-reduced-motion.
 */

const GLYPHS = ["</>", "{ }", "[ ]", "( )", "=>", ";", "==", "$", "//", "/* */"];

type Glyph = {
  char: string;
  top: string;
  left: string;
  size: number;
  duration: number;
  delay: number;
  drift: number;
  rotate: number;
};

export default function FloatingGlyphs({ count = 14 }: { count?: number }) {
  // Stable random placement per mount (memoized so it doesn't reshuffle)
  const glyphs = useMemo<Glyph[]>(() => {
    const rng = mulberry32(20260625);
    return Array.from({ length: count }).map((_, i) => ({
      char: GLYPHS[Math.floor(rng() * GLYPHS.length)],
      top: `${Math.floor(rng() * 100)}%`,
      left: `${Math.floor(rng() * 100)}%`,
      size: 14 + Math.floor(rng() * 22),
      duration: 9 + rng() * 12,
      delay: rng() * 6,
      drift: 14 + rng() * 26,
      rotate: (rng() - 0.5) * 40,
    }));
  }, [count]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-[5] overflow-hidden"
    >
      {glyphs.map((g, i) => (
        <motion.span
          key={i}
          className="absolute select-none font-mono text-accent"
          style={{
            top: g.top,
            left: g.left,
            fontSize: g.size,
            opacity: 0.07,
            color: "var(--accent)",
          }}
          animate={{
            y: [0, -g.drift, 0],
            x: [0, g.drift / 2, 0],
            rotate: [0, g.rotate, 0],
            opacity: [0.05, 0.12, 0.05],
          }}
          transition={{
            duration: g.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: g.delay,
          }}
        >
          {g.char}
        </motion.span>
      ))}
    </div>
  );
}

/* Tiny seeded PRNG so layout is deterministic between SSR & client */
function mulberry32(seed: number) {
  let a = seed;
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

"use client";

import { motion } from "framer-motion";

/**
 * Decorative animated background: subtle grid + floating gradient blobs.
 * Purely cosmetic and pointer-events-none so it never blocks interaction.
 * Uses theme-aware vignette variable so it softens nicely in light mode.
 */
export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* base radial vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at top, var(--vignette), transparent 55%)",
        }}
      />

      {/* grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-70" />

      {/* blobs */}
      <motion.div
        className="absolute -top-32 -left-24 h-[26rem] w-[26rem] rounded-full bg-accent/20 blur-[120px]"
        animate={{ x: [0, 40, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 -right-24 h-[24rem] w-[24rem] rounded-full bg-accent-cyan/15 blur-[120px]"
        animate={{ x: [0, -30, 0], y: [0, 50, 0], scale: [1, 0.9, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 h-[22rem] w-[22rem] rounded-full bg-accent-pink/10 blur-[120px]"
        animate={{ x: [0, 50, 0], y: [0, -30, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

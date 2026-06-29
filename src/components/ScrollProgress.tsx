"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Slim gradient progress bar fixed to the very top of the viewport.
 * Fills as the user scrolls down the page. Hides on no-scroll.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 right-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-accent via-accent-cyan to-accent-pink"
      aria-hidden="true"
    />
  );
}

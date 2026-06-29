"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";

/**
 * Animated dark/light theme toggle.
 * Renders a stable placeholder until mounted to avoid hydration mismatch.
 */
export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex h-10 w-10 items-center justify-center rounded-full border border-fg-10 bg-fg-5 text-fg transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50"
    >
      {/* stable icon until mounted to match SSR markup */}
      {!mounted ? (
        <FiMoon size={18} className="opacity-0" />
      ) : (
        <AnimatePresence mode="wait" initial={false}>
          {isDark ? (
            <motion.span
              key="moon"
              initial={{ rotate: -90, scale: 0, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: 90, scale: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <FiMoon size={18} />
            </motion.span>
          ) : (
            <motion.span
              key="sun"
              initial={{ rotate: 90, scale: 0, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: -90, scale: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <FiSun size={18} className="text-amber-500" />
            </motion.span>
          )}
        </AnimatePresence>
      )}
    </button>
  );
}

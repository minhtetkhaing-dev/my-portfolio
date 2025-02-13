"use client";

import { useTheme } from "./ThemeProvider";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-5 right-5 p-3 rounded-full bg-gray-200 dark:bg-gray-800"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {theme === "light" ? "🌙" : "☀️"}
    </motion.button>
  );
}
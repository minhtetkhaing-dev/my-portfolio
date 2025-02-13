"use client";

import { useTheme } from "../layout/ThemeProvider";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="fixed top-5 right-5">
      <motion.div
        onClick={toggleTheme}
        className="w-20 h-10 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900 p-1 cursor-pointer relative shadow-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Background stars/clouds */}
        <div className="absolute inset-1 rounded-full overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] dark:bg-[radial-gradient(gray_1px,transparent_1px)] [background-size:8px_8px] opacity-40" />
        </div>

        {/* Toggle handle */}
        <motion.div
          className="w-8 h-8 rounded-full shadow-lg flex items-center justify-center bg-gradient-to-br from-yellow-300 to-yellow-400 dark:from-slate-600 dark:to-slate-700"
          animate={{
            x: theme === "light" ? 0 : 40,
            rotate: theme === "light" ? 0 : 360,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 30
          }}
        >
          <motion.div
            animate={{
              scale: theme === "light" ? 1 : 0.8,
              rotate: theme === "light" ? 0 : -360,
            }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            {theme === "light" ? (
              <span className="text-lg">☀️</span>
            ) : (
              <span className="text-lg">🌙</span>
            )}
          </motion.div>
        </motion.div>

        {/* Hover effect overlay */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400/20 via-purple-500/20 to-pink-500/20 dark:from-blue-500/20 dark:via-purple-500/20 dark:to-pink-500/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
      </motion.div>
    </div>
  );
}
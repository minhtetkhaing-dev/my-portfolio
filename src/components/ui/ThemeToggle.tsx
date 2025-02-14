"use client";

import { useTheme } from "../layout/ThemeProvider";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <label className="inline-flex items-center cursor-pointer">
      <input 
        type="checkbox" 
        className="sr-only peer" 
        checked={theme === 'dark'}
        onChange={toggleTheme}
      />
      <motion.div 
        className="
          relative w-14 h-8 
          bg-gradient-to-r from-blue-100 to-purple-100 
          dark:from-blue-900/50 dark:to-purple-900/50 
          peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300/50 
          dark:peer-focus:ring-blue-800/50 
          rounded-full peer shadow-inner 
          overflow-hidden 
          peer-checked:after:translate-x-full 
          rtl:peer-checked:after:-translate-x-full 
          peer-checked:after:border-white 
          after:content-[''] 
          after:absolute 
          after:top-[4px] 
          after:start-[4px] 
          after:bg-gradient-to-r 
          after:from-blue-600 
          after:to-purple-600 
          after:border-gray-300 
          after:rounded-full 
          after:h-6 
          after:w-6 
          after:transition-all 
          dark:border-gray-600 
          peer-checked:bg-gradient-to-r 
          peer-checked:from-blue-100 
          peer-checked:to-purple-100 
          dark:peer-checked:from-blue-900/50 
          dark:peer-checked:to-purple-900/50
        "
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="absolute inset-0 flex items-center justify-between px-2 text-sm font-medium">
          <span className={`transition-colors ${theme === 'light' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400 dark:text-gray-600'}`}>
            ☀️
          </span>
          <span className={`transition-colors ${theme === 'dark' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400 dark:text-gray-600'}`}>
            🌙
          </span>
        </span>
      </motion.div>
    </label>
  );
}
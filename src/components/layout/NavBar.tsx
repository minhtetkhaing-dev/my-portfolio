"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useTheme } from "./ThemeProvider";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const menuItems = ["About", "Projects", "Experience", "Contact"];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full top-0 z-50 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md shadow-lg dark:shadow-gray-800/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Gradient line at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px]" />

        <div className="flex items-center justify-between h-16">
          <motion.a 
            href="#"
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            MHK
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative group"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <span className="text-gray-700 dark:text-gray-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:via-purple-600 group-hover:to-pink-600">
                  {item}
                </span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
            <motion.button
              onClick={toggleTheme}
              className="p-3 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle theme"
            >
              {theme === "light" ? "🌙" : "☀️"}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <motion.button
              onClick={toggleTheme}
              className="p-3 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle theme"
            >
              {theme === "light" ? "🌙" : "☀️"}
            </motion.button>
            <motion.button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6 text-gray-800 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                />
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div 
            className="md:hidden absolute top-full left-0 right-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-4 py-3 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/50 dark:hover:to-purple-900/50 text-gray-700 dark:text-gray-300"
                  onClick={() => setIsOpen(false)}
                  whileHover={{ x: 5 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
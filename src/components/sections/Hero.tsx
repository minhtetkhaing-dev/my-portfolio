"use client";

import { motion } from "framer-motion";
import TypeWriter from "../ui/TypeWriter";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };
  const { translations } = useLanguage();
  const name = "Min Htet Khaing".split("");
  const descriptions = translations.hero.descriptions;

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20" />

      {/* Animated circles in background */}
      <motion.div
        className="absolute w-72 h-72 bg-gradient-to-r from-blue-300/30 to-cyan-300/30 dark:from-blue-500/20 dark:to-cyan-500/20 rounded-full -left-20 -top-20 blur-3xl hidden md:block"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />
      <motion.div
        className="absolute w-72 h-72 bg-gradient-to-r from-purple-300/30 to-pink-300/30 dark:from-purple-500/20 dark:to-pink-500/20 rounded-full -right-20 -bottom-20 blur-3xl hidden md:block"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          delay: 2,
        }}
      />
      <motion.div
        className="absolute w-72 h-72 bg-gradient-to-r from-yellow-200/30 to-orange-200/30 dark:from-yellow-500/20 dark:to-orange-500/20 rounded-full right-1/4 top-1/4 blur-3xl hidden md:block"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          delay: 1,
        }}
      />

      {/* Content */}
      <div className="relative max-w-4xl mx-auto">
        <motion.div 
            className="mb-4 flex justify-center"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6 }}
            >
            {name.map((letter, index) => (
                <span
                key={index}
                className="text-5xl md:text-6xl lg:text-7xl font-bold inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 leading-normal py-3"
                >
                {letter === " " ? "\u00A0" : letter}
                </span>
            ))}
        </motion.div>

        <motion.div
          className="w-20 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mx-auto mb-6"
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        />

        <motion.p
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 mb-4 font-light"
        >
          {translations.hero.role}
        </motion.p>

        <div className="mb-8">
          <TypeWriter
            texts={descriptions}
            className="text-lg md:text-xl text-gray-700 dark:text-gray-200 leading-relaxed font-normal"
            delay={1.5}
          />
        </div>

        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ delay: 1, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="#contact"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full transform transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(147, 51, 234, 0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
          <motion.a
            href="#projects"
            className="bg-gradient-to-r from-transparent to-transparent hover:from-blue-600 hover:to-purple-600 text-blue-600 hover:text-white border-2 border-blue-600 px-8 py-3 rounded-full transform transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
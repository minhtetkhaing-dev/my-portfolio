"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";

export default function About() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/50 to-pink-50/50 dark:from-blue-900/10 dark:via-purple-900/10 dark:to-pink-900/10" />
      <motion.div
        className="absolute w-96 h-96 bg-gradient-to-r from-blue-200/20 to-cyan-200/20 dark:from-blue-500/10 dark:to-cyan-500/10 rounded-full -left-48 -top-24 blur-3xl hidden md:block"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          rotate: [0, 45, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
      />
      <motion.div
        className="absolute w-96 h-96 bg-gradient-to-r from-purple-200/20 to-pink-200/20 dark:from-purple-500/10 dark:to-pink-500/10 rounded-full -right-48 -bottom-24 blur-3xl hidden md:block"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          rotate: [0, -45, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          delay: 2,
        }}
      />

      <div className="max-w-6xl mx-auto relative">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="w-20 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mx-auto mb-12"
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8 backdrop-blur-sm bg-white/80 dark:bg-gray-900/80 p-8 rounded-2xl shadow-xl"
        >
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-gray-800 dark:text-gray-200 leading-relaxed"
          >
            A passionate full-stack developer with experience in building web applications.
            I specialize in JavaScript technologies across the stack and love building
            products that solve real-world problems.
          </motion.p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text">
              Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <motion.span
                  key={skill.name}
                  variants={itemVariants}
                  className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 
                            dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 
                            px-4 py-2 rounded-full border border-blue-200 dark:border-gray-600
                            shadow-sm cursor-pointer text-gray-800 dark:text-gray-200"
                >
                  {skill.name}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
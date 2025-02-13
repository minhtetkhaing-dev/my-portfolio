"use client";

import { motion } from "framer-motion";
import Button from "../ui/Button";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-8"
        >
          Get In Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 dark:text-gray-300 mb-8"
        >
          I'm currently available for freelance work and full-time positions.
          Let's build something amazing together!
        </motion.p>
        <div className="space-y-4">
          <Button href="mailto:your.email@example.com">
            Send Me an Email
          </Button>
          <div className="flex justify-center gap-4 mt-6">
            <motion.a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              GitHub
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              LinkedIn
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
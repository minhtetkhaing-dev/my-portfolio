"use client";

import { motion } from "framer-motion";

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  index: number;
}

export default function ExperienceCard({
  title,
  company,
  period,
  description,
  technologies,
  index,
}: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
        <div>
          <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 text-transparent bg-clip-text">
            {title}
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 mt-1">
            {company}
          </p>
        </div>
        <span className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
          {period}
        </span>
      </div>

      <p className="text-gray-600 dark:text-gray-300 mb-4">
        {description}
      </p>

      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="text-sm px-3 py-1 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 text-gray-700 dark:text-gray-300"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-4 flex justify-end">
        <motion.span
          className="text-blue-600 dark:text-blue-400 flex items-center gap-1 text-sm"
          whileHover={{ x: 5 }}
        >
          View Details
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </motion.span>
      </div>
    </motion.div>
  );
}
"use client";

import { motion } from "framer-motion";

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  companyLogo: string;
  index: number;
}

export default function ExperienceCard({
  title,
  company,
  period,
  description,
  technologies,
  companyLogo,
  index
}: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="relative bg-white/80 dark:bg-gray-800/80 rounded-xl p-6 backdrop-blur-sm shadow-xl"
    >
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700 flex-shrink-0">
          <img 
            src={companyLogo} 
            alt={company}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex-1">
          <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mt-1">{company}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{period}</p>
          <p className="text-gray-700 dark:text-gray-300 mt-4">{description}</p>
          
          <div className="flex flex-wrap gap-2 mt-4">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="text-sm px-3 py-1 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 text-gray-700 dark:text-gray-300 border border-blue-200/50 dark:border-blue-800/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
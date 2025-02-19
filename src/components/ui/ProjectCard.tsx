"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  projectUrl: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  imageUrl,
  projectUrl,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
      className="group bg-gradient-to-br from-white via-white to-blue-50 dark:from-gray-800 dark:via-gray-800 dark:to-blue-900/20 rounded-xl overflow-hidden shadow-lg backdrop-blur-sm"
    >
      <div className="relative overflow-hidden h-48">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        />
        <Image 
          src={imageUrl} 
          alt={title} 
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transform group-hover:scale-105 transition-transform duration-500"
          priority
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 text-transparent bg-clip-text">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <motion.span 
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="text-sm px-3 py-1 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 text-gray-700 dark:text-gray-300 border border-blue-200 dark:border-blue-800/50"
            >
              {tech}
            </motion.span>
          ))}
        </div>
        <div className="flex justify-end">
          <motion.a 
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 font-medium"
            whileHover={{ x: 5 }}
          >
            View Project 
            <motion.span
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
              className="ml-1"
            >
              →
            </motion.span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
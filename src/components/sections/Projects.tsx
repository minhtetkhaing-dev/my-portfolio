"use client";

import { motion } from "framer-motion";
import ProjectCard from "../ui/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Project 1",
      description: "A sample project description. Replace with your actual project details.",
      technologies: ["React", "Node.js", "MongoDB"],
      imageUrl: "/images/image.png",
      projectUrl: "#"
    },
    {
      title: "Project 2",
      description: "Another sample project description. Replace with your actual project details.",
      technologies: ["Laravel", "MySQL", "Tailwind"],
      imageUrl: "/images/image.png",
      projectUrl: "#"
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/50 to-pink-50/50 dark:from-blue-900/10 dark:via-purple-900/10 dark:to-pink-900/10" />
      <motion.div
        className="absolute w-[500px] h-[500px] bg-gradient-to-r from-blue-200/20 to-cyan-200/20 dark:from-blue-500/10 dark:to-cyan-500/10 rounded-full -left-64 top-32 blur-3xl"
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
        className="absolute w-[500px] h-[500px] bg-gradient-to-r from-purple-200/20 to-pink-200/20 dark:from-purple-500/10 dark:to-pink-500/10 rounded-full -right-64 bottom-32 blur-3xl"
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
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 text-transparent bg-clip-text"
        >
          Featured Projects
        </motion.h2>

        <motion.div
          className="w-20 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mx-auto mb-12"
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          viewport={{ once: true }}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
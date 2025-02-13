"use client";

import { motion } from "framer-motion";
import ProjectCard from "../ui/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Project 1",
      description: "A sample project description. Replace with your actual project details.",
      technologies: ["React", "Node.js", "MongoDB"],
      imageUrl: "/images/project1.jpg",
      projectUrl: "#"
    },
    {
      title: "Project 2",
      description: "Another sample project description. Replace with your actual project details.",
      technologies: ["Laravel", "MySQL", "Tailwind"],
      imageUrl: "/images/project2.jpg",
      projectUrl: "#"
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
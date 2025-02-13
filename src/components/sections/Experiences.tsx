"use client";

import { motion } from "framer-motion";
import ExperienceCard from "../ui/ExperienceCard";

export default function Experiences() {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Tech Company",
      period: "2022 - Present",
      description: "Led development of multiple web applications using React and Node.js. Implemented CI/CD pipelines and mentored junior developers.",
      technologies: ["React", "Node.js", "TypeScript", "AWS"],
      companyLogo: "/images/image.png"
    },
    {
      title: "Full Stack Developer",
      company: "Digital Agency",
      period: "2020 - 2022",
      description: "Developed and maintained client websites and applications. Worked with various technologies and frameworks.",
      technologies: ["Laravel", "Vue.js", "MySQL", "Docker"],
      companyLogo: "/images/image.png"
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/50 to-pink-50/50 dark:from-blue-900/10 dark:via-purple-900/10 dark:to-pink-900/10" />
      
      <div className="max-w-6xl mx-auto relative">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 text-transparent bg-clip-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Work Experience
        </motion.h2>

        <motion.div
          className="w-20 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mx-auto mb-12"
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          viewport={{ once: true }}
        />

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <ExperienceCard 
              key={index}
              {...experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
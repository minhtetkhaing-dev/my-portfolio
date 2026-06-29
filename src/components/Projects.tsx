"use client";

import { motion } from "framer-motion";
import {
  FiStar,
  FiGitBranch,
  FiArrowUpRight,
  FiBook,
  FiFolder,
} from "react-icons/fi";
import { PROJECTS, PROFILE } from "../app/data";

const card = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      delay: i * 0.06,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="section-shell">
        {/* Header — GitHub repos style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-2xl"
        >
          <span className="eyebrow mb-4">
            <FiBook size={14} />
            // github.com/{PROFILE.githubHandle}?tab=repositories
          </span>
          <h2 className="heading-xl mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted">
            A selection of repositories I&apos;ve built and maintain — from SaaS
            platforms to developer tooling.
          </p>
        </motion.div>

        {/* Repo grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <motion.article
              key={project.name}
              custom={i}
              variants={card}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="card card-glow group relative flex flex-col p-6"
            >
              {/* top row: folder icon + name + external arrow */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <FiFolder
                    size={20}
                    className="text-accent-cyan transition-transform duration-300 group-hover:-translate-y-0.5"
                  />
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-base font-semibold text-fg transition-colors group-hover:text-accent-glow"
                  >
                    {project.name}
                  </a>
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.name} on GitHub`}
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-60 transition-all duration-300 hover:bg-fg-5 hover:text-fg"
                >
                  <FiArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>

              {/* featured badge */}
              {project.highlight && (
                <span className="mt-3 inline-flex w-fit items-center gap-1 rounded-full border border-accent-cyan/30 bg-accent-cyan/10 px-2.5 py-0.5 font-mono text-[10px] font-medium text-accent-cyan">
                  ★ Pinned
                </span>
              )}

              {/* description */}
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {project.description}
              </p>

              {/* topics */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.topics.map((topic) => (
                  <span
                    key={topic}
                    className="rounded-full bg-accent/10 px-2 py-0.5 font-mono text-[10px] text-accent-glow"
                  >
                    {topic}
                  </span>
                ))}
              </div>

              {/* footer: language + stars + forks */}
              <div className="mt-5 flex items-center gap-4 border-t border-fg-5 pt-4 font-mono text-xs text-muted-60">
                <span className="inline-flex items-center gap-1.5">
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: project.languageColor }}
                  />
                  {project.language}
                </span>
                <span className="inline-flex items-center gap-1 transition-colors hover:text-fg">
                  <FiStar size={12} />
                  {project.stars}
                </span>
                <span className="inline-flex items-center gap-1 transition-colors hover:text-fg">
                  <FiGitBranch size={12} />
                  {project.forks}
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA to full profile */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 text-center"
        >
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost group"
          >
            View all repositories
            <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

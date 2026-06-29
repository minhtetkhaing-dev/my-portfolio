"use client";

import { motion } from "framer-motion";
import { FiBriefcase, FiMapPin, FiGitCommit, FiGitBranch } from "react-icons/fi";
import { EXPERIENCE } from "../app/data";

// Commit-type badge colors (conventional commits style)
const TYPE_STYLES: Record<string, string> = {
  feat: "text-accent-cyan border-accent-cyan/30 bg-accent-cyan/10",
  init: "text-accent-glow border-accent/30 bg-accent/10",
  refactor: "text-accent-pink border-accent-pink/30 bg-accent-pink/10",
  default: "text-muted border-fg-10 bg-fg-5",
};

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <span className="eyebrow mb-4">// git log --author="mhk-dev"</span>
          <h2 className="heading-xl mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted">
            Four years across agencies and product teams — committed to every
            commit below. Building everything from ERP modules to high-traffic
            SaaS platforms.
          </p>
        </motion.div>

        <div className="relative">
          {/* git-log branch line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-accent via-accent-cyan/40 to-transparent" />

          {/* HEAD label */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 ml-12 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-[11px] text-accent-glow"
          >
            <FiGitBranch size={12} />
            <span>main</span>
            <span className="opacity-50">·</span>
            <span>{EXPERIENCE.length} commits</span>
          </motion.div>

          <div className="space-y-8">
            {EXPERIENCE.map((job, i) => {
              const typeStyle =
                TYPE_STYLES[job.commitType] ?? TYPE_STYLES.default;
              return (
                <motion.div
                  key={job.company}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="relative flex items-start gap-6"
                >
                  {/* commit node */}
                  <span className="absolute left-[11px] top-6 z-10 flex h-4 w-4 items-center justify-center">
                    <motion.span
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.3 + i * 0.08,
                        type: "spring",
                        stiffness: 300,
                      }}
                      className="absolute h-4 w-4 rounded-full bg-accent/30"
                    />
                    <FiGitCommit
                      size={18}
                      className="relative rounded-full bg-accent text-white"
                    />
                  </span>

                  {/* commit card */}
                  <motion.article
                    whileHover={{ y: -4 }}
                    className="card card-glow ml-12 w-full p-6"
                  >
                    {/* commit header line: hash + type + subject */}
                    <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                      <span className="rounded-md border border-fg-10 bg-fg-5 px-2 py-0.5 text-muted">
                        {job.hash}
                      </span>
                      <span
                        className={`rounded-md border px-2 py-0.5 font-semibold ${typeStyle}`}
                      >
                        {job.commitType}
                      </span>
                      <span className="text-muted-70">
                        {job.commitSubject}
                      </span>
                      {job.isHead && (
                        <span className="rounded-md border border-accent-cyan/40 bg-accent-cyan/10 px-2 py-0.5 font-semibold text-accent-cyan">
                          HEAD → main
                        </span>
                      )}
                    </div>

                    {/* role + company */}
                    <h3 className="mt-4 text-xl font-semibold text-fg">
                      {job.role}
                    </h3>
                    <p className="mt-1 inline-flex items-center gap-2 font-medium text-accent-glow">
                      <FiBriefcase size={14} />
                      {job.company}
                    </p>

                    {/* meta: period + location */}
                    <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono text-muted-60">
                      <span className="inline-flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan" />
                        {job.period}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <FiMapPin size={12} />
                        {job.location}
                      </span>
                    </div>

                    {/* bullet points */}
                    <ul className="mt-4 space-y-2.5">
                      {job.points.map((point, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.25 + idx * 0.08 }}
                          className="flex gap-2.5 text-sm leading-relaxed text-muted-70"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-cyan" />
                          {point}
                        </motion.li>
                      ))}
                    </ul>

                    {/* stack chips */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {job.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-fg-10 bg-fg-5 px-2.5 py-1 font-mono text-[11px] text-muted-70"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.article>
                </motion.div>
              );
            })}
          </div>

          {/* terminal-style footer prompt */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="ml-12 mt-6 font-mono text-xs text-muted-60"
          >
            <span className="text-accent-cyan">mhk@portfolio</span>
            <span className="text-muted-60">:</span>
            <span className="text-accent-glow">~/career</span>
            <span className="text-muted-60">$</span>{" "}
            <span className="caret" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

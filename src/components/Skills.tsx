"use client";

import { motion } from "framer-motion";
import { SKILLS } from "../app/data";
import { FiPackage, FiCode, FiDatabase, FiBox, FiLayers, FiTool } from "react-icons/fi";

/* tag → icon mapping */
const TAG_ICONS: Record<string, typeof FiCode> = {
  language: FiCode,
  framework: FiLayers,
  cms: FiBox,
  erp: FiBox,
  database: FiDatabase,
  tool: FiTool,
};

const TAG_LABELS: Record<string, string> = {
  language: "Language",
  framework: "Framework",
  cms: "CMS",
  erp: "ERP",
  database: "Database",
  tool: "Tool",
};

const card = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      delay: i * 0.05,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="section-shell">
        {/* Section header — terminal style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-2xl"
        >
          <span className="eyebrow mb-4">
            <FiPackage size={14} />
            // package.json → dependencies
          </span>
          <h2 className="heading-xl mb-4">
            Skills &amp; <span className="gradient-text">Toolbox</span>
          </h2>
          <p className="text-muted">
            The stack I reach for to ship reliable products. Hover a card to
            see how I use each one.
          </p>
        </motion.div>

        {/* Dependency grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((skill, i) => {
            const Icon = skill.icon;
            const TagIcon = TAG_ICONS[skill.tag] ?? FiPackage;
            return (
              <motion.article
                key={skill.name}
                custom={i}
                variants={card}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                whileHover={{ y: -4 }}
                className="card card-glow group relative overflow-hidden p-5"
              >
                {/* top-left: icon + name */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-fg-10 bg-fg-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                      style={{
                        boxShadow: `0 6px 20px -8px ${skill.color}`,
                      }}
                    >
                      <Icon size={22} style={{ color: skill.color }} />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-fg leading-tight">
                        {skill.name}
                      </h3>
                      <span
                        className="mt-0.5 inline-block rounded px-1.5 py-0.5 font-mono text-[10px] font-medium"
                        style={{
                          color: skill.color,
                          background: `${skill.color}15`,
                          border: `1px solid ${skill.color}30`,
                        }}
                      >
                        v{skill.version}
                      </span>
                    </div>
                  </div>

                  {/* tag badge */}
                  <span className="inline-flex items-center gap-1 rounded-md border border-fg-10 bg-fg-5 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-muted">
                    <TagIcon size={10} />
                    {TAG_LABELS[skill.tag] ?? skill.tag}
                  </span>
                </div>

                {/* description — revealed more on hover */}
                <p className="mt-3 text-sm leading-relaxed text-muted line-clamp-2 transition-colors duration-300 group-hover:text-muted-90">
                  {skill.desc}
                </p>

                {/* bottom: install-style command */}
                <div className="mt-3 flex items-center gap-2 font-mono text-[11px] text-muted-60">
                  <span className="text-accent-cyan">$</span>
                  <span>
                    install {skill.name.toLowerCase().replace(/\s/g, "-")}
                  </span>
                </div>

                {/* subtle glow on hover */}
                <div
                  className="pointer-events-none absolute inset-0 -z-10 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-25"
                  style={{
                    background: `radial-gradient(circle at 30% 20%, ${skill.color}, transparent 70%)`,
                  }}
                />
              </motion.article>
            );
          })}
        </div>

        {/* Bottom: dev stats row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-fg-5 pt-8 font-mono text-xs text-muted-60"
        >
          <span>
            <span className="text-accent-cyan">{SKILLS.length}</span> packages
          </span>
          <span>
            <span className="text-accent-cyan">
              {new Set(SKILLS.map((s) => s.tag)).size}
            </span>{" "}
            categories
          </span>
          <span>
            <span className="text-accent-cyan">0</span> vulnerabilities
          </span>
          <span className="inline-flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-emerald" />
            all up to date
          </span>
        </motion.div>
      </div>
    </section>
  );
}

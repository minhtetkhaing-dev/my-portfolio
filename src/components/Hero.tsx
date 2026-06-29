"use client";

import { motion } from "framer-motion";
import { FiArrowDownRight, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { useTypewriter } from "./useTypewriter";
import { SKILLS, PROFILE } from "../app/data";
import TerminalBoot from "./TerminalBoot";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero() {
  const typed = useTypewriter({
    words: [
      "Laravel & Django apps.",
      "WordPress & Odoo solutions.",
      "scalable APIs & databases.",
      "clean, maintainable code.",
    ],
  });

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      <div className="section-shell grid w-full items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Left: copy */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item} className="eyebrow mb-5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-emerald opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-emerald" />
            </span>
            Available for freelance & full-time
          </motion.div>

          <motion.h1 variants={item} className="heading-xl leading-[1.05] text-fg">
            Hi, I&apos;m{" "}
            <span className="gradient-text">{PROFILE.name}</span>
          </motion.h1>

          {/* Typewriter line */}
          <motion.p
            variants={item}
            className="mt-6 font-mono text-lg text-muted md:text-xl"
          >
            <span className="text-accent-cyan">&gt;</span> Crafting{" "}
            <span className="caret font-semibold text-fg">{typed}</span>
          </motion.p>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg"
          >
            {PROFILE.role} with{" "}
            <strong className="font-semibold text-fg">4+ years</strong> of
            experience turning ideas into robust web applications — from custom
            Laravel platforms to Odoo ERPs and headless WordPress builds.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a href="#contact" className="btn-primary group">
              Start a project
              <FiArrowDownRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a href="#experience" className="btn-ghost">
              View experience
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div variants={item} className="mt-8 flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-muted-60">
              Find me
            </span>
            <span className="h-px w-8 bg-fg-10" />
            <div className="flex gap-2">
              {[
                { Icon: FiGithub, href: PROFILE.github, label: "GitHub" },
                { Icon: FiLinkedin, href: PROFILE.linkedin, label: "LinkedIn" },
                { Icon: FiMail, href: `mailto:${PROFILE.email}`, label: "Email" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-fg-10 bg-fg-5 text-muted transition-all duration-300 hover:border-accent/50 hover:text-fg hover:-translate-y-0.5"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right: photo + terminal boot + decorative orbiting tech */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto flex w-full max-w-sm flex-col gap-5"
        >
          {/* photo block (relative so floating chips anchor to it) */}
          <div className="relative">
            {/* glow behind */}
            <div className="absolute -inset-6 -z-10 rounded-full bg-gradient-to-br from-accent/30 via-accent-cyan/20 to-accent-pink/20 blur-3xl" />

            {/* rotating gradient ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-3 -z-10 rounded-[2rem]"
              style={{
                background:
                  "conic-gradient(from 0deg, #7c5cff, #22d3ee, #ec4899, #7c5cff)",
                WebkitMask:
                  "radial-gradient(farthest-side, transparent calc(100% - 4px), #000 calc(100% - 3px))",
                mask: "radial-gradient(farthest-side, transparent calc(100% - 4px), #000 calc(100% - 3px))",
              }}
            />

            {/* photo frame */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="card relative overflow-hidden !rounded-[1.75rem] shadow-2xl shadow-accent/20"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={PROFILE.photo}
                alt={`${PROFILE.name} — ${PROFILE.role}`}
                className="aspect-[4/5] w-full object-cover"
              />
              {/* subtle sheen overlay */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.45), transparent 50%, rgba(255,255,255,0.04))",
                }}
              />

              {/* bottom name badge */}
              <div className="absolute inset-x-3 bottom-3 flex items-center justify-between rounded-xl border border-white/10 bg-black/50 px-4 py-2.5 backdrop-blur-md">
                <div>
                  <p className="text-sm font-semibold text-white">
                    {PROFILE.name}
                  </p>
                  <p className="font-mono text-[11px] text-accent-cyan">
                    {PROFILE.role}
                  </p>
                </div>
                <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-accent-emerald">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-emerald" />
                  open
                </span>
              </div>
            </motion.div>

            {/* floating skill chips */}
            {[
              { label: "Laravel", top: "-4%", left: "-14%", delay: 0 },
              { label: "Django", top: "20%", right: "-16%", delay: 0.6 },
              { label: "Odoo", bottom: "18%", left: "-16%", delay: 1.2 },
              { label: "WordPress", bottom: "-2%", right: "-6%", delay: 1.8 },
            ].map((chip) => (
              <motion.span
                key={chip.label}
                className="absolute rounded-full border border-fg-10 bg-bg-card/90 px-3 py-1.5 font-mono text-xs text-fg shadow-lg backdrop-blur"
                style={{
                  top: chip.top,
                  left: chip.left,
                  right: chip.right,
                  bottom: chip.bottom,
                }}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: chip.delay,
                }}
              >
                {chip.label}
              </motion.span>
            ))}
          </div>

          {/* Terminal boot widget */}
          <TerminalBoot />
        </motion.div>
      </div>

      {/* marquee of all skills at bottom */}
      <div className="absolute bottom-0 left-0 right-0 border-y border-fg-5 bg-fg-5/40 py-3 backdrop-blur-sm">
        <div className="flex w-max animate-marquee whitespace-nowrap will-change-transform">
          {[false, true].map((isDuplicate) => (
            <div
              key={String(isDuplicate)}
              aria-hidden={isDuplicate || undefined}
              className="flex shrink-0 items-center gap-10 pr-10"
            >
              {SKILLS.map((skill) => (
                <span
                  key={skill.name}
                  className="flex items-center gap-2 font-mono text-sm text-muted-60"
                >
                  <skill.icon style={{ color: skill.color }} />
                  {skill.name}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiCpu } from "react-icons/fi";
import { PROFILE } from "../app/data";

/**
 * Small terminal widget that "boots" the developer's info on mount:
 * types out a sequence of commands/responses line by line, then idles
 * with a blinking prompt. Used as a decorative accent in the Hero.
 */

type Line = {
  text: string;
  type?: "cmd" | "out" | "ok" | "muted";
};

const SCRIPT: Line[] = [
  { text: "$ whoami", type: "cmd" },
  { text: `> ${PROFILE.name.toLowerCase().replace(/\s+/g, "-")}`, type: "out" },
  { text: "$ cat status.json", type: "cmd" },
  { text: "{", type: "out" },
  { text: `  "status": "available",`, type: "ok" },
  { text: `  "experience": "4+ years",`, type: "muted" },
  { text: `  "stack": ["laravel","django","odoo"],`, type: "muted" },
  { text: `  "remote": true`, type: "muted" },
  { text: "}", type: "out" },
  { text: "$ ./start_collab.sh", type: "cmd" },
  { text: "▸ compiling handshake... [ok]", type: "ok" },
  { text: "▸ inbox ready ✓", type: "ok" },
  { text: "$", type: "cmd" },
];

export default function TerminalBoot() {
  const [visibleLines, setVisibleLines] = useState<Line[]>([]);
  const [done, setDone] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let i = 0;
    let cancelled = false;

    const step = () => {
      if (cancelled) return;
      if (i >= SCRIPT.length) {
        setDone(true);
        return;
      }
      setVisibleLines((prev) => [...prev, SCRIPT[i]]);
      i += 1;
      // commands pause a touch longer than output for realism
      const delay = SCRIPT[i - 1].type === "cmd" ? 520 : 240;
      setTimeout(step, delay);
    };

    const start = setTimeout(step, 700);
    return () => {
      cancelled = true;
      clearTimeout(start);
    };
  }, []);

  // auto-scroll to bottom as lines appear
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [visibleLines]);

  const colorFor = (t?: Line["type"]) =>
    t === "cmd"
      ? "text-accent-cyan"
      : t === "ok"
      ? "text-accent-emerald"
      : t === "muted"
      ? "text-muted"
      : "text-fg/90";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="card overflow-hidden !rounded-xl text-left"
    >
      {/* title bar */}
      <div className="flex items-center gap-2 border-b border-fg-5 bg-fg-5/50 px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
        <span className="ml-2 inline-flex items-center gap-1.5 font-mono text-[11px] text-muted-60">
          <FiCpu size={11} /> zsh — mhk@portfolio
        </span>
      </div>

      {/* body */}
      <div
        ref={scrollRef}
        className="h-44 overflow-y-auto px-4 py-3 font-mono text-[12px] leading-relaxed md:text-[13px]"
      >
        {visibleLines.map((line, i) => (
          <div key={i} className={`whitespace-pre ${colorFor(line.type)}`}>
            {line.text}
          </div>
        ))}
        {done && (
          <div className="text-accent-cyan">
            <span className="caret" />
          </div>
        )}
      </div>
    </motion.div>
  );
}

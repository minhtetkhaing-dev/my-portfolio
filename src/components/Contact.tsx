"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
  FiGithub,
  FiLinkedin,
  FiCheckCircle,
  FiAlertCircle,
  FiLoader,
} from "react-icons/fi";
import { PROFILE } from "../app/data";

const CONTACT_INFO = [
  {
    Icon: FiMail,
    label: "Email",
    value: PROFILE.email,
    href: `mailto:${PROFILE.email}`,
  },
  {
    Icon: FiPhone,
    label: "Phone",
    value: PROFILE.phone,
    href: `tel:${PROFILE.phone.replace(/\s/g, "")}`,
  },
  {
    Icon: FiMapPin,
    label: "Location",
    value: PROFILE.location,
    href: "#",
  },
];

const SOCIALS = [
  { Icon: FiGithub, href: PROFILE.github, label: "GitHub" },
  { Icon: FiLinkedin, href: PROFILE.linkedin, label: "LinkedIn" },
];

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [feedback, setFeedback] = useState("");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Auto-reset the success state back to idle after a few seconds
  useEffect(() => {
    if (status === "sent") {
      resetTimer.current = setTimeout(() => {
        setStatus("idle");
        setFeedback("");
      }, 4000);
    }
    return () => {
      if (resetTimer.current) clearTimeout(resetTimer.current);
    };
  }, [status]);

  // Clear error as soon as the user starts editing again
  useEffect(() => {
    if (status === "error") {
      setStatus("idle");
      setFeedback("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.name, form.email, form.message]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setStatus("sending");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.error || "Message could not be sent.");
      }

      setStatus("sent");
      setFeedback("Message sent!");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : "Something went wrong while sending your message."
      );
    }
  };

  const update =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="eyebrow mb-4 justify-center">// Let&apos;s build together</span>
          <h2 className="heading-xl mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="mx-auto max-w-xl text-muted">
            Have a project in mind, a role to fill, or just want to say hi? My
            inbox is always open.
          </p>
        </motion.div>

        <div className="grid items-stretch gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Left: info card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="card card-glow relative flex flex-col justify-between overflow-hidden p-8"
          >
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/20 blur-3xl" />
            <div>
              <h3 className="text-xl font-semibold text-fg">Contact details</h3>
              <p className="mt-2 text-sm text-muted">
                Prefer a direct line? Reach out through any of these.
              </p>

              <div className="mt-8 space-y-5">
                {CONTACT_INFO.map(({ Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="group flex items-center gap-4"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-fg-10 bg-fg-5 text-accent-cyan transition-all duration-300 group-hover:scale-110 group-hover:border-accent/50">
                      <Icon size={18} />
                    </span>
                    <span>
                      <span className="block font-mono text-[11px] uppercase tracking-widest text-muted-60">
                        {label}
                      </span>
                      <span className="text-sm font-medium text-muted-90 transition-colors group-hover:text-fg">
                        {value}
                      </span>
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <span className="font-mono text-[11px] uppercase tracking-widest text-muted-60">
                Follow
              </span>
              <div className="mt-3 flex gap-2">
                {SOCIALS.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-fg-10 bg-fg-5 text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:text-fg"
                  >
                    <Icon size={17} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="card card-glow p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Your name">
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={update("name")}
                    placeholder="Jane Doe"
                    disabled={status === "sending"}
                    className="input"
                  />
                </Field>
                <Field label="Email address">
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={update("email")}
                    placeholder="jane@company.com"
                    disabled={status === "sending"}
                    className="input"
                  />
                </Field>
              </div>
              <Field label="Message">
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={update("message")}
                  placeholder="Tell me about your project..."
                  disabled={status === "sending"}
                  className="input resize-none"
                />
              </Field>

              {/* Submit button with state transitions */}
              <motion.button
                type="submit"
                layout
                disabled={status === "sending"}
                className={`btn-primary group w-full justify-center transition-colors duration-300 ${
                  status === "sent"
                    ? "!from-emerald-500 !to-emerald-400"
                    : status === "error"
                      ? "!from-red-500 !to-rose-400"
                      : ""
                } ${status === "sending" ? "cursor-wait opacity-90" : ""}`}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {status === "sending" ? (
                    <motion.span
                      key="sending"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="inline-flex items-center gap-2"
                    >
                      <FiLoader className="animate-spin" />
                      Sending...
                    </motion.span>
                  ) : status === "sent" ? (
                    <motion.span
                      key="sent"
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.85 }}
                      transition={{
                        type: "spring",
                        stiffness: 320,
                        damping: 18,
                      }}
                      className="inline-flex items-center gap-2"
                    >
                      <FiCheckCircle />
                      Message sent!
                    </motion.span>
                  ) : status === "error" ? (
                    <motion.span
                      key="error"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="inline-flex items-center gap-2"
                    >
                      <FiAlertCircle />
                      Retry
                    </motion.span>
                  ) : (
                    <motion.span
                      key="idle"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="inline-flex items-center gap-2"
                    >
                      Send message
                      <FiSend className="transition-transform duration-300 group-hover:translate-x-1" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>

              {/* Animated feedback banner */}
              <div className="min-h-[2.25rem]">
                <AnimatePresence mode="wait">
                  {feedback && (
                    <motion.p
                      key={status + feedback}
                      initial={{ opacity: 0, y: -8, height: 0 }}
                      animate={{ opacity: 1, y: 0, height: "auto" }}
                      exit={{ opacity: 0, y: -8, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className={`flex items-center justify-center gap-2 overflow-hidden rounded-lg border px-3 py-2 text-center text-xs font-medium ${
                        status === "error"
                          ? "border-red-500/30 bg-red-500/10 text-red-400"
                          : "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                      }`}
                      role="status"
                    >
                      {status === "error" ? (
                        <FiAlertCircle size={14} />
                      ) : (
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{
                            delay: 0.1,
                            type: "spring",
                            stiffness: 400,
                            damping: 12,
                          }}
                        >
                          <FiCheckCircle size={14} />
                        </motion.span>
                      )}
                      {feedback}
                      {status === "sent" && (
                        <span className="ml-1 text-emerald-400/60">
                          · I&apos;ll get back to you soon
                        </span>
                      )}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block font-mono text-[11px] uppercase tracking-widest text-muted-60">
        {label}
      </span>
      {children}
    </label>
  );
}

'use client';

import { useEffect, useState } from 'react';
import Divider from '@/components/Divider';
import SectionHeader from '@/components/SectionHeader';

const LINKS = [
  { icon: '✉', text: 'minhtetkhaing.dev@gmail.com', label: 'Email', href: 'mailto:minhtetkhaing.dev@gmail.com' },
  { icon: '⌗', text: 'github.com/minhtetkhaing-dev', label: 'GitHub', href: 'https://github.com/minhtetkhaing-dev' },
  { icon: '◈', text: 'linkedin.com/in/minhtetkhaing', label: 'LinkedIn', href: 'https://www.linkedin.com/in/min-htet-khaing/' },
] as const;

type FormState = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending'>('idle');
  const [toast, setToast] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  useEffect(() => {
    if (!toast) {
      return undefined;
    }

    const timeout = window.setTimeout(() => setToast(null), 3200);
    return () => window.clearTimeout(timeout);
  }, [toast]);

  const handleSubmit = async () => {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setToast({ type: 'error', message: 'Please fill in your name, email, and message.' });
      return;
    }

    setStatus('sending');
    setToast(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const rawBody = await response.text();
      let data: { message?: string } | null = null;

      if (rawBody) {
        try {
          data = JSON.parse(rawBody) as { message?: string };
        } catch {
          data = null;
        }
      }

      if (!response.ok) {
        const fallbackMessage =
          response.status >= 500
            ? 'Mail service is unavailable right now. Make sure your Next.js environment variables are set correctly.'
            : 'Unable to send message right now.';

        throw new Error(data?.message || fallbackMessage);
      }

      setStatus('idle');
      setToast({
        type: 'success',
        message: data?.message || 'Message sent successfully. I will get back to you soon.',
      });
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('idle');
      setToast({
        type: 'error',
        message: error instanceof Error ? error.message : 'Unable to send message right now.',
      });
    }
  };

  return (
    <section id="contact">
      <Divider label="Connect" />
      <SectionHeader label="Let's Talk" title="Get In" italic="Touch" />

      <div className="contact-inner">
        <div className="contact-left reveal">
          <p className="contact-desc">
            Whether you have a project in mind, want to explore collaboration, or simply want to say hello
            {' '}
            - I&apos;m always open to thoughtful conversations about meaningful work.
          </p>

          <div className="contact-links">
            {LINKS.map((link) => (
              <a key={link.label} href={link.href} className="contact-link">
                <span className="contact-link-icon">{link.icon}</span>
                <span className="contact-link-text">{link.text}</span>
                <span className="contact-link-label">{link.label}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="contact-form reveal reveal-delay-2">
          <div className="form-group">
            <label className="form-label" htmlFor="contact-name">Your Name</label>
            <input
              id="contact-name"
              type="text"
              className="form-input"
              placeholder="Your Name"
              value={form.name}
              onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="contact-email">Email Address</label>
            <input
              id="contact-email"
              type="email"
              className="form-input"
              placeholder="your-mail@mail.com"
              value={form.email}
              onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              className="form-textarea"
              placeholder="Tell me about your project or just say hello..."
              value={form.message}
              onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
            />
          </div>

          <button
            className="btn-primary contact-submit"
            onClick={handleSubmit}
            type="button"
            disabled={status === 'sending'}
          >
            <span>{status === 'sending' ? 'Sending...' : 'Send Message'}</span>
          </button>
        </div>
      </div>

      {toast ? (
        <div className={`contact-toast is-${toast.type}`} role="status" aria-live="polite">
          {toast.message}
        </div>
      ) : null}
    </section>
  );
}

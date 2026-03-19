'use client';

import { useEffect, useState } from 'react';
import Divider from '@/components/Divider';
import SectionHeader from '@/components/SectionHeader';

const LINKS = [
  { icon: 'email', text: 'minhtetkhaing.dev@gmail.com', label: 'Email', href: 'mailto:minhtetkhaing.dev@gmail.com' },
  { icon: 'github', text: 'github.com/minhtetkhaing-dev', label: 'GitHub', href: 'https://github.com/minhtetkhaing-dev' },
  { icon: 'linkedin', text: 'linkedin.com/in/minhtetkhaing', label: 'LinkedIn', href: 'https://www.linkedin.com/in/min-htet-khaing/' },
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
                <span className="contact-link-icon">{renderContactIcon(link.icon)}</span>
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

function renderContactIcon(icon: (typeof LINKS)[number]['icon']) {
  if (icon === 'github') {
    return (
      <svg viewBox="0 0 24 24" className="contact-icon-svg" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.42-4.04-1.42-.55-1.38-1.34-1.74-1.34-1.74-1.09-.74.08-.73.08-.73 1.21.08 1.84 1.22 1.84 1.22 1.07 1.83 2.81 1.3 3.49.99.11-.77.42-1.3.76-1.6-2.67-.3-5.48-1.33-5.48-5.9 0-1.3.47-2.36 1.23-3.2-.12-.3-.53-1.5.12-3.14 0 0 1.01-.32 3.3 1.22a11.5 11.5 0 0 1 6 0c2.28-1.54 3.29-1.22 3.29-1.22.66 1.64.25 2.84.13 3.14.77.84 1.23 1.9 1.23 3.2 0 4.58-2.82 5.6-5.5 5.9.43.37.81 1.1.81 2.23v3.3c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z"
        />
      </svg>
    );
  }

  if (icon === 'linkedin') {
    return (
      <svg viewBox="0 0 24 24" className="contact-icon-svg" aria-hidden="true">
        <path
          fill="currentColor"
          d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A1.97 1.97 0 1 0 5.3 6.94 1.97 1.97 0 0 0 5.25 3Zm14.19 9.85c0-3.46-1.85-5.07-4.32-5.07-1.99 0-2.88 1.09-3.38 1.86V8.5H8.37c.04.75 0 11.5 0 11.5h3.37v-6.42c0-.34.02-.68.13-.92.27-.68.88-1.38 1.9-1.38 1.34 0 1.87 1.03 1.87 2.54V20H19v-7.15Z"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="contact-icon-svg" aria-hidden="true">
      <path
        fill="currentColor"
        d="M3 6.75A2.25 2.25 0 0 1 5.25 4.5h13.5A2.25 2.25 0 0 1 21 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 17.25V6.75Zm2.07-.75 6.93 5.54L18.93 6H5.07Zm13.43 1.92-5.56 4.45a1.5 1.5 0 0 1-1.88 0L5.5 7.92v9.33c0 .41.34.75.75.75h12.5c.41 0 .75-.34.75-.75V7.92Z"
      />
    </svg>
  );
}

import React, { useState } from 'react';
import Divider from './Divider';
import SectionHeader from './SectionHeader';

const LINKS = [
  { icon: '✉', text: 'alex@example.com', label: 'Email', href: 'mailto:alex@example.com' },
  { icon: '⌗', text: 'github.com/alexmorgan', label: 'GitHub', href: '#' },
  { icon: '◈', text: 'linkedin.com/in/alexmorgan', label: 'LinkedIn', href: '#' },
  { icon: '✦', text: '@alexmorgan_dev', label: 'Twitter / X', href: '#' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact">
      <Divider label="Connect" />
      <SectionHeader label="Let's Talk" title="Get In" italic="Touch" />

      <div className="contact-inner">
        <div className="contact-left reveal">
          <p className="contact-desc">
            Whether you have a project in mind, want to explore collaboration, or simply want to say hello — I&apos;m always open to thoughtful conversations about meaningful work.
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
            <label className="form-label">Your Name</label>
            <input
              type="text"
              className="form-input"
              placeholder="Jane Smith"
              value={form.name}
              onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              className="form-input"
              placeholder="jane@company.com"
              value={form.email}
              onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Message</label>
            <textarea
              className="form-textarea"
              placeholder="Tell me about your project or just say hello…"
              value={form.message}
              onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
            />
          </div>

          <button
            className={`btn-primary contact-submit ${sent ? 'is-sent' : ''}`}
            onClick={handleSubmit}
            type="button"
          >
            <span>{sent ? 'Message Sent ✓' : 'Send Message'}</span>
          </button>
        </div>
      </div>
    </section>
  );
}

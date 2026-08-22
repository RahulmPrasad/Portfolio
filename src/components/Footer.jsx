"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, X as XIcon, Figma, Copy, Check } from "lucide-react";
import "./Footer.css";

const EMAIL = "hello@example.com";

const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { label: "GitHub", href: "https://github.com", icon: Github },
  { label: "X", href: "https://x.com", icon: XIcon },
  { label: "Figma", href: "https://figma.com", icon: Figma },
];

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable (e.g. insecure context) — nothing to fall back to.
    }
  };

  return (
    <footer className="contact-footer">
      <div className="contact-footer-inner">
        <motion.p
          className="contact-eyebrow"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Contact
        </motion.p>

        <motion.div
          className="contact-badge"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="contact-badge-dot" />
          Open to new roles, collaborations, and great conversations.
        </motion.div>

        <motion.h2
          className="contact-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Let&apos;s build something{" "}
          <span className="contact-heading-accent">thoughtful</span> together
        </motion.h2>

        <motion.button
          type="button"
          className="contact-email-pill"
          onClick={copyEmail}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {EMAIL}
          {copied ? <Check size={16} /> : <Copy size={16} />}
        </motion.button>

        <div className="contact-find-me">
          <span className="contact-find-me-label">Also find me on</span>
          <div className="contact-social-row">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-icon"
                aria-label={link.label}
              >
                <link.icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="contact-footer-bottom">
        <span>© {new Date().getFullYear()} Rahul Prasad</span>
        <span className="contact-footer-dot">✦</span>
        <span>
          Built with <strong>Claude Code</strong>
        </span>
      </div>
    </footer>
  );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import "./CaseStudyView.css";

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
};

export default function CaseStudyView({ study, onClose }) {
  const { eyebrow, title, subtitle, subheading, role, impact, sections } = study;

  return (
    <article className="case-study">
      <div className="case-study-inner">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          {onClose ? (
            <button type="button" className="case-study-back" onClick={onClose}>
              <span aria-hidden="true">←</span> Minimize
            </button>
          ) : (
            <Link href="/#currently-building" className="case-study-back">
              <span aria-hidden="true">←</span> Back to all work
            </Link>
          )}
        </motion.div>

        <header className="case-study-header">
          <motion.p
            className="case-study-eyebrow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            {eyebrow} · {subtitle}
          </motion.p>

          <motion.h1
            className="case-study-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {title}
          </motion.h1>

          <motion.p
            className="case-study-subheading"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
          >
            {subheading}
          </motion.p>
        </header>

        <motion.div
          className="case-study-meta"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.24 }}
        >
          <div className="case-study-meta-col">
            <p className="case-study-meta-label">My Role</p>
            <ul>
              {role.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="case-study-meta-col">
            <p className="case-study-meta-label">Impact</p>
            <ul>
              {impact.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </motion.div>

        <div className="case-study-sections">
          {sections.map((section, i) => (
            <motion.section
              key={i}
              className="case-study-section"
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.05 }}
            >
              <h2>{section.heading}</h2>
              {section.paragraphs.map((p, j) => (
                <p key={j}>{p}</p>
              ))}
            </motion.section>
          ))}
        </div>

        <motion.footer
          className="case-study-footer"
          {...fadeUp}
          transition={{ duration: 0.6 }}
        >
          <p>
            Written by <strong>Rahul Prasad</strong>, Product &amp; Software Designer.
            <br />
            Contact:{" "}
            <a href="mailto:hello@example.com">hello@example.com</a>
          </p>
          {onClose ? (
            <button type="button" className="case-study-footer-link" onClick={onClose}>
              ← Minimize
            </button>
          ) : (
            <Link href="/#currently-building" className="case-study-footer-link">
              ← Back to all work
            </Link>
          )}
        </motion.footer>
      </div>
    </article>
  );
}

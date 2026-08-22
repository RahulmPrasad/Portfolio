"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { getCaseStudy } from "@/data/caseStudies";
import "./CaseStudyView.css";

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
};

// Accepts either a `slug` (resolved here, client-side — needed on the route
// page since the study's `impact` icons can't cross the server/client
// boundary as props) or an already-resolved `study` object (used by the
// modal, which is client-to-client and has no such restriction).
export default function CaseStudyView({ slug, study: studyProp, onClose }) {
  const study = studyProp ?? (slug ? getCaseStudy(slug) : null);

  if (!study) return null;

  const { eyebrow, title, subtitle, image, subheading, tldr, role, impact, sections } = study;
  const [view, setView] = useState("detailed");
  const rootRef = useRef(null);
  const scrollElRef = useRef(null);
  const [showToTop, setShowToTop] = useState(false);

  // Finds the nearest scrollable ancestor (the modal's own scroll panel, if
  // we're inside one) so the "scroll to top" affordance and its visibility
  // threshold work the same whether this renders as a full page or a modal.
  useEffect(() => {
    let node = rootRef.current?.parentElement ?? null;
    let scrollEl = window;
    while (node) {
      const { overflowY } = window.getComputedStyle(node);
      if (overflowY === "auto" || overflowY === "scroll") {
        scrollEl = node;
        break;
      }
      node = node.parentElement;
    }
    scrollElRef.current = scrollEl;

    const getTop = () => (scrollEl === window ? window.scrollY : scrollEl.scrollTop);
    const onScroll = () => setShowToTop(getTop() > 480);
    scrollEl.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => scrollEl.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    scrollElRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <article className="case-study" ref={rootRef}>
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

        <motion.p
          className="case-study-tag"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          {eyebrow} · {subtitle}
        </motion.p>

        {image && (
          <motion.div
            className="case-study-hero"
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <img src={image} alt={title} />
          </motion.div>
        )}

        <motion.div
          className="case-study-toggle"
          role="tablist"
          aria-label="View mode"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18 }}
        >
          {["detailed", "tldr"].map((mode) => (
            <button
              key={mode}
              type="button"
              role="tab"
              aria-selected={view === mode}
              className="case-study-toggle-btn"
              onClick={() => setView(mode)}
            >
              {view === mode && (
                <motion.span
                  layoutId="case-study-toggle-pill"
                  className="case-study-toggle-pill"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              <span className="case-study-toggle-label">
                {mode === "detailed" ? "Detailed" : "TL;DR"}
              </span>
            </button>
          ))}
        </motion.div>

        <header className="case-study-header">
          <motion.h1
            className="case-study-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
          >
            {title}
          </motion.h1>

          <motion.p
            className="case-study-subheading"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {subheading}
          </motion.p>
        </header>

        <AnimatePresence mode="wait">
          {view === "tldr" ? (
            <motion.div
              key="tldr"
              className="case-study-tldr"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <p>{tldr}</p>
            </motion.div>
          ) : (
            <motion.div
              key="detailed"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <section className="case-study-block">
                <p className="case-study-label">My Role</p>
                <p className="case-study-role">{role}</p>
              </section>

              <section className="case-study-block">
                <p className="case-study-label">Impact</p>
                <ul className="case-study-impact-list">
                  {impact.map(({ icon: Icon, title: itemTitle, description }, i) => (
                    <li key={i} className="case-study-impact-item">
                      <div className="case-study-impact-heading">
                        <span className="case-study-impact-icon">
                          <Icon size={16} aria-hidden="true" />
                        </span>
                        <p>{itemTitle}</p>
                      </div>
                      <p className="case-study-impact-desc">{description}</p>
                    </li>
                  ))}
                </ul>
              </section>

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
                    {section.media && (
                      <div className="case-study-media">
                        {section.media.type === "video" ? (
                          <video
                            src={section.media.src}
                            autoPlay
                            loop
                            muted
                            playsInline
                          />
                        ) : (
                          <img src={section.media.src} alt={section.media.alt ?? ""} />
                        )}
                      </div>
                    )}
                  </motion.section>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.footer className="case-study-footer" {...fadeUp} transition={{ duration: 0.6 }}>
          <p>
            Written by <strong>Rahul Prasad</strong>, Product &amp; Software Designer.
            <br />
            Contact: <a href="mailto:hello@example.com">hello@example.com</a>
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

      <AnimatePresence>
        {showToTop && (
          <motion.button
            type="button"
            className="case-study-to-top"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowUp size={16} />
          </motion.button>
        )}
      </AnimatePresence>
    </article>
  );
}

"use client";

import { motion } from "framer-motion";
import { Heart, Image as ImageIcon, Code2, Briefcase, Palette, Sparkles } from "lucide-react";
import "./WhatICanDo.css";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, delay },
});

const iconTiles = [Heart, ImageIcon, Code2, Briefcase, Palette, Sparkles];

export default function WhatICanDo() {
  return (
    <section className="wicd">
      <motion.h2 className="wicd-title" {...fadeUp(0)}>
        <span className="wicd-title-muted">WHAT</span> I CAN DO
      </motion.h2>
      <motion.p className="wicd-subtitle" {...fadeUp(0.1)}>
        Explore a suite of design &amp; development skills to elevate your brand.
      </motion.p>

      <div className="wicd-row wicd-row-top">
        <motion.article className="wicd-card wicd-card-lg" {...fadeUp(0.15)}>
          <div className="wicd-card-text">
            <h3>Web/Mobile UI UX</h3>
            <p>
              SaaS dashboards, marketing sites, and mobile apps — end-to-end
              interface design backed by a reusable component system.
            </p>
          </div>
          <div className="wicd-visual wicd-visual-uiux">
            {/* Two "app screen" skeletons, not screenshots — a permanently
                mid-load shimmer reads as a live interface rather than a
                photo of one. */}
            <motion.div
              className="wicd-skeleton-phone wicd-phone"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="wicd-skeleton-dot-row">
                <span className="wicd-skeleton-avatar" />
                <span className="wicd-skeleton-line" style={{ width: "60%" }} />
              </div>
              <span className="wicd-skeleton-line" style={{ width: "90%" }} />
              <span className="wicd-skeleton-line" style={{ width: "75%" }} />
              <span className="wicd-skeleton-line" style={{ width: "85%" }} />
            </motion.div>
            <motion.div
              className="wicd-skeleton-phone wicd-panel"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            >
              <div className="wicd-skeleton-dot-row">
                <span className="wicd-skeleton-avatar" />
                <span className="wicd-skeleton-line" style={{ width: "40%" }} />
              </div>
              <span className="wicd-skeleton-line" style={{ width: "95%" }} />
              <span className="wicd-skeleton-line" style={{ width: "65%" }} />
            </motion.div>
          </div>
        </motion.article>

        <motion.article className="wicd-card wicd-card-lg" {...fadeUp(0.22)}>
          <div className="wicd-card-text">
            <h3>Website Development</h3>
            <p>
              Fast, responsive marketing sites and web apps built with Next.js
              — from first pixel to production deploy.
            </p>
          </div>
          <div className="wicd-visual wicd-visual-web">
            {/* An animated browser window, not a screenshot — traffic
                lights, an address bar, a shimmering content skeleton, and
                an indeterminate progress bar standing in for "building". */}
            <div className="wicd-browser">
              <div className="wicd-browser-bar">
                <span className="wicd-browser-dot red" />
                <span className="wicd-browser-dot amber" />
                <span className="wicd-browser-dot green" />
                <span className="wicd-browser-address" />
              </div>
              <div className="wicd-browser-body">
                <span className="wicd-skeleton-line" style={{ width: "70%" }} />
                <span className="wicd-skeleton-line" style={{ width: "95%" }} />
                <span className="wicd-skeleton-line" style={{ width: "55%" }} />
                <div className="wicd-browser-progress-track">
                  <motion.div
                    className="wicd-browser-progress-fill"
                    animate={{ x: ["-100%", "250%"] }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.article>
      </div>

      <div className="wicd-row wicd-row-bottom">
        <motion.article className="wicd-card wicd-card-sm" {...fadeUp(0.28)}>
          <div className="wicd-card-text">
            <h3>Branding &amp; Logo</h3>
            <p>Logo marks, color systems, and lightweight guidelines that hold up across a whole product.</p>
          </div>
          <div className="wicd-visual wicd-visual-brand">
            {/* A morphing mark instead of a logo screenshot — two shapes
                counter-rotating at different speeds — plus a color system
                pulsing through its palette in sequence. */}
            <div className="wicd-brandmark">
              <motion.div
                className="wicd-brandmark-shape a"
                animate={{ rotate: [0, 360], borderRadius: ["30%", "50%", "30%"] }}
                transition={{
                  rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                  borderRadius: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                }}
              />
              <motion.div
                className="wicd-brandmark-shape b"
                animate={{ rotate: [360, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
            </div>
            <div className="wicd-swatch-row">
              {["#0f4c5c", "#ec4899", "#8b5cf6", "#22c55e"].map((color, i) => (
                <motion.span
                  key={color}
                  className="wicd-swatch"
                  style={{ background: color }}
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{
                    duration: 1.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
          </div>
        </motion.article>

        <motion.article className="wicd-card wicd-card-sm" {...fadeUp(0.34)}>
          <div className="wicd-card-text">
            <h3>Web Motion</h3>
            <p>Scroll-driven reveals and shared-element transitions that make an interface feel alive.</p>
          </div>
          <div className="wicd-visual wicd-visual-motion">
            {/* Was a static shape on a card literally titled "Web Motion" —
                now it actually moves: a slow continuous spin paired with a
                separate, slower morph between a squircle and a blob. */}
            <motion.div
              className="wicd-motion-shape"
              animate={{
                rotate: [0, 360],
                borderRadius: ["24px", "45%", "24px"],
              }}
              transition={{
                rotate: { duration: 9, repeat: Infinity, ease: "linear" },
                borderRadius: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
              }}
            />
          </div>
        </motion.article>

        <motion.article className="wicd-card wicd-card-sm" {...fadeUp(0.4)}>
          <div className="wicd-card-text">
            <h3>Illustration &amp; Icon</h3>
            <p>Custom icon sets and lightweight illustration work to give a product its own visual voice.</p>
          </div>
          <div className="wicd-visual wicd-visual-icons">
            {iconTiles.map((Icon, i) => (
              <motion.div
                key={i}
                className="wicd-icon-tile"
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.15,
                }}
              >
                <Icon size={18} />
              </motion.div>
            ))}
          </div>
        </motion.article>
      </div>
    </section>
  );
}

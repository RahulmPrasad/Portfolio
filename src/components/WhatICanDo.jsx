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
            <img src="/Intasohn-mobile.png" alt="" className="wicd-phone" />
            <img src="/int1.png" alt="" className="wicd-panel" />
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
            <img src="/aps1.png" alt="" />
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
            <img src="/int4.png" alt="" />
          </div>
        </motion.article>

        <motion.article className="wicd-card wicd-card-sm" {...fadeUp(0.34)}>
          <div className="wicd-card-text">
            <h3>Web Motion</h3>
            <p>Scroll-driven reveals and shared-element transitions that make an interface feel alive.</p>
          </div>
          <div className="wicd-visual wicd-visual-motion">
            <div className="wicd-motion-shape" />
          </div>
        </motion.article>

        <motion.article className="wicd-card wicd-card-sm" {...fadeUp(0.4)}>
          <div className="wicd-card-text">
            <h3>Illustration &amp; Icon</h3>
            <p>Custom icon sets and lightweight illustration work to give a product its own visual voice.</p>
          </div>
          <div className="wicd-visual wicd-visual-icons">
            {iconTiles.map((Icon, i) => (
              <div key={i} className="wicd-icon-tile">
                <Icon size={18} />
              </div>
            ))}
          </div>
        </motion.article>
      </div>
    </section>
  );
}

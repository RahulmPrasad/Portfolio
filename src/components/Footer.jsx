"use client";

import { useLayoutEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Github, Linkedin, Mail, ArrowUp, ArrowUpRight } from "lucide-react";
import "./Footer.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const sitemapLinks = [
  { label: "Story", href: "#story" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { label: "Email", href: "mailto:hello@example.com", icon: Mail },
];

function MagneticButton({ children, href }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.2 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.2 });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * 0.35);
    y.set(relY * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      className="magnetic-btn"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
    >
      <span>{children}</span>
      <ArrowUpRight className="magnetic-btn-icon" size={18} />
    </motion.a>
  );
}

function MaskedHeading({ text, className = "" }) {
  const words = text.split(" ");
  return (
    <h2 className={`footer-heading ${className}`}>
      {words.map((word, i) => (
        <span className="mask-word" key={i}>
          <span className="mask-word-inner">{word}&nbsp;</span>
        </span>
      ))}
    </h2>
  );
}

export default function Footer() {
  const footerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".mask-word-inner", { yPercent: 100 });
      gsap.to(".mask-word-inner", {
        yPercent: 0,
        stagger: 0.04,
        ease: "none",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
          end: "top 45%",
          scrub: 0.5,
        },
      });

      gsap.utils.toArray(".aurora-blob").forEach((blob, i) => {
        gsap.to(blob, {
          yPercent: i % 2 === 0 ? -18 : 18,
          ease: "none",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.5,
          },
        });
      });

      gsap.from(".footer-fade-up", {
        y: 30,
        opacity: 0,
        stagger: 0.08,
        ease: "none",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 70%",
          end: "top 30%",
          scrub: 0.5,
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="footer-reveal-wrapper">
      <footer className="cinematic-footer" ref={footerRef}>
        <div className="footer-aurora">
          <div className="aurora-blob aurora-blob--blue" />
          <div className="aurora-blob aurora-blob--purple" />
          <div className="aurora-blob aurora-blob--teal" />
        </div>
        <div className="footer-grid-overlay" />

        <div className="footer-marquee">
          <div className="footer-marquee-track">
            {Array.from({ length: 2 }).map((_, i) => (
              <span key={i} className="footer-marquee-group">
                {Array.from({ length: 6 }).map((_, j) => (
                  <span key={j} className="footer-marquee-item">
                    Let&apos;s work together <span className="marquee-dot">✦</span>
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>

        <div className="footer-content">
          <div className="footer-top">
            <p className="footer-note footer-fade-up">got a project in mind?</p>
            <MaskedHeading text="Let's build something Great" />
            <div className="footer-fade-up">
              <MagneticButton href="#contact">Say Hello</MagneticButton>
            </div>
          </div>

          <div className="footer-columns footer-fade-up">
            <div className="footer-column footer-brand">
              <span className="footer-logo">Rahul Prasad</span>
              <p className="footer-tagline">
                Designing and building products that feel as good as they work.
              </p>
            </div>

            <div className="footer-column">
              <span className="footer-column-title">Sitemap</span>
              <nav className="footer-column-links">
                {sitemapLinks.map((link) => (
                  <a key={link.label} href={link.href}>
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="footer-column">
              <span className="footer-column-title">Connect</span>
              <nav className="footer-column-links">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    <link.icon size={15} />
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          <div className="footer-bottom footer-fade-up">
            <span>© {new Date().getFullYear()} Rahul Prasad. All rights reserved.</span>
            <button className="footer-back-to-top" onClick={scrollToTop} aria-label="Back to top">
              <ArrowUp size={16} />
              Back to top
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import ScrollStack from "./ui/ScrollStack";
import CaseStudyModal from "./CaseStudyModal";
import { getCaseStudy } from "@/data/caseStudies";
import { onLenisReady } from "@/lib/lenis";
import "./CurrentlyBuilding.css";

const projects = [
  {
    slug: "sparrow-api-errors",
    title: "How We Made API Errors Less of a Headache in Sparrow",
    subtitle: "Sparrow AI",
    description: "This is the story of how I led the design of Sparrow’s API Error Copilot, working closely with engineers, PMs, and our AI team to make Sparrow AI a real debugging companion — not just a smart add-on.",
    image: "https://framerusercontent.com/images/elmW9GbYcA4tCuS8DgcR7wUhus.png?width=4864&height=2200",
  },
  {
    slug: "polystox-mobile",
    title: "Squeezing a Web Platform onto a Phone?",
    subtitle: "Polystox Case Study - Part 1",
    description: "So, the stage is set. Polystox, a successful polymer trading web platform, needs to go mobile. The initial request: 'Create a native mobile app...' ",
    image: "https://framerusercontent.com/images/6RY2hSZsomPvEIsPhxBYVy5vSw.png?width=5760&height=2880",
  },
  {
    slug: "sparrow-design-language",
    title: "Revamping the Sparrow Website & Forging a New Design Language",
    subtitle: "Sparrow Design",
    description: "Well, what started as a 'let's make this look better' project quickly snowballed into a full-blown mission to define a new visual identity.",
    image: "https://framerusercontent.com/images/LEqROcmPmHoaEj7B6RShFNIjU.png?width=3640&height=2240",
  }
];

export default function CurrentlyBuilding() {
  const [openSlug, setOpenSlug] = useState(null);
  // Snapshot of the clicked card's position/size + viewport at open time.
  // Kept alive until the closing animation finishes so the modal has
  // something valid to animate back down to.
  const [selection, setSelection] = useState(null); // { slug, rect, viewport }
  const cardRefs = useRef({});

  const openProject = useCallback((slug) => {
    const el = cardRefs.current[slug];
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setSelection({
      slug,
      rect: { top: rect.top, left: rect.left, width: rect.width, height: rect.height },
      viewport: { width: window.innerWidth, height: window.innerHeight },
    });
    setOpenSlug(slug);
  }, []);

  const closeProject = useCallback(() => setOpenSlug(null), []);
  const handleExitComplete = useCallback(() => setSelection(null), []);

  // Lock page scroll while the case study is expanded full-screen. Lenis
  // drives its own smooth-scroll loop on the whole document, so just
  // hiding overflow isn't enough — it keeps hijacking wheel input and
  // scrolling the page behind the modal (the footer creeping up through
  // it) instead of letting the modal's own content scroll. Pausing Lenis
  // for as long as the modal is open fixes that.
  useEffect(() => {
    if (!openSlug) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    let lenisInstance = null;
    const unsubscribe = onLenisReady((lenis) => {
      lenisInstance = lenis;
      lenis.stop();
    });

    return () => {
      document.body.style.overflow = previousOverflow;
      unsubscribe();
      lenisInstance?.start();
    };
  }, [openSlug]);

  // Let Escape minimize the expanded case study back down.
  useEffect(() => {
    if (!openSlug) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") closeProject();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [openSlug, closeProject]);

  const activeStudy = selection ? getCaseStudy(selection.slug) : null;

  return (
    <section className="currently-building" id="currently-building">
      <div className="section-header">
        <motion.p
          className="header-note"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          a quick peek into the live projects that I'm cooking for sometime
        </motion.p>
        <motion.h2
          className="header-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Currently I'm <span className="serif-italic">Building</span>
        </motion.h2>
      </div>

      <ScrollStack
        className="projects-stack"
        itemStackDistance={50}
        stackPosition={0.15}
      >
        {projects.map((project, index) => (
          <div key={index} className="scroll-stack-card-wrapper">
            <div
              ref={(el) => { cardRefs.current[project.slug] = el; }}
              className="scroll-stack-card project-card"
              role="button"
              tabIndex={0}
              onClick={() => openProject(project.slug)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  openProject(project.slug);
                }
              }}
              style={{ visibility: openSlug === project.slug ? "hidden" : "visible" }}
            >
              <div className="card-content">
                <div className="text-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                  <p className="project-description">{project.description}</p>
                  <span className="open-case-study">
                    Open Case Study <span>↗</span>
                  </span>
                </div>
                <div className="image-content">
                  <img src={project.image} alt={project.title} className="project-image" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </ScrollStack>

      <CaseStudyModal
        isOpen={Boolean(openSlug)}
        study={activeStudy}
        rect={selection?.rect}
        viewport={selection?.viewport}
        onClose={closeProject}
        onExitComplete={handleExitComplete}
      />
    </section>
  );
}

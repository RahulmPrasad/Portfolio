"use client";

import { motion } from "framer-motion";
import ScrollStack from "./ui/ScrollStack";
import "./CurrentlyBuilding.css";

const projects = [
  {
    title: "How We Made API Errors Less of a Headache in Sparrow",
    subtitle: "Sparrow AI",
    description: "This is the story of how I led the design of Sparrow’s API Error Copilot, working closely with engineers, PMs, and our AI team to make Sparrow AI a real debugging companion — not just a smart add-on.",
    image: "https://framerusercontent.com/images/elmW9GbYcA4tCuS8DgcR7wUhus.png?width=4864&height=2200",
    link: "#"
  },
  {
    title: "Squeezing a Web Platform onto a Phone?",
    subtitle: "Polystox Case Study - Part 1",
    description: "So, the stage is set. Polystox, a successful polymer trading web platform, needs to go mobile. The initial request: 'Create a native mobile app...' ",
    image: "https://framerusercontent.com/images/6RY2hSZsomPvEIsPhxBYVy5vSw.png?width=5760&height=2880",
    link: "#"
  },
  {
    title: "Revamping the Sparrow Website & Forging a New Design Language",
    subtitle: "Sparrow Design",
    description: "Well, what started as a 'let's make this look better' project quickly snowballed into a full-blown mission to define a new visual identity.",
    image: "https://framerusercontent.com/images/LEqROcmPmHoaEj7B6RShFNIjU.png?width=3640&height=2240",
    link: "#"
  }
];

export default function CurrentlyBuilding() {
  return (
    <section className="currently-building">
      <div className="section-header">
        <motion.p 
          className="header-note"
          initial={{ opacity: 0, rotate: -5 }}
          whileInView={{ opacity: 1, rotate: -2 }}
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
            <div className="scroll-stack-card project-card">
              <div className="card-content">
                <div className="text-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                  <p className="project-description">{project.description}</p>
                  <a href={project.link} className="open-case-study">
                    Open Case Study <span>↗</span>
                  </a>
                </div>
                <div className="image-content">
                  <img src={project.image} alt={project.title} className="project-image" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </ScrollStack>
    </section>
  );
}

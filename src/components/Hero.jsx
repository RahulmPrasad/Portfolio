"use client";

import { motion } from "framer-motion";
import { PearlButton } from "./ui/pearl-button";
import "./Hero.css";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const headlineVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 20,
    },
  },
};

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid"></div>
      <motion.div 
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Image */}
        <motion.div className="profile-container" variants={itemVariants}>
          <img
            src="666.png"
            alt="Rahul Prasad"
            className="profile-img"
          />
        </motion.div>

        {/* Available Badge */}
        <motion.div className="available-badge" variants={itemVariants}>
          <span className="dot"></span>
          Available Now
        </motion.div>

        {/* Greeting */}
        <motion.h3 className="hero-greeting" variants={itemVariants}>
          Hello, I'm Rahul Prasad
        </motion.h3>

        {/* Main Headline */}
        <motion.h1 className="hero-headline" variants={headlineVariants}>
          Not just user <span className="serif-italic">friendly!</span>
          <br />
          Its user <span className="serif-italic">certified.</span>
        </motion.h1>

        {/* Experience Indicator */}
        <motion.div className="experience-badge" variants={itemVariants}>
          <span className="orange-dot"></span>
          3+ Years of Experience
        </motion.div>

        {/* Buttons */}
        <motion.div className="hero-actions" variants={itemVariants}>
          <PearlButton href="#contact" size="md" icon={null} hoverIcon={null}>
            Let's Talk <span className="arrow">↗</span>
          </PearlButton>
          <PearlButton href="/resume.pdf" size="md" variant="white" icon={null} hoverIcon={null}>
            View Resume
          </PearlButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import "./Projects.css";

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 }
  }
};

export default function Projects() {
  return (
    <section className="projects-section">
      <div className="projects-container">
        <div className="project-wrapper-top">
          <div className="project-card-1">

          </div>

          <div className="project-card-2">
            
          </div>

          <div className="project-card-3">
            
          </div>
        </div>

        <div className="project-wrapper-bottom">
          <div className="project-card-4">
            
          </div>

          <div className="project-bottom-middle-wrapper">
            <div className="project-card-5">
            
            </div>

            <div className="project-card-6">
            
            </div>
          </div>

          <div className="project-card-7">
            
          </div>
        </div>
        {/* <div className="section-header">
          <motion.p
            className="header-note"
            initial={{ opacity: 0, rotate: -5 }}
            whileInView={{ opacity: 1, rotate: -2 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            some of my recent bento works
          </motion.p>
          <motion.h2
            className="header-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Selected <span className="serif-italic">Projects</span>
          </motion.h2>
        </div>

        <motion.div
          className="bento-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.1 }}
        > */}
          {/* Top Row */}
          {/* <motion.div
            className="bento-item item-laptop"
            variants={cardVariants}
            whileHover={{ scale: 0.98, transition: { duration: 0.4 } }}
          >
            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop" alt="Laptop Dashboard Mockup" />
          </motion.div>

          <motion.div
            className="bento-item item-water"
            variants={cardVariants}
            whileHover={{ scale: 0.98, transition: { duration: 0.4 } }}
          >
            <img src="https://images.unsplash.com/photo-1550596334-a719d36be8e4?q=80&w=1964&auto=format&fit=crop" alt="Water Drops Macro" />
          </motion.div>

          <motion.div
            className="bento-item item-billboard"
            variants={cardVariants}
            whileHover={{ scale: 0.98, transition: { duration: 0.4 } }}
          >
            <img src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=2065&auto=format&fit=crop" alt="Building Architecture" />
            <div className="billboard-overlay">
              <h3>Plant Care at Heart</h3>
            </div>
          </motion.div> */}

          {/* Bottom Row */}
          {/* <motion.div
            className="bento-item item-person-left"
            variants={cardVariants}
            whileHover={{ scale: 0.98, transition: { duration: 0.4 } }}
          >
            <div className="person-left-content">
              <div className="person-circle-wrapper">
                <div className="decorative-circles"></div>
                <div className="person-circle">
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop" alt="Person Smiling" />
                </div>
              </div>
              <h4>Transform your space with Plantons</h4>
              <p className="visit-link">PLANTONS.COM</p>
            </div>
          </motion.div>

          <motion.div
            className="bento-item item-logo"
            variants={cardVariants}
            whileHover={{ scale: 0.98, transition: { duration: 0.4 } }}
          >
            <div className="logo-center">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#6ce288" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22V12" /><path d="M12 8a4 4 0 0 1 4 4v4" /><path d="M12 8a4 4 0 0 0-4 4v4" /></svg>
              Plantons
            </div>
          </motion.div>

          <motion.div
            className="bento-item item-person-right"
            variants={cardVariants}
            whileHover={{ scale: 0.98, transition: { duration: 0.4 } }}
          >
            <img src="https://images.unsplash.com/photo-1620242204481-420dbbd1b8fa?q=80&w=1964&auto=format&fit=crop" alt="Person Right holding plant" />
          </motion.div>

          <motion.div
            className="bento-item item-icons"
            variants={cardVariants}
            whileHover={{ scale: 0.98, transition: { duration: 0.4 } }}
          >
            <div className="icons-grid">
              <span>
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path></svg>
              </span>
              <span>
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="3"></circle><path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line></svg>
              </span>
              <span>
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22V12"></path><path d="M12 8A4 4 0 0 1 16 12v4"></path><path d="M12 8A4 4 0 0 0 8 12v4"></path></svg>
              </span>
              <span>
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><line x1="10" y1="9" x2="8" y2="9"></line></svg>
              </span>
            </div>
          </motion.div>

          <motion.div
            className="bento-item item-3d-logo"
            variants={cardVariants}
            whileHover={{ scale: 0.98, transition: { duration: 0.4 } }}
          >
            <img src="https://images.unsplash.com/photo-1549479383-7d889ed1c0f0?q=80&w=2070&auto=format&fit=crop" alt="3d Plant Logo" />
          </motion.div>

        </motion.div> */}


      </div>
    </section>
  );
}

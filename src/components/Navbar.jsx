"use client";

import { useState, useEffect } from "react";
import { motion, useMotionValueEvent, useScroll, AnimatePresence } from "framer-motion";
import "./Navbar.css";

const navLinks = [
    { label: "Story", href: "#story" },
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "LinkedIn", href: "https://linkedin.com", external: true },
];

export default function Navbar() {
    const [hidden, setHidden] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (latest > previous && latest > 80) {
            setHidden(true);
            setIsMenuOpen(false); // Close menu on scroll down
        } else {
            setHidden(false);
        }
    });

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <motion.header
            className="navbar"
            variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: "-120%", opacity: 0 },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
        >
            <div className="navbar-inner">
                {/* Logo */}
                <a href="/" className="navbar-logo">
                    <img src="/logo2.png" />
                    <span className="logo-name">Rahul Prasad</span>
                </a>

                {/* Nav Links - Desktop Only */}
                <nav className="navbar-links desktop-only">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className={`nav-link ${link.external ? "nav-link--external" : ""}`}
                            {...(link.external
                                ? { target: "_blank", rel: "noopener noreferrer" }
                                : {})}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* Right Side - Resume & Toggle */}
                <div className="navbar-right">
                    <a href="/resume.pdf" className="navbar-resume desktop-only" target="_blank" rel="noopener noreferrer">
                        Resume
                    </a>

                    <button 
                        className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
                        onClick={toggleMenu}
                        aria-label="Toggle Menu"
                    >
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div 
                            className="mobile-menu"
                            initial={{ opacity: 0, y: -20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                        >
                            <div className="mobile-menu-links">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        className={`mobile-nav-link ${link.external ? "nav-link--external" : ""}`}
                                        onClick={() => setIsMenuOpen(false)}
                                        {...(link.external
                                            ? { target: "_blank", rel: "noopener noreferrer" }
                                            : {})}
                                    >
                                        {link.label}
                                    </a>
                                ))}
                                <a 
                                    href="/resume.pdf" 
                                    className="mobile-resume-btn" 
                                    onClick={() => setIsMenuOpen(false)}
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    Resume
                                </a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.header>
    );
}
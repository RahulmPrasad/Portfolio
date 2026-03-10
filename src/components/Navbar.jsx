"use client";

import { useState, useEffect } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
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
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (latest > previous && latest > 80) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

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

                {/* Nav Links */}
                <nav className="navbar-links">
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

                {/* Resume Button */}
                <a href="/resume.pdf" className="navbar-resume" target="_blank" rel="noopener noreferrer">
                    Resume
                </a>
            </div>
        </motion.header>
    );
}
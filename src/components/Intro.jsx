"use client";

import { Suspense, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { PearlButton } from "./ui/pearl-button";
import "./Intro.css";

const Lanyard = dynamic(() => import("./Lanyard"), { ssr: false });

const iconRenderConfig = {
  devicePixelRatio: (typeof window !== "undefined" ? window.devicePixelRatio : 1) * 2,
  autoResize: true,
};

// Below this width .intro-section stacks into a column (see Intro.css) and
// the lanyard layer goes from a full-bleed absolute backdrop to a bounded,
// in-flow box above the text — so the camera needs to sit further back to
// keep the whole card + lanyard band inside that shorter box instead of
// spilling past its edges.
const MOBILE_BREAKPOINT = 1024;

export default function Intro() {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" && window.innerWidth <= MOBILE_BREAKPOINT
  );

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <section className="intro-section">
      {/* Desktop: full-bleed canvas behind the text, so dragging the card
          never gets clipped at a small box's edge — only the camera framing
          keeps its resting position over on the left. Mobile: a bounded,
          in-flow box above the text (see Intro.css), so the camera sits
          further back (position below) to still fit the whole card. */}
      <div className="intro-lanyard-layer">
        <Suspense fallback={null}>
          <Lanyard
            position={isMobile ? [0, 0, 22] : [0, 0, 14]}
            gravity={[0, -40, 0]}
            frontImage="/me.jpeg"
          />
        </Suspense>
      </div>

      <div className="intro-container">
        {/* Left Side: reserves layout space; the lanyard itself renders in
            the full-bleed layer above. */}
        <div className="intro-card-wrapper" />

        {/* Right Side: Bio Text */}
        <div className="intro-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="bio-text">
              I am Rahul, a <span className="serif-italic">Frontend
                Developer</span>
              <span className="inline-icon-wrapper">
                <DotLottieReact
                  src="https://lottie.host/ee8f6019-c24a-4bc2-b170-d17a8e8c425d/Ck727s5wMv.lottie"
                  loop
                  autoplay
                  backgroundColor="transparent"
                  renderConfig={iconRenderConfig}
                  className="inline-icon"
                />
              </span>
              and <span className="serif-italic"> UX Designer </span>focused on merging
              clean code
              <span className="inline-icon-wrapper blue-bg">
                <DotLottieReact
                  src="/lottie/web-design.json"
                  loop
                  autoplay
                  renderConfig={iconRenderConfig}
                  className="inline-icon"
                />
              </span>
              with Graphic and Product
              Design.
              <span className="inline-icon-wrapper rotate-icon">
                <DotLottieReact
                  src="https://lottie.host/b375e426-2ab8-45ed-ad01-5ae86a846a3c/qOLoKp4gMs.lottie"
                  loop
                  autoplay
                  renderConfig={iconRenderConfig}
                  className="inline-icon"
                />
              </span>.
            </h1>

            <div className="intro-actions">
              <div className="resume-stack">
                <div className="icon-badge amazon"></div>
                <PearlButton size="md" variant="white">Resume</PearlButton>
              </div>
              <PearlButton size="md">About Me</PearlButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

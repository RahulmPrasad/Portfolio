"use client";

import { motion } from "framer-motion";
import ImageStreamHero from "./ui/ImageStreamHero";
import "./ImageCorridor.css";

// Reuses the same screenshot/thumbnail assets already used around the site
// so the corridor doesn't need its own image set.
const images = [
  { src: "/int1.png" },
  { src: "/int2.png" },
  { src: "/int4.png" },
  { src: "/int5.png" },
  { src: "/aps1.png" },
  { src: "/234.png" },
  { src: "/666.png" },
  { src: "/Intasohn-mobile.png" },
];

export default function ImageCorridor() {
  return (
    <section className="image-corridor">
      <div className="section-header">
        <motion.p
          className="header-note"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          a glimpse behind the pixels
        </motion.p>
        <motion.h2
          className="header-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Moments From the <span className="serif-italic">Making</span>
        </motion.h2>
      </div>

      <ImageStreamHero
        images={images}
        cards={images.length}
        className="image-corridor-stage"
      >
        <div className="image-corridor-vignette" aria-hidden="true" />
      </ImageStreamHero>
    </section>
  );
}

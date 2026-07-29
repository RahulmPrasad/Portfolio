"use client";

import { useRef, useState } from "react";
import { motion, LayoutGroup } from "framer-motion";
import { cn } from "@/lib/utils";
import { LayoutGrid } from "./ui/LayoutGrid";
import "./GridShowcase.css";

const CardContent = ({ title, subtitle }) => (
  <div>
    <p className="grid-card-title">{title}</p>
    <p className="grid-card-subtitle">{subtitle}</p>
  </div>
);

const makeCards = (labelPrefix, images) => [
  {
    id: 1,
    content: (
      <CardContent
        title={`${labelPrefix} One`}
        subtitle="Swap this thumbnail and copy with a real case study"
      />
    ),
    className: "md:col-start-1 md:row-start-1 md:row-span-2",
    expandedAspect: "aspect-[3/4]",
    thumbnail: images[0],
  },
  {
    id: 2,
    content: (
      <CardContent
        title={`${labelPrefix} Two`}
        subtitle="Swap this thumbnail and copy with a real case study"
      />
    ),
    className: "md:col-start-2 md:row-start-1",
    expandedAspect: "aspect-square",
    thumbnail: images[1],
  },
  {
    id: 3,
    content: (
      <CardContent
        title={`${labelPrefix} Three`}
        subtitle="Swap this thumbnail and copy with a real case study"
      />
    ),
    className: "md:col-start-3 md:row-start-1",
    expandedAspect: "aspect-square",
    thumbnail: images[2],
  },
  {
    id: 4,
    content: (
      <CardContent
        title={`${labelPrefix} Four`}
        subtitle="Swap this thumbnail and copy with a real case study"
      />
    ),
    className: "md:col-start-2 md:col-span-2 md:row-start-2",
    expandedAspect: "aspect-[2/1]",
    thumbnail: images[3],
  },
];

const slides = [
  {
    id: "slide-1",
    cards: makeCards("Placeholder Project", ["/int1.png", "/int4.png", "/int5.png", "/logo2.png"]),
  },
  {
    id: "slide-2",
    cards: makeCards("Another Placeholder", ["/aps1.png", "/logo2.png", "/me.jpeg", "/666.png"]),
  },
  {
    id: "slide-3",
    cards: makeCards("More Placeholder Work", ["/666.png", "/me.jpeg", "/logo2.png", "/234.png"]),
  },
];

export default function GridShowcase() {
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollTo({ left: index * track.clientWidth, behavior: "smooth" });
  };

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const index = Math.round(track.scrollLeft / track.clientWidth);
    setActiveIndex(index);
  };

  return (
    <section className="grid-showcase">
      <div className="section-header">
        <motion.p
          className="header-note"
          initial={{ opacity: 0, rotate: -5 }}
          whileInView={{ opacity: 1, rotate: -2 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          scroll sideways for more — each grid auto-rotates too
        </motion.p>
        <motion.h2
          className="header-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          More <span className="serif-italic">Work</span>
        </motion.h2>
      </div>

      <div className="layout-grid-carousel" ref={trackRef} onScroll={handleScroll}>
        {slides.map((slide) => (
          <div className="layout-grid-slide" key={slide.id}>
            <LayoutGroup id={slide.id}>
              <LayoutGrid cards={slide.cards} />
            </LayoutGroup>
          </div>
        ))}
      </div>

      <div className="carousel-controls">
        <button
          type="button"
          className="carousel-arrow"
          onClick={() => scrollToIndex(Math.max(activeIndex - 1, 0))}
          aria-label="Previous"
        >
          ←
        </button>
        <div className="carousel-dots">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              className={cn("carousel-dot", index === activeIndex && "active")}
              onClick={() => scrollToIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <button
          type="button"
          className="carousel-arrow"
          onClick={() => scrollToIndex(Math.min(activeIndex + 1, slides.length - 1))}
          aria-label="Next"
        >
          →
        </button>
      </div>
    </section>
  );
}

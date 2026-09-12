"use client";

import { useCallback, useEffect, useState } from "react";
import { InfiniteSlider } from "@/components/ui/infinite-slider-horizontal"
import Image from "next/image";
import CaseStudyModal from "./CaseStudyModal";
import { getCaseStudy } from "@/data/caseStudies";
import { onLenisReady } from "@/lib/lenis";

// Every card here is a shot of the same project, so they all open the same
// case study (see src/data/caseStudies.js -> "intasohn-inspection-services").
const INTASOHN_SLUG = "intasohn-inspection-services";

const images = [
  {
    title: "Intasöhn — Mobile hero (video)",
    image: "/Mockup-inttas.mp4",
    slug: INTASOHN_SLUG,
  },
  {
    title: "Intasöhn — Mobile hero",
    image: "/Mockup-Intasohn.mp4",
    slug: INTASOHN_SLUG,
  },
  {
    title: "Intasöhn — Desktop hero",
    image: "/int5.png",
    slug: INTASOHN_SLUG,
  },
  {
    title: "Intasöhn — Logo system",
    image: "/int4.png",
    slug: INTASOHN_SLUG,
  },
  {
    title: "Intasöhn — Mobile full-bleed",
    image: "/Intasohn-mobile.png",
    slug: INTASOHN_SLUG,
  },
];

function isVideo(src: string) {
  return /\.(mp4|webm|mov)$/i.test(src);
}

function SliderMedia({ title, image }: { title: string; image: string }) {
  if (isVideo(image)) {
    return (
      <video
        src={image}
        autoPlay
        loop
        muted
        playsInline
        className="object-cover h-full w-full rounded-[8px]"
      />
    );
  }

  return (
    <Image
      src={image}
      alt={title}
      width={1200}
      height={1200}
      className="object-cover h-full w-full rounded-[8px]"
    />
  );
}

export function InfiniteSliderHorizontal() {
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  // Snapshot of the clicked card's position/size + viewport at open time,
  // kept alive until the closing animation finishes (see onExitComplete)
  // so the modal always has somewhere real to animate back down to. `id`
  // identifies the exact DOM card clicked (several cards share the same
  // `slug` — they're all shots of the same project) so only that one card
  // hides while its modal is open, not every card for the project.
  const [selection, setSelection] = useState<{
    id: string;
    slug: string;
    rect: { top: number; left: number; width: number; height: number };
    viewport: { width: number; height: number };
  } | null>(null);

  const openCard = useCallback((id: string, slug: string, el: HTMLElement) => {
    const rect = el.getBoundingClientRect();
    setSelection({
      id,
      slug,
      rect: { top: rect.top, left: rect.left, width: rect.width, height: rect.height },
      viewport: { width: window.innerWidth, height: window.innerHeight },
    });
    setOpenSlug(slug);
  }, []);

  const closeCard = useCallback(() => setOpenSlug(null), []);
  const handleExitComplete = useCallback(() => setSelection(null), []);

  // Lock page scroll (and pause Lenis, which otherwise keeps driving the
  // page behind the modal) while a case study is expanded full-screen.
  useEffect(() => {
    if (!openSlug) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    let lenisInstance: { start: () => void } | null = null;
    const unsubscribe = onLenisReady((lenis: { start: () => void; stop: () => void }) => {
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
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeCard();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [openSlug, closeCard]);

  const activeStudy = selection ? getCaseStudy(selection.slug) : null;

  const renderCard = (item: (typeof images)[number], rowKey: string) => {
    const id = `${rowKey}-${item.title}`;
    return (
      <div
        key={id}
        className="aspect-square w-[300px] rounded-[8px] cursor-pointer"
        role="button"
        tabIndex={0}
        onClick={(e) => openCard(id, item.slug, e.currentTarget)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            openCard(id, item.slug, e.currentTarget);
          }
        }}
        style={{ visibility: selection?.id === id && openSlug ? "hidden" : "visible" }}
      >
        <SliderMedia title={item.title} image={item.image} />
      </div>
    );
  };

  return (
    <div className="h-full flex flex-col justify-center gap-16 py-[120px]">
      <div className="flex items-center space-x-4 mx-auto w-full max-w-max">
        <InfiniteSlider direction="horizontal">
          {images.map((image) => renderCard(image, "row1"))}
        </InfiniteSlider>
      </div>
      <div className="flex items-center space-x-4 mx-auto w-full max-w-max">
        <InfiniteSlider direction="horizontal" reverse>
          {images.map((image) => renderCard(image, "row2"))}
        </InfiniteSlider>
      </div>

      <CaseStudyModal
        isOpen={Boolean(openSlug)}
        study={activeStudy}
        rect={selection?.rect}
        viewport={selection?.viewport}
        onClose={closeCard}
        onExitComplete={handleExitComplete}
      />
    </div>
  );
}

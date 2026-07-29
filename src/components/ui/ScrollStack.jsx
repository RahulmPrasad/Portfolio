"use client";

import React, { useCallback, useLayoutEffect, useRef } from 'react';

import { onLenisReady } from '@/lib/lenis';
import './ScrollStack.css';

// Cards stay in normal document flow (position: relative) and are moved with
// a CSS transform driven directly from scroll position on every frame,
// instead of GSAP's pin (position:fixed/relative toggling), which is what
// caused the up/down snap when a card released. The "pinned" and "released"
// translateY formulas below share the same value at the handoff point, so
// there's nothing to jump.
const ScrollStack = ({
  children,
  className = '',
  itemStackDistance = 40,
  stackPosition = 0.1,
  itemScale = 0.9,
}) => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const cardTopsRef = useRef([]);

  const measure = useCallback(() => {
    const scrollY = window.scrollY;
    cardTopsRef.current = cardsRef.current.map(
      (card) => card.getBoundingClientRect().top + scrollY
    );
  }, []);

  const update = useCallback(() => {
    const cards = cardsRef.current;
    const cardTops = cardTopsRef.current;
    if (!cards.length) return;

    const scrollY = window.scrollY;
    const stackPositionPx = stackPosition * window.innerHeight;
    const transitionRange = Math.max(itemStackDistance * 4, 150);
    const lastIndex = cards.length - 1;
    const lastPinStart = cardTops[lastIndex] - stackPositionPx - itemStackDistance * lastIndex;
    const lastPinEnd = lastPinStart + Math.max(itemStackDistance * 6, 200);

    cards.forEach((card, i) => {
      const isLast = i === lastIndex;
      const cardTop = cardTops[i];
      const pinStart = cardTop - stackPositionPx - itemStackDistance * i;
      const pinEnd = isLast ? lastPinEnd : lastPinStart;

      let translateY = 0;
      if (scrollY >= pinStart && scrollY <= pinEnd) {
        translateY = scrollY - cardTop + stackPositionPx + itemStackDistance * i;
      } else if (scrollY > pinEnd) {
        translateY = pinEnd - cardTop + stackPositionPx + itemStackDistance * i;
      }

      const progress = Math.max(0, Math.min(1, (scrollY - pinStart) / transitionRange));
      const scale = isLast ? 1 : 1 - progress * (1 - itemScale);

      card.style.transform = `translate3d(0, ${translateY}px, 0) scale(${scale})`;
    });
  }, [itemStackDistance, stackPosition, itemScale]);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const cards = Array.from(container.querySelectorAll('.scroll-stack-card'));
    cardsRef.current = cards;

    cards.forEach((card) => {
      card.style.willChange = 'transform, opacity';
      card.style.transformOrigin = 'center center';
    });

    measure();
    update();

    // Lenis calls this synchronously on every one of its own smoothing
    // ticks, so the cards move in the exact same frame as the rest of the
    // page instead of trailing a frame behind a separate native-scroll +
    // rAF gate.
    let lenisInstance = null;
    const unsubscribeLenis = onLenisReady((lenis) => {
      lenisInstance = lenis;
      lenis.on('scroll', update);
    });

    const onResize = () => {
      measure();
      update();
    };
    window.addEventListener('resize', onResize);

    return () => {
      unsubscribeLenis();
      if (lenisInstance) lenisInstance.off('scroll', update);
      window.removeEventListener('resize', onResize);
      cards.forEach((card) => {
        card.style.transform = '';
        card.style.opacity = '';
      });
    };
  }, [measure, update]);

  return (
    <div className={`scroll-stack-container ${className}`} ref={containerRef}>
      <div className="scroll-stack-inner">
        {children}
      </div>
    </div>
  );
};

export default ScrollStack;

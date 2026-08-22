"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Minimize2 } from "lucide-react";
import CaseStudyView from "./CaseStudyView";
import "./CaseStudyModal.css";

const EASE = [0.22, 1, 0.36, 1];

/**
 * Expands a clicked project card into a full-screen case study, then
 * shrinks it back down to that same card on close.
 *
 * `rect`/`viewport` are a snapshot taken at click time by the parent and
 * kept alive (via `onExitComplete`) until the closing animation finishes,
 * so the collapse animation always has somewhere real to animate back to.
 */
export default function CaseStudyModal({ isOpen, study, rect, viewport, onClose, onExitComplete }) {
  const canRender = Boolean(study && rect && viewport);

  const collapsed = rect
    ? { top: rect.top, left: rect.left, width: rect.width, height: rect.height, borderRadius: 32 }
    : null;
  const expanded = viewport
    ? { top: 0, left: 0, width: viewport.width, height: viewport.height, borderRadius: 0 }
    : null;

  return (
    <AnimatePresence onExitComplete={onExitComplete}>
      {isOpen && canRender && (
        <>
          <motion.div
            className="case-study-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            className="case-study-modal-panel"
            initial={collapsed}
            animate={expanded}
            exit={collapsed}
            transition={{ duration: 0.55, ease: EASE }}
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              className="case-study-modal-close"
              onClick={onClose}
              aria-label="Minimize case study"
            >
              <Minimize2 size={18} />
            </button>

            <motion.div
              className="case-study-modal-scroll"
              data-lenis-prevent
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.28, duration: 0.35 } }}
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
            >
              <CaseStudyView study={study} onClose={onClose} />
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Wraps `children` in a slim rounded border with a slowly spinning
 * conic-gradient "shine" running around it. The gradient layer is drawn
 * oversized (-inset-full) and blurred, then clipped by the outer rounded
 * corners, so only a soft ring of color shows through the padding gap.
 */
type ShineBorderProps = {
  children: ReactNode;
  className?: string;
  borderWidth?: number;
  duration?: number;
  gradient?: string;
};

export function ShineBorder({
  children,
  className,
  borderWidth = 2,
  duration = 3,
  gradient = "from-blue-500 via-red-500 to-teal-400",
}: ShineBorderProps) {
  return (
    <div
      className={cn("relative rounded-2xl", className)}
      style={{ padding: borderWidth }}
    >
      {/* Animated Gradient Layer */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden">
        <div
          className={cn(
            "absolute -inset-full blur-sm animate-spin bg-conic",
            gradient,
          )}
          style={{ animationDuration: `${duration}s` }}
        />
      </div>

      {/* Content Layer */}
      <div className="relative rounded-2xl bg-card">{children}</div>
    </div>
  );
}

export default ShineBorder;

"use client";

import React from "react";
import "./pearl-button.css";

type PearlButtonOwnProps = {
  /** Renders an <a> instead of a <button> when set. */
  href?: string;
  size?: "sm" | "md" | "lg";
  /** "dark" (default) is the black glossy pill; "white" is the pale
   * pearlescent counterpart, e.g. for a secondary CTA. */
  variant?: "dark" | "white";
  /** Shown by default; swaps to `hoverIcon` on hover. Pass `null` to hide. */
  icon?: React.ReactNode;
  hoverIcon?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
};

export type PearlButtonProps = PearlButtonOwnProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof PearlButtonOwnProps>;

/**
 * The site's shared glossy-pill CTA — every primary button/link across the
 * site renders through this so the "pearl" treatment (gradient sheen,
 * layered shadow, hover icon-swap) stays consistent in one place instead
 * of being copy-pasted per component.
 */
export function PearlButton({
  href,
  size = "md",
  variant = "dark",
  icon = "✧",
  hoverIcon = "✦",
  className = "",
  children,
  target,
  rel,
  ...props
}: PearlButtonProps) {
  const classes = `pearl-button pearl-button--${size} pearl-button--${variant} ${className}`.trim();

  const content = (
    <span className="pearl-wrap">
      <span className="pearl-p">
        {icon !== null && <span className="pearl-icon pearl-icon--default">{icon}</span>}
        {hoverIcon !== null && <span className="pearl-icon pearl-icon--hover">{hoverIcon}</span>}
        {children}
      </span>
    </span>
  );

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {content}
    </button>
  );
}

export default PearlButton;

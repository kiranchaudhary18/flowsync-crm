"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface StaggerProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  y?: number;
  duration?: number;
  delay?: number;
  once?: boolean;
}

/**
 * SSR-safe stagger reveal.
 * Uses Framer Motion's `whileInView` with per-child delay —
 * defers the initial hidden state until after hydration.
 */
export function Stagger({
  children,
  className,
  stagger = 0.12,
  y = 32,
  duration = 0.8,
  delay = 0,
  once = true,
}: StaggerProps) {
  const items = Array.isArray(children) ? children : [children];

  return (
    <div className={className}>
      {items.map((child, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once, margin: "-80px" }}
          transition={{
            duration,
            delay: delay + i * stagger,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}
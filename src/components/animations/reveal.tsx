"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  x?: number;
  duration?: number;
  once?: boolean;
}

/**
 * SSR-safe scroll reveal.
 * Uses Framer Motion's `whileInView` which defers the initial
 * hidden state until after hydration — no server/client mismatch.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 40,
  x = 0,
  duration = 0.9,
  once = true,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
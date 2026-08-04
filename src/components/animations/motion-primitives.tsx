"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

/* ---------- Fade-in-up on view ---------- */
export function FadeInUp({
  children,
  className,
  delay = 0,
  y = 24,
  ...props
}: HTMLMotionProps<"div"> & { delay?: number; y?: number }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Scale-in on view ---------- */
export function ScaleIn({
  children,
  className,
  delay = 0,
  ...props
}: HTMLMotionProps<"div"> & { delay?: number }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Floating element (continuous) ---------- */
export function Floating({
  children,
  className,
  amplitude = 12,
  duration = 5,
  delay = 0,
  ...props
}: HTMLMotionProps<"div"> & {
  amplitude?: number;
  duration?: number;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -amplitude, 0] }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Hover lift (for cards) ---------- */
export function HoverLift({
  children,
  className,
  lift = -6,
  ...props
}: HTMLMotionProps<"div"> & { lift?: number }) {
  return (
    <motion.div
      className={className}
      whileHover={{ y: lift }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
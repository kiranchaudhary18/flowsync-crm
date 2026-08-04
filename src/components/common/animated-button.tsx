"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface AnimatedButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "ghost";
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  loading?: boolean;
  disabled?: boolean;
  magnetic?: boolean;
  target?: string;
  rel?: string;
}

export function AnimatedButton({
  children,
  className,
  variant = "primary",
  href,
  onClick,
  type = "button",
  loading = false,
  disabled = false,
  magnetic = true,
  target,
  rel,
}: AnimatedButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const baseStyles = cn(
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-medium transition-colors duration-300",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "disabled:pointer-events-none disabled:opacity-50",
    variant === "primary"
      ? "bg-linear-to-r from-blue-500 via-indigo-500 to-purple-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
      : "border border-white/15 bg-white/5 text-white backdrop-blur-sm hover:bg-white/10",
    className
  );

  const content = (
    <>
      {/* Shine sweep */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
      />
      <span className="relative z-10 flex items-center gap-2">
        {loading ? (
          <Loader2 className="size-4 animate-spin" />
        ) : (
          <>
            {children}
            {variant === "primary" && (
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            )}
          </>
        )}
      </span>
    </>
  );

  const motionProps = {
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.97 },
    transition: { type: "spring" as const, stiffness: 400, damping: 17 },
  };

  const inner = href ? (
    <motion.a
      href={href}
      className={baseStyles}
      aria-disabled={disabled}
      target={target}
      rel={rel}
      {...motionProps}
    >
      {content}
    </motion.a>
  ) : (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={baseStyles}
      {...motionProps}
    >
      {content}
    </motion.button>
  );

  /* Magnetic wrapper — subtle pull toward cursor */
  if (!magnetic) return inner;

  return (
    <motion.div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      animate={
        hovered
          ? { scale: 1.02, y: -2 }
          : { scale: 1, y: 0 }
      }
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="inline-block"
    >
      {inner}
    </motion.div>
  );
}
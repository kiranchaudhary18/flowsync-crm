"use client";

import { motion } from "framer-motion";
import type { Integration } from "@/data/integrations";

export function IntegrationCard({ integration }: { integration: Integration }) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group relative flex min-w-56 flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-7 backdrop-blur-sm transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.06]"
    >
      {/* Hover glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-16 left-1/2 h-32 w-40 -translate-x-1/2 rounded-full bg-indigo-500/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
      />

      <span className="text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:text-white">
        {integration.icon}
      </span>

      <div className="text-center">
        <p className="text-sm font-medium text-white transition-colors duration-300">
          {integration.name}
        </p>
        <p className="mt-0.5 text-xs text-muted-foreground">
          {integration.category}
        </p>
      </div>

      {/* Bottom gradient line */}
      <span
        aria-hidden
        className="absolute inset-x-6 bottom-0 h-px bg-linear-to-r from-transparent via-blue-400/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
    </motion.div>
  );
}
"use client";

import { motion } from "framer-motion";
import { benefits } from "@/data/benefits";
import { cn } from "@/lib/utils";
import { Stagger } from "@/components/animations/stagger";
import { TiltCard } from "@/components/animations/tilt-card";
import { SectionHeading } from "@/components/common/section-heading";

const accentStyles: Record<
  string,
  { iconBg: string; glow: string; hoverBorder: string }
> = {
  blue: {
    iconBg: "bg-blue-500/15 text-blue-300",
    glow: "bg-blue-500/15",
    hoverBorder: "group-hover:border-blue-400/30",
  },
  purple: {
    iconBg: "bg-purple-500/15 text-purple-300",
    glow: "bg-purple-500/15",
    hoverBorder: "group-hover:border-purple-400/30",
  },
  emerald: {
    iconBg: "bg-emerald-500/15 text-emerald-300",
    glow: "bg-emerald-500/15",
    hoverBorder: "group-hover:border-emerald-400/30",
  },
  amber: {
    iconBg: "bg-amber-500/15 text-amber-300",
    glow: "bg-amber-500/15",
    hoverBorder: "group-hover:border-amber-400/30",
  },
  rose: {
    iconBg: "bg-rose-500/15 text-rose-300",
    glow: "bg-rose-500/15",
    hoverBorder: "group-hover:border-rose-400/30",
  },
  cyan: {
    iconBg: "bg-cyan-500/15 text-cyan-300",
    glow: "bg-cyan-500/15",
    hoverBorder: "group-hover:border-cyan-400/30",
  },
};

export function Benefits() {
  return (
    <section
      id="why-flowsync"
      className="relative overflow-hidden py-28"
      aria-label="Why choose FlowSync"
    >
      {/* Background */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="bg-radial-blue absolute inset-x-0 top-0 h-full" />
        <div className="absolute left-1/2 top-1/2 h-[30rem] w-[46rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Why FlowSync"
          title="Built to move"
          titleAccent="your business forward."
          description="Every feature is engineered to save time, reduce friction and help your teams do their best work."
        />

        {/* Benefit cards */}
        <Stagger
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.1}
          y={40}
        >
          {benefits.map((benefit) => {
            const accent = accentStyles[benefit.accent];
            const Icon = benefit.icon;

            return (
              <TiltCard key={benefit.id} maxTilt={4}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className={cn(
                    "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm transition-colors duration-300",
                    accent.hoverBorder
                  )}
                >
                  {/* Hover glow */}
                  <div
                    aria-hidden
                    className={cn(
                      "pointer-events-none absolute -top-20 left-1/2 h-40 w-56 -translate-x-1/2 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100",
                      accent.glow
                    )}
                  />

                  {/* Icon */}
                  <span
                    className={cn(
                      "relative inline-flex size-11 items-center justify-center rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3",
                      accent.iconBg
                    )}
                  >
                    <Icon className="size-5" />
                  </span>

                  {/* Title */}
                  <h3 className="relative mt-5 font-heading text-lg font-semibold text-white">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="relative mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {benefit.description}
                  </p>

                  {/* Bottom gradient line */}
                  <span
                    aria-hidden
                    className="absolute inset-x-6 bottom-0 h-px bg-linear-to-r from-transparent via-white/25 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                </motion.div>
              </TiltCard>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
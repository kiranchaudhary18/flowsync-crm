"use client";

import { motion } from "framer-motion";
import { Check, ArrowUpRight } from "lucide-react";
import { features } from "@/data/features";
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
    hoverBorder: "hover:border-blue-400/30",
  },
  purple: {
    iconBg: "bg-purple-500/15 text-purple-300",
    glow: "bg-purple-500/15",
    hoverBorder: "hover:border-purple-400/30",
  },
  cyan: {
    iconBg: "bg-cyan-500/15 text-cyan-300",
    glow: "bg-cyan-500/15",
    hoverBorder: "hover:border-cyan-400/30",
  },
};

export function Features() {
  return (
    <section
      id="features"
      className="relative overflow-hidden px-4 py-28 sm:px-6 lg:px-8"
      aria-label="FlowSync CRM features"
    >
      {/* Background */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="bg-grid bg-grid-fade absolute inset-0 opacity-60" />
        <div className="absolute left-1/2 top-1/2 h-[32rem] w-[48rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/10 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        <SectionHeading
          badge="Core Platform"
          title="Everything you need."
          titleAccent="Nothing you don't."
          description="Three powerful modules. One seamless flow. FlowSync brings your entire business operations into a single, unified workspace."
        />

        {/* Feature cards */}
        <Stagger
          className="mt-16 grid gap-6 md:grid-cols-3"
          stagger={0.15}
          y={48}
        >
          {features.map((feature) => {
            const accent = accentStyles[feature.accent];
            const Icon = feature.icon;

            return (
              <TiltCard key={feature.id} maxTilt={4}>
                <motion.article
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={cn(
                    "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm transition-colors duration-300",
                    accent.hoverBorder
                  )}
                >
                  {/* Hover glow */}
                  <div
                    aria-hidden
                    className={cn(
                      "pointer-events-none absolute -top-24 left-1/2 h-48 w-72 -translate-x-1/2 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100",
                      accent.glow
                    )}
                  />

                  {/* Icon */}
                  <div className="relative">
                    <span
                      className={cn(
                        "inline-flex size-12 items-center justify-center rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3",
                        accent.iconBg
                      )}
                    >
                      <Icon className="size-6" />
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="relative mt-6 font-heading text-xl font-semibold text-white">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>

                  {/* Bullets */}
                  <ul className="relative mt-6 space-y-3">
                    {feature.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-2.5 text-sm text-muted-foreground"
                      >
                        <span
                          className={cn(
                            "mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full",
                            accent.iconBg
                          )}
                        >
                          <Check className="size-2.5" />
                        </span>
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  {/* Footer link */}
                  <div className="relative mt-8 flex items-center justify-between border-t border-white/5 pt-5">
                    <span className="text-sm font-medium text-white/80 transition-colors duration-300 group-hover:text-white">
                      Learn more
                    </span>
                    <span className="flex size-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted-foreground transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/10 group-hover:text-white">
                      <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:rotate-45" />
                    </span>
                  </div>

                  {/* Bottom gradient border on hover */}
                  <span
                    aria-hidden
                    className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-blue-400/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                </motion.article>
              </TiltCard>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
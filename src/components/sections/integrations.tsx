"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { integrations } from "@/data/integrations";
import { IntegrationCard } from "@/components/common/integration-card";
import { SectionHeading } from "@/components/common/section-heading";

export function Integrations() {
  const sectionRef = useRef<HTMLElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      /* GSAP stagger reveal for the marquee rows */
      gsap.fromTo(
        ".integrations-row",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: marqueeRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );
    },
    { scope: sectionRef }
  );

  /* Split integrations into two rows for a seamless infinite loop */
  const rowA = integrations.slice(0, 5);
  const rowB = integrations.slice(5);

  return (
    <section
      ref={sectionRef}
      id="integrations"
      className="relative overflow-hidden py-28"
      aria-label="FlowSync integrations"
    >
      {/* Background */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="bg-radial-purple absolute inset-x-0 bottom-0 h-full" />
        <div className="absolute left-1/2 top-1/2 h-[28rem] w-[44rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/10 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
            badge="Integrations"
            badgeAccent="purple"
            title="Connect with the tools"
            titleAccent="you already use."
            description="FlowSync automatically pulls leads from your favorite platforms into one centralized CRM."
        />
      </div>

      {/* Marquee rows */}
      <div ref={marqueeRef} className="mt-16 space-y-5">
        {/* Row A — normal direction */}
        <div className="integrations-row relative">
          <div className="animate-marquee flex w-max gap-5 pr-5 hover:[animation-play-state:paused]">
            {[...rowA, ...rowA].map((integration, i) => (
              <IntegrationCard
                key={`${integration.name}-${i}`}
                integration={integration}
              />
            ))}
          </div>
          {/* Edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-linear-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-linear-to-l from-background to-transparent" />
        </div>

        {/* Row B — reverse direction */}
        <div className="integrations-row relative">
          <div className="animate-marquee-reverse flex w-max gap-5 pr-5 hover:[animation-play-state:paused]">
            {[...rowB, ...rowB].map((integration, i) => (
              <IntegrationCard
                key={`${integration.name}-${i}-b`}
                integration={integration}
              />
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-linear-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-linear-to-l from-background to-transparent" />
        </div>
      </div>
    </section>
  );
}
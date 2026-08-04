"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Sparkles, TrendingUp, CheckCircle2, Wallet } from "lucide-react";
import { gsap, useGSAP } from "@/lib/gsap";
import { AnimatedButton } from "@/components/common/animated-button";
import { DashboardMockup } from "@/components/common/dashboard-mockup";
import { Floating } from "@/components/animations/motion-primitives";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);

  /* ---------- Mouse parallax (Framer Motion — wrapper only) ---------- */
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springX = useSpring(mx, { stiffness: 60, damping: 20 });
  const springY = useSpring(my, { stiffness: 60, damping: 20 });

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mx.set(x * 12);
    my.set(y * 12);
  }

  /* ---------- GSAP: heading reveal ONLY ---------- */
  useGSAP(
    () => {
      if (!headingRef.current) return;

      /* Heading words — GSAP controls ONLY the heading */
      gsap.fromTo(
        ".hero-title-word",
        { opacity: 0, y: 60, rotateX: 60, filter: "blur(6px)" },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          filter: "blur(0px)",
          duration: 0.9,
          stagger: 0.08,
          ease: "power4.out",
          delay: 0.3,
          clearProps: "all",
          onComplete: () => {
            gsap.set(".hero-title-word", { clearProps: "all" });
          },
        }
      );

      /* Subtitle — GSAP controls ONLY the subtitle */
      gsap.fromTo(
        ".hero-subtitle",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.9,
          clearProps: "all",
        }
      );

      /* Dashboard mockup — GSAP controls ONLY the dashboard */
      gsap.fromTo(
        mockupRef.current,
        { opacity: 0, y: 80, scale: 0.94 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          delay: 1.1,
          clearProps: "all",
        }
      );

      /* Scroll parallax on the mockup — GSAP only */
      gsap.to(mockupRef.current, {
        yPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      /* Subtle drift on background orbs — GSAP only */
      gsap.to(".hero-orb-1", {
        xPercent: 10,
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".hero-orb-2", {
        xPercent: -12,
        yPercent: 10,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pb-24 pt-32 sm:px-6 lg:px-8"
      aria-label="FlowSync CRM introduction"
    >
      {/* ---------- Background layers ---------- */}
      <div aria-hidden className="absolute inset-0 -z-10">
        {/* Grid pattern */}
        <div className="bg-grid bg-grid-fade absolute inset-0" />

        {/* Soft gradient orbs */}
        <div className="hero-orb-1 animate-orb absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-[80%] rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="hero-orb-2 animate-orb absolute top-20 right-0 h-[28rem] w-[28rem] translate-x-1/3 rounded-full bg-purple-600/20 blur-[120px]" />
        <div className="absolute bottom-0 left-1/2 h-[24rem] w-[40rem] -translate-x-1/2 rounded-full bg-indigo-600/10 blur-[120px]" />

        {/* Radial top glow */}
        <div className="bg-radial-blue absolute inset-x-0 top-0 h-full" />
      </div>

      {/* ---------- Content wrapper (Framer Motion controls wrapper only) ---------- */}
      <motion.div
        className="relative mx-auto max-w-4xl text-center"
        style={{
          translateX: springX,
          translateY: springY,
        }}
      >
        {/* Announcement badge — Framer Motion only (no GSAP) */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur-sm"
        >
          <Sparkles className="size-3.5 text-blue-300" />
          <span className="font-medium text-white">Introducing FlowSync</span>
          <span className="text-muted-foreground/60">—</span>
          <span className="text-blue-300">New AI workflows</span>
        </motion.div>

        {/* Headline — GSAP controls ONLY the heading */}
        <h1
          ref={headingRef}
          className="mt-8 font-heading text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
        >
          <span className="block text-gradient-primary">
            <span className="hero-title-word inline-block">One</span>{" "}
            <span className="hero-title-word inline-block">Platform.</span>
          </span>
          <span className="block">
            <span className="text-gradient">
              <span className="hero-title-word inline-block">Every</span>{" "}
              <span className="hero-title-word inline-block">Workflow.</span>
            </span>
          </span>
        </h1>

        {/* Subtitle — GSAP controls ONLY the subtitle */}
        <p className="hero-subtitle mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
          FlowSync unifies lead management, HRMS and invoicing into one
          seamless workspace. Stop switching tools — start flowing.
        </p>

        {/* CTA buttons — Framer Motion only (no GSAP) */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
          >
            <AnimatedButton href="#features" className="px-8 py-4 text-base">
              Get Started Free
            </AnimatedButton>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <AnimatedButton
              href="https://www.loom.com/share/d4824edd9a9242e89ad24ba54f278af9"
              variant="ghost"
              className="px-8 py-4 text-base"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="flex size-5 items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="size-4">
                  <path d="M6 4l14 8-14 8V4z" fill="currentColor" />
                </svg>
              </span>
              Watch Demo
            </AnimatedButton>
          </motion.div>
        </div>

        {/* Trust line */}
        <p className="hero-subtitle mt-8 text-sm text-muted-foreground/70">
          Free 14-day trial · No credit card required
        </p>
      </motion.div>

      {/* ---------- Dashboard mockup (GSAP controls ONLY the dashboard) ---------- */}
      <div ref={mockupRef} className="relative mx-auto mt-16 w-full max-w-5xl">
        <DashboardMockup />

        {/* Floating cards — Framer Motion only (no GSAP) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none absolute -top-6 -left-2 z-10 hidden sm:block lg:-left-10"
        >
          <Floating amplitude={10} duration={5.5}>
            <div className="glass flex items-center gap-3 rounded-2xl px-4 py-3 shadow-xl shadow-black/30">
              <span className="flex size-9 items-center justify-center rounded-xl bg-emerald-400/15">
                <TrendingUp className="size-4.5 text-emerald-300" />
              </span>
              <div>
                <p className="text-xs font-semibold text-white">+32% Revenue</p>
                <p className="text-[10px] text-muted-foreground">This quarter</p>
              </div>
            </div>
          </Floating>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.75, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none absolute -right-2 top-16 z-10 hidden sm:block lg:-right-8"
        >
          <Floating amplitude={14} duration={6} delay={0.8}>
            <div className="glass flex items-center gap-3 rounded-2xl px-4 py-3 shadow-xl shadow-black/30">
              <span className="flex size-9 items-center justify-center rounded-xl bg-blue-400/15">
                <CheckCircle2 className="size-4.5 text-blue-300" />
              </span>
              <div>
                <p className="text-xs font-semibold text-white">Deal won</p>
                <p className="text-[10px] text-muted-foreground">Acme Corp · $12,400</p>
              </div>
            </div>
          </Floating>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.9, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none absolute -bottom-6 right-8 z-10 hidden sm:block"
        >
          <Floating amplitude={8} duration={4.5} delay={1.6}>
            <div className="glass flex items-center gap-3 rounded-2xl px-4 py-3 shadow-xl shadow-black/30">
              <span className="flex size-9 items-center justify-center rounded-xl bg-violet-400/15">
                <Wallet className="size-4.5 text-violet-300" />
              </span>
              <div>
                <p className="text-xs font-semibold text-white">Invoice paid</p>
                <p className="text-[10px] text-muted-foreground">#INV-2026 · $8,900</p>
              </div>
            </div>
          </Floating>
        </motion.div>
      </div>
    </section>
  );
}
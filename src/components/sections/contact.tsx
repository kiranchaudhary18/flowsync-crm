"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarCheck, Phone, Mail, MapPin, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AnimatedButton } from "@/components/common/animated-button";
import { Reveal } from "@/components/animations/reveal";
import { Floating } from "@/components/animations/motion-primitives";

const contactInfo = [
  {
    label: "Email us",
    value: "hello@flowsynccrm.com",
    icon: Mail,
  },
  {
    label: "Talk to Sales",
    value: "sales@flowsynccrm.com",
    icon: Phone,
  },
  {
    label: "Visit us",
    value: "Ahmedabad, Gujarat, India",
    icon: MapPin,
  },
];

export function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    /* Simulate async submission — replace with real endpoint */
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
      e.currentTarget.reset();
    }, 1500);
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-28"
      aria-label="Book a demo"
    >
      {/* Background */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="bg-grid bg-grid-fade absolute inset-0 opacity-50" />

        {/* Animated gradient orbs */}
        <div className="animate-orb absolute -top-32 left-1/4 h-[28rem] w-[28rem] rounded-full bg-blue-600/15 blur-[120px]" />
        <div className="animate-orb absolute -bottom-32 right-1/4 h-[28rem] w-[28rem] rounded-full bg-purple-600/15 blur-[120px]" style={{ animationDelay: "-4s" }} />

        {/* Animated gradient band */}
        <div className="animate-gradient-x absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-linear-to-r from-transparent via-blue-500/30 to-transparent bg-[length:200%_100%]" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        {/* Left: copy */}
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-blue-300 backdrop-blur-sm">
              <CalendarCheck className="size-3.5" />
              Book a Demo
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-heading text-3xl font-bold tracking-tight text-white sm:text-5xl">
              See FlowSync
              <span className="text-gradient block">in action.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
              Get a personalized walkthrough of FlowSync tailored to your
              business. Our team will show you exactly how to unify your
              workflows in minutes.
            </p>
          </Reveal>

          {/* Contact info */}
          <div className="mt-10 space-y-4">
            {contactInfo.map((info, i) => {
              const Icon = info.icon;
              return (
                <Reveal key={info.label} delay={0.25 + i * 0.1} y={24}>
                  <Floating amplitude={4} duration={5 + i} delay={i * 0.5}>
                    <div className="group flex items-center gap-4">
                      <span className="flex size-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-blue-300 backdrop-blur-sm transition-all duration-300 group-hover:border-blue-400/30 group-hover:bg-blue-500/10">
                        <Icon className="size-5" />
                      </span>
                      <div>
                        <p className="text-xs text-muted-foreground">{info.label}</p>
                        <p className="text-sm font-medium text-white">{info.value}</p>
                      </div>
                    </div>
                  </Floating>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Right: glass form */}
        <Reveal delay={0.2} y={48}>
          <div className="glass-strong relative overflow-hidden rounded-3xl p-8 shadow-2xl shadow-black/30 sm:p-10">
            {/* Top gradient edge */}
            <span
              aria-hidden
              className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-blue-400/50 to-transparent"
            />

            <h3 className="font-heading text-xl font-semibold text-white">
              Book your free demo
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Fill in your details and we&rsquo;ll get back to you within 24 hours.
            </p>

            <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-xs font-medium text-muted-foreground"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Carter"
                    required
                    className="h-11 rounded-xl border-white/10 bg-white/5 px-4 text-white placeholder:text-muted-foreground/60 focus-visible:border-blue-400/50 focus-visible:ring-blue-400/20"
                  />
                </motion.div>

                <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs font-medium text-muted-foreground"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@company.com"
                    required
                    className="h-11 rounded-xl border-white/10 bg-white/5 px-4 text-white placeholder:text-muted-foreground/60 focus-visible:border-blue-400/50 focus-visible:ring-blue-400/20"
                  />
                </motion.div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-xs font-medium text-muted-foreground"
                  >
                    Phone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    required
                    className="h-11 rounded-xl border-white/10 bg-white/5 px-4 text-white placeholder:text-muted-foreground/60 focus-visible:border-blue-400/50 focus-visible:ring-blue-400/20"
                  />
                </motion.div>

                <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                  <label
                    htmlFor="company"
                    className="mb-2 block text-xs font-medium text-muted-foreground"
                  >
                    Company
                  </label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Acme Corp"
                    required
                    className="h-11 rounded-xl border-white/10 bg-white/5 px-4 text-white placeholder:text-muted-foreground/60 focus-visible:border-blue-400/50 focus-visible:ring-blue-400/20"
                  />
                </motion.div>
              </div>

              <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs font-medium text-muted-foreground"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your business and what you&rsquo;d like to automate…"
                  required
                  className="min-h-28 rounded-xl border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-muted-foreground/60 focus-visible:border-blue-400/50 focus-visible:ring-blue-400/20"
                />
              </motion.div>

              <AnimatedButton
                type="submit"
                loading={submitting}
                className="w-full py-4 text-base"
              >
                {submitted ? "Request received!" : "Book Free Demo"}
                {!submitting && !submitted && (
                  <Send className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                )}
              </AnimatedButton>

              {submitted && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-sm font-medium text-emerald-300"
                  role="status"
                >
                  Thanks! We&rsquo;ll be in touch within 24 hours.
                </motion.p>
              )}
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
import { Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "@/components/common/logo";
import { Reveal } from "@/components/animations/reveal";

/* Static year — avoids server/client hydration mismatch from new Date() */
const CURRENT_YEAR = 2026;

const footerLinks = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Integrations", href: "#integrations" },
      { label: "Why FlowSync", href: "#why-flowsync" },
      { label: "Pricing", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Talk to Sales", href: "#contact" },
    ],
  },
];

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.67l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64z" />
    </svg>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.09.68-.22.68-.49v-1.7c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.85.09-.66.35-1.12.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05a9.36 9.36 0 015 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9v2.81c0 .27.18.59.69.49A10.25 10.25 0 0022 12.25C22 6.58 17.52 2 12 2z" />
    </svg>
  );
}

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M23.5 6.19a3.02 3.02 0 00-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 00.5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 002.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 002.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.81zM9.55 15.57V8.43L15.82 12l-6.27 3.57z" />
    </svg>
  );
}

const socials = [
  { label: "LinkedIn", href: "#", icon: LinkedInIcon },
  { label: "Twitter", href: "#", icon: TwitterIcon },
  { label: "GitHub", href: "#", icon: GitHubIcon },
  { label: "YouTube", href: "#", icon: YouTubeIcon },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-black/20">
      {/* Top gradient line */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-blue-500/40 to-transparent"
      />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal y={32}>
          <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
            {/* Brand */}
            <div>
              <Logo />
              <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
                One platform for every workflow. Unify your leads, people and
                invoices with FlowSync CRM.
              </p>

              {/* Socials */}
              <div className="mt-6 flex items-center gap-3">
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="flex size-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400/30 hover:bg-blue-500/10 hover:text-white"
                    >
                      <Icon className="size-4" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick links */}
            {footerLinks.map((group) => (
              <nav key={group.title} aria-label={group.title}>
                <h3 className="font-heading text-sm font-semibold text-white">
                  {group.title}
                </h3>
                <ul className="mt-5 space-y-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors duration-300 hover:text-white"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}

            {/* Contact */}
            <div>
              <h3 className="font-heading text-sm font-semibold text-white">
                Contact
              </h3>
              <ul className="mt-5 space-y-3">
                <li>
                  <a
                    href="mailto:hello@flowsynccrm.com"
                    className="flex items-center gap-2.5 text-sm text-muted-foreground transition-colors duration-300 hover:text-white"
                  >
                    <Mail className="size-4 text-blue-300" />
                    hello@flowsynccrm.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+919099012345"
                    className="flex items-center gap-2.5 text-sm text-muted-foreground transition-colors duration-300 hover:text-white"
                  >
                    <Phone className="size-4 text-blue-300" />
                    +91 90990 12345
                  </a>
                </li>
                <li className="flex items-center gap-2.5 text-sm text-muted-foreground">
                  <MapPin className="size-4 text-blue-300" />
                  Ahmedabad, Gujarat, India
                </li>
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400/30 hover:bg-blue-500/10"
              >
                Book Free Demo
                <span className="size-1.5 rounded-full bg-blue-400" />
              </a>
            </div>
          </div>
        </Reveal>

        {/* Bottom bar */}
        <Reveal y={24} delay={0.1}>
          <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
            <p className="text-xs text-muted-foreground">
              © {CURRENT_YEAR} FlowSync CRM. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-xs text-muted-foreground transition-colors duration-300 hover:text-white"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-xs text-muted-foreground transition-colors duration-300 hover:text-white"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
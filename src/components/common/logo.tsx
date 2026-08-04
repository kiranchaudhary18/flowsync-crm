import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  iconClassName?: string;
}

/**
 * FlowSync CRM — Brand Mark
 *
 * Concept: A continuous flow of three connected nodes forming an
 * abstract orbit/pipeline. Represents the lead lifecycle flowing
 * through a unified system (capture → manage → convert).
 *
 * The single continuous stroke suggests movement, automation and
 * connected workflows. Flat, minimal, rounded — scales from 20px
 * to 200px.
 */
export function Logo({ className, iconClassName }: LogoProps) {
  return (
    <a
      href="#"
      className={cn("group flex items-center gap-3", className)}
      aria-label="FlowSync CRM — Home"
    >
      {/* Mark */}
      <span
        className={cn(
          "relative flex size-9 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-blue-500 to-purple-600 shadow-lg shadow-blue-500/25 transition-transform duration-300 group-hover:scale-105",
          iconClassName
        )}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="size-5 text-white"
          aria-hidden="true"
        >
          {/* Continuous flow path through three nodes */}
          <path
            d="M4.5 7.5C4.5 5.843 5.843 4.5 7.5 4.5h9c1.657 0 3 1.343 3 3v9c0 1.657-1.343 3-3 3h-9c-1.657 0-3-1.343-3-3v-9Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.35"
          />
          {/* Node 1 — capture */}
          <circle cx="7.5" cy="7.5" r="1.6" fill="currentColor" />
          {/* Node 2 — manage */}
          <circle cx="16.5" cy="12" r="1.6" fill="currentColor" />
          {/* Node 3 — convert */}
          <circle cx="7.5" cy="16.5" r="1.6" fill="currentColor" />
          {/* Flow connector */}
          <path
            d="M9.1 7.5h4.4M16.5 10.4v3.2M9.1 16.5h4.4"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      </span>

      {/* Wordmark */}
      <span className="flex items-baseline font-heading text-lg font-semibold tracking-tight">
        <span className="text-white">FlowSync</span>
        <span className="text-gradient ml-1.5 text-sm font-bold tracking-wide">
          CRM
        </span>
      </span>
    </a>
  );
}
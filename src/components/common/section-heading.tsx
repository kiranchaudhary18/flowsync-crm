import { Reveal } from "@/components/animations/reveal";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge: string;
  badgeAccent?: "blue" | "purple";
  title: string;
  titleAccent?: string;
  description?: string;
  className?: string;
}

export function SectionHeading({
  badge,
  badgeAccent = "blue",
  title,
  titleAccent,
  description,
  className,
}: SectionHeadingProps) {
  const dotColor =
    badgeAccent === "purple" ? "bg-purple-400" : "bg-blue-400";
  const textColor =
    badgeAccent === "purple" ? "text-purple-300" : "text-blue-300";

  return (
    <div className={cn("mx-auto max-w-2xl text-center", className)}>
      <Reveal>
        <span
          className={cn(
            "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium backdrop-blur-sm",
            textColor
          )}
        >
          <span className={cn("size-1.5 rounded-full", dotColor)} />
          {badge}
        </span>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-6 font-heading text-3xl font-bold tracking-tight text-white sm:text-5xl">
          {title}
          {titleAccent && (
            <span className="text-gradient block">{titleAccent}</span>
          )}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.2}>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
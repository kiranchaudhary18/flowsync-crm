import {
  Zap,
  Layers,
  Workflow,
  BarChart3,
  ShieldCheck,
  Cloud,
  type LucideIcon,
} from "lucide-react";

export interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  accent: "blue" | "purple" | "emerald" | "amber" | "rose" | "cyan";
}

export const benefits: Benefit[] = [
  {
    id: "capture-leads",
    title: "Capture every lead instantly",
    description:
      "Never miss a prospect again. Leads from every channel land in your pipeline the moment they arrive.",
    icon: Zap,
    accent: "blue",
  },
  {
    id: "all-teams",
    title: "All teams in one workspace",
    description:
      "Sales, HR and finance collaborate in a single shared workspace with zero data silos.",
    icon: Layers,
    accent: "purple",
  },
  {
    id: "automated-workflows",
    title: "Automated workflows",
    description:
      "Let FlowSync handle follow-ups, assignments and escalations while your team focuses on closing.",
    icon: Workflow,
    accent: "emerald",
  },
  {
    id: "analytics",
    title: "Powerful analytics",
    description:
      "Real-time dashboards and AI-driven insights reveal exactly where your revenue is growing.",
    icon: BarChart3,
    accent: "amber",
  },
  {
    id: "security",
    title: "Enterprise-grade security",
    description:
      "SOC 2 compliant infrastructure with end-to-end encryption, SSO and granular role-based access.",
    icon: ShieldCheck,
    accent: "rose",
  },
  {
    id: "cloud-access",
    title: "Cloud-based anywhere access",
    description:
      "Your entire business in the cloud. Work securely from any device, anywhere in the world.",
    icon: Cloud,
    accent: "cyan",
  },
];
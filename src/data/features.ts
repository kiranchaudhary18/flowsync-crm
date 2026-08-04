import {
  Users,
  Building2,
  FileText,
  type LucideIcon,
} from "lucide-react";

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  bullets: string[];
  accent: "blue" | "purple" | "cyan";
}

export const features: Feature[] = [
  {
    id: "lead-management",
    title: "Lead Management",
    description:
      "Capture, qualify and convert leads with an intelligent pipeline that never lets a deal slip through.",
    icon: Users,
    bullets: [
      "Drag-and-drop kanban pipeline",
      "AI-powered lead scoring",
      "Automated follow-up sequences",
    ],
    accent: "blue",
  },
  {
    id: "hrms",
    title: "HRMS",
    description:
      "Manage your entire workforce from onboarding to payroll — all in one unified, compliant workspace.",
    icon: Building2,
    bullets: [
      "Employee self-service portal",
      "Attendance & leave automation",
      "Payroll with tax compliance",
    ],
    accent: "purple",
  },
  {
    id: "invoicing",
    title: "Invoicing",
    description:
      "Create, send and track invoices with real-time payment insights and automated reconciliation.",
    icon: FileText,
    bullets: [
      "Recurring billing automation",
      "Multi-currency support",
      "Real-time payment tracking",
    ],
    accent: "cyan",
  },
];
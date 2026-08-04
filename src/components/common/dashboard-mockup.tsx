"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Bell,
  Users,
  Building2,
  FileText,
  TrendingUp,
  ArrowUpRight,
  CircleDollarSign,
  CheckCircle2,
  MoreHorizontal,
  Zap,
  UserPlus,
  Calendar,
  Clock,
  DollarSign,
  PieChart,
  Activity,
  Target,
  Briefcase,
  Receipt,
  CreditCard,
  AlertCircle,
  LineChart,
  Lightbulb,
} from "lucide-react";

// Module data structure
interface BaseModule {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  glowColor: string;
  stats: {
    label: string;
    value: string;
    change: string;
    icon: React.ComponentType<{ className?: string }>;
    accent: string;
  }[];
}

interface LeadsModule extends BaseModule {
  id: "leads";
  pipeline: { label: string; count: number; color: string; width: string }[];
  recentLeads: { name: string; value: string; tag: string; color: string }[];
}

interface HRMSModule extends BaseModule {
  id: "hrms";
  departments: { name: string; count: number; color: string }[];
  leaveRequests: { name: string; type: string; duration: string; status: string }[];
}

interface InvoicingModule extends BaseModule {
  id: "invoicing";
  invoices: { id: string; client: string; amount: string; status: string; date: string }[];
  outstanding: { client: string; amount: string; days: number }[];
}

interface AnalyticsModule extends BaseModule {
  id: "analytics";
  chartBars: number[];
  insights: { title: string; value: string; description: string; positive: boolean }[];
}

type Module = LeadsModule | HRMSModule | InvoicingModule | AnalyticsModule;

const modules: Record<string, Module> = {
  leads: {
    id: "leads",
    label: "Leads",
    icon: Users,
    color: "from-blue-500 to-indigo-600",
    glowColor: "shadow-blue-500/50",
    stats: [
      { label: "Total Leads", value: "1,248", change: "+8.1%", icon: UserPlus, accent: "text-blue-300" },
      { label: "Qualified", value: "342", change: "+12.3%", icon: Target, accent: "text-indigo-300" },
      { label: "Conversion", value: "32%", change: "+5.7%", icon: TrendingUp, accent: "text-emerald-300" },
      { label: "Response Rate", value: "68%", change: "+3.2%", icon: Activity, accent: "text-violet-300" },
    ],
    pipeline: [
      { label: "New", count: 24, color: "bg-blue-500", width: "w-full" },
      { label: "Contacted", count: 18, color: "bg-indigo-400", width: "w-[82%]" },
      { label: "Qualified", count: 11, color: "bg-violet-400", width: "w-[64%]" },
      { label: "Won", count: 7, color: "bg-emerald-400", width: "w-[48%]" },
    ],
    recentLeads: [
      { name: "Acme Corp", value: "$12,400", tag: "Won", color: "bg-emerald-400/15 text-emerald-300" },
      { name: "Nimbus Labs", value: "$8,900", tag: "Qualified", color: "bg-violet-400/15 text-violet-300" },
      { name: "Vertex Inc", value: "$21,000", tag: "Contacted", color: "bg-indigo-400/15 text-indigo-300" },
    ],
  },
  hrms: {
    id: "hrms",
    label: "HRMS",
    icon: Building2,
    color: "from-emerald-500 to-teal-600",
    glowColor: "shadow-emerald-500/50",
    stats: [
      { label: "Total Employees", value: "248", change: "+12", icon: Users, accent: "text-emerald-300" },
      { label: "Present Today", value: "231", change: "93%", icon: Calendar, accent: "text-teal-300" },
      { label: "On Leave", value: "17", change: "7%", icon: Clock, accent: "text-amber-300" },
      { label: "New Hires", value: "8", change: "+4", icon: UserPlus, accent: "text-emerald-300" },
    ],
    departments: [
      { name: "Engineering", count: 89, color: "bg-blue-400" },
      { name: "Sales", count: 45, color: "bg-emerald-400" },
      { name: "Marketing", count: 32, color: "bg-violet-400" },
      { name: "HR", count: 18, color: "bg-amber-400" },
    ],
    leaveRequests: [
      { name: "Sarah Johnson", type: "Vacation", duration: "3 days", status: "Pending" },
      { name: "Mike Chen", type: "Sick Leave", duration: "1 day", status: "Approved" },
      { name: "Emily Davis", type: "Personal", duration: "2 days", status: "Pending" },
    ],
  },
  invoicing: {
    id: "invoicing",
    label: "Invoicing",
    icon: FileText,
    color: "from-violet-500 to-purple-600",
    glowColor: "shadow-violet-500/50",
    stats: [
      { label: "Total Revenue", value: "$84.2k", change: "+12.4%", icon: DollarSign, accent: "text-emerald-300" },
      { label: "Paid Invoices", value: "156", change: "+23", icon: CheckCircle2, accent: "text-emerald-300" },
      { label: "Pending", value: "28", change: "-5", icon: Clock, accent: "text-amber-300" },
      { label: "Overdue", value: "12", change: "+3", icon: AlertCircle, accent: "text-red-300" },
    ],
    invoices: [
      { id: "#INV-2026-001", client: "Acme Corp", amount: "$12,400", status: "Paid", date: "Jan 15" },
      { id: "#INV-2026-002", client: "Nimbus Labs", amount: "$8,900", status: "Pending", date: "Jan 18" },
      { id: "#INV-2026-003", client: "Vertex Inc", amount: "$21,000", status: "Overdue", date: "Jan 10" },
    ],
    outstanding: [
      { client: "TechStart Inc", amount: "$15,600", days: 12 },
      { client: "Global Solutions", amount: "$9,200", days: 8 },
      { client: "Prime Dynamics", amount: "$6,800", days: 25 },
    ],
  },
  analytics: {
    id: "analytics",
    label: "Analytics",
    icon: CircleDollarSign,
    color: "from-amber-500 to-orange-600",
    glowColor: "shadow-amber-500/50",
    stats: [
      { label: "Revenue", value: "$124.5k", change: "+18.2%", icon: TrendingUp, accent: "text-emerald-300" },
      { label: "Profit Margin", value: "34%", change: "+4.1%", icon: PieChart, accent: "text-blue-300" },
      { label: "Growth Rate", value: "24%", change: "+8.3%", icon: LineChart, accent: "text-violet-300" },
      { label: "ROI", value: "285%", change: "+12%", icon: Target, accent: "text-amber-300" },
    ],
    chartBars: [35, 55, 42, 68, 48, 78, 60, 88],
    insights: [
      { title: "Sales Trend", value: "+24%", description: "vs last quarter", positive: true },
      { title: "Customer Acquisition", value: "1,248", description: "new customers", positive: true },
      { title: "Churn Rate", value: "2.3%", description: "below average", positive: true },
    ],
  },
};

type ModuleId = keyof typeof modules;

const containerVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
  exit: {
    opacity: 0,
    x: -20,
    transition: {
      duration: 0.2,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export function DashboardMockup() {
  const [activeModule, setActiveModule] = useState<ModuleId>("leads");

  return (
    <div className="relative w-full">
      {/* Glow behind the dashboard */}
      <div
        aria-hidden
        className="absolute -inset-8 rounded-[2rem] bg-linear-to-br from-blue-500/20 via-indigo-500/10 to-purple-600/20 blur-2xl"
      />

      {/* Main dashboard frame */}
      <div className="glass-strong relative overflow-hidden rounded-2xl shadow-2xl shadow-black/40">
        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-white/5 px-5 py-3.5">
          <div className="flex items-center gap-3">
            <span className="flex size-6 items-center justify-center rounded-md bg-linear-to-br from-blue-500 to-purple-600">
              <Zap className="size-3.5 text-white" />
            </span>
            <span className="text-sm font-medium text-white">FlowSync</span>
            <span className="hidden rounded-full border border-white/10 px-2 py-0.5 text-[10px] text-muted-foreground sm:inline">
              Pro Workspace
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 md:flex">
              <Search className="size-3.5 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">Search…</span>
            </div>
            <span className="relative flex size-8 items-center justify-center rounded-lg border border-white/10 bg-white/5">
              <Bell className="size-3.5 text-muted-foreground" />
              <span className="absolute -top-0.5 -right-0.5 size-2 rounded-full bg-blue-400" />
            </span>
            <span className="flex size-8 items-center justify-center rounded-lg bg-linear-to-br from-blue-400 to-purple-500 text-xs font-semibold text-white">
              AK
            </span>
          </div>
        </div>

        <div className="grid grid-cols-[auto_1fr]">
          {/* Sidebar */}
          <div className="hidden border-r border-white/5 px-3 py-5 sm:block">
            <div className="flex w-12 flex-col items-center gap-1.5">
              {Object.entries(modules).map(([key, module]) => {
                const Icon = module.icon;
                const isActive = activeModule === key;

                return (
                  <button
                    key={key}
                    onClick={() => setActiveModule(key as ModuleId)}
                    className="group relative flex size-10 items-center justify-center rounded-xl transition-all duration-200"
                    aria-label={`${module.label} module`}
                    aria-pressed={isActive}
                  >
                    {/* Premium glow for active icon */}
                    {isActive && (
                      <motion.div
                        layoutId="activeGlow"
                        className={`absolute inset-0 rounded-xl bg-linear-to-br ${module.color} ${module.glowColor} shadow-lg`}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}

                    {/* Animated indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute -left-3 h-6 w-1 rounded-r-full bg-linear-to-b from-blue-400 to-purple-500"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}

                    {/* Icon */}
                    <Icon
                      className={`size-4.5 relative z-10 transition-colors duration-200 ${
                        isActive ? "text-white" : "text-muted-foreground group-hover:text-white"
                      }`}
                    />
                  </button>
                );
              })}
              <span className="mt-4 flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-muted-foreground">
                <MoreHorizontal className="size-4.5" />
              </span>
            </div>
          </div>

          {/* Main content */}
          <div className="space-y-5 p-5 sm:p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeModule}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="space-y-5"
              >
                {/* Row 1: KPI cards */}
                <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
                  {modules[activeModule].stats.map((kpi) => (
                    <div
                      key={kpi.label}
                      className="rounded-xl border border-white/5 bg-white/[0.03] p-3.5 transition-colors duration-300 hover:border-white/10 hover:bg-white/[0.05]"
                    >
                      <div className="flex items-center justify-between">
                        <kpi.icon className={`size-4 ${kpi.accent}`} />
                        <span className="flex items-center gap-0.5 text-[10px] font-medium text-emerald-300">
                          <ArrowUpRight className="size-3" />
                          {kpi.change}
                        </span>
                      </div>
                      <p className="mt-3 font-heading text-xl font-semibold text-white">
                        {kpi.value}
                      </p>
                      <p className="mt-0.5 text-[10px] text-muted-foreground">
                        {kpi.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Row 2: Module-specific content */}
                {activeModule === "leads" && (
                  <>
                    {/* Pipeline */}
                    <div className="rounded-xl border border-white/5 bg-white/[0.03] p-4">
                      <p className="text-xs font-medium text-white">Pipeline Health</p>
                      <div className="mt-4 space-y-3">
                        {(modules[activeModule] as LeadsModule).pipeline.map((stage) => (
                          <div key={stage.label}>
                            <div className="flex items-center justify-between text-[10px]">
                              <span className="text-muted-foreground">{stage.label}</span>
                              <span className="font-medium text-white">{stage.count}</span>
                            </div>
                            <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-white/5">
                              <motion.div
                                className={`h-full rounded-full ${stage.color}`}
                                initial={{ width: 0 }}
                                animate={{ width: stage.width }}
                                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Recent leads */}
                    <div className="rounded-xl border border-white/5 bg-white/[0.03] p-4">
                      <div className="flex items-center justify-between">
                        <p className="text-xs font-medium text-white">Recent Leads</p>
                        <span className="text-[10px] text-blue-300 transition-colors hover:text-blue-200">
                          View all
                        </span>
                      </div>
                      <div className="mt-3 space-y-2">
                        {(modules[activeModule] as LeadsModule).recentLeads.map((lead) => (
                          <div
                            key={lead.name}
                            className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2.5 transition-colors duration-300 hover:border-white/10 hover:bg-white/[0.04]"
                          >
                            <div className="flex items-center gap-2.5">
                              <CheckCircle2 className="size-4 text-emerald-400/70" />
                              <div>
                                <p className="text-xs font-medium text-white">{lead.name}</p>
                                <p className="text-[10px] text-muted-foreground">{lead.value}</p>
                              </div>
                            </div>
                            <span className={`rounded-full px-2 py-0.5 text-[9px] font-medium ${lead.color}`}>
                              {lead.tag}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {activeModule === "hrms" && (
                  <>
                    {/* Department summary */}
                    <div className="rounded-xl border border-white/5 bg-white/[0.03] p-4">
                      <p className="text-xs font-medium text-white">Department Summary</p>
                      <div className="mt-4 grid grid-cols-2 gap-3">
                        {(modules[activeModule] as HRMSModule).departments.map((dept) => (
                          <div
                            key={dept.name}
                            className="rounded-lg border border-white/5 bg-white/[0.02] p-3"
                          >
                            <div className="flex items-center justify-between">
                              <Briefcase className="size-4 text-muted-foreground" />
                              <span className="text-xs font-semibold text-white">{dept.count}</span>
                            </div>
                            <p className="mt-2 text-[10px] text-muted-foreground">{dept.name}</p>
                            <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/5">
                              <motion.div
                                className={`h-full rounded-full ${dept.color}`}
                                initial={{ width: 0 }}
                                animate={{ width: `${(dept.count / 100) * 100}%` }}
                                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Leave requests */}
                    <div className="rounded-xl border border-white/5 bg-white/[0.03] p-4">
                      <div className="flex items-center justify-between">
                        <p className="text-xs font-medium text-white">Leave Requests</p>
                        <span className="text-[10px] text-blue-300 transition-colors hover:text-blue-200">
                          View all
                        </span>
                      </div>
                      <div className="mt-3 space-y-2">
                        {(modules[activeModule] as HRMSModule).leaveRequests.map((request) => (
                          <div
                            key={request.name}
                            className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2.5"
                          >
                            <div className="flex items-center gap-2.5">
                              <div className="flex size-8 items-center justify-center rounded-lg bg-linear-to-br from-emerald-500/20 to-teal-500/20">
                                <Users className="size-4 text-emerald-300" />
                              </div>
                              <div>
                                <p className="text-xs font-medium text-white">{request.name}</p>
                                <p className="text-[10px] text-muted-foreground">
                                  {request.type} · {request.duration}
                                </p>
                              </div>
                            </div>
                            <span
                              className={`rounded-full px-2 py-0.5 text-[9px] font-medium ${
                                request.status === "Approved"
                                  ? "bg-emerald-400/15 text-emerald-300"
                                  : "bg-amber-400/15 text-amber-300"
                              }`}
                            >
                              {request.status}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {activeModule === "invoicing" && (
                  <>
                    {/* Invoice list */}
                    <div className="rounded-xl border border-white/5 bg-white/[0.03] p-4">
                      <div className="flex items-center justify-between">
                        <p className="text-xs font-medium text-white">Recent Invoices</p>
                        <span className="text-[10px] text-blue-300 transition-colors hover:text-blue-200">
                          View all
                        </span>
                      </div>
                      <div className="mt-3 space-y-2">
                        {(modules[activeModule] as InvoicingModule).invoices.map((invoice) => (
                          <div
                            key={invoice.id}
                            className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2.5"
                          >
                            <div className="flex items-center gap-2.5">
                              <Receipt className="size-4 text-muted-foreground" />
                              <div>
                                <p className="text-xs font-medium text-white">{invoice.id}</p>
                                <p className="text-[10px] text-muted-foreground">
                                  {invoice.client} · {invoice.date}
                                </p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="text-xs font-semibold text-white">{invoice.amount}</p>
                              <span
                                className={`text-[9px] font-medium ${
                                  invoice.status === "Paid"
                                    ? "text-emerald-300"
                                    : invoice.status === "Pending"
                                    ? "text-amber-300"
                                    : "text-red-300"
                                }`}
                              >
                                {invoice.status}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Outstanding invoices */}
                    <div className="rounded-xl border border-white/5 bg-white/[0.03] p-4">
                      <p className="text-xs font-medium text-white">Outstanding Invoices</p>
                      <div className="mt-4 space-y-3">
                        {(modules[activeModule] as InvoicingModule).outstanding.map((item) => (
                          <div
                            key={item.client}
                            className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2.5"
                          >
                            <div className="flex items-center gap-2.5">
                              <CreditCard className="size-4 text-muted-foreground" />
                              <div>
                                <p className="text-xs font-medium text-white">{item.client}</p>
                                <p className="text-[10px] text-muted-foreground">{item.days} days overdue</p>
                              </div>
                            </div>
                            <span className="text-xs font-semibold text-white">{item.amount}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {activeModule === "analytics" && (
                  <>
                    {/* Revenue chart */}
                    <div className="rounded-xl border border-white/5 bg-white/[0.03] p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs font-medium text-white">Revenue Overview</p>
                          <p className="text-[10px] text-muted-foreground">Last 8 months</p>
                        </div>
                        <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-muted-foreground">
                          Monthly
                        </span>
                      </div>
                      <div className="mt-4 flex h-24 items-end gap-2">
                        {(modules[activeModule] as AnalyticsModule).chartBars.map((height, i) => (
                          <div
                            key={i}
                            className="group relative flex-1 rounded-t-md bg-linear-to-t from-amber-500/60 to-orange-500/60 transition-all duration-300 hover:from-amber-400 hover:to-orange-400"
                            style={{ height: `${height}%` }}
                          >
                            <span className="absolute inset-x-0 -top-6 hidden text-center text-[9px] text-muted-foreground group-hover:block">
                              ${height}k
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-2 flex justify-between text-[9px] text-muted-foreground">
                        {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"].map((m) => (
                          <span key={m}>{m}</span>
                        ))}
                      </div>
                    </div>

                    {/* Business insights */}
                    <div className="rounded-xl border border-white/5 bg-white/[0.03] p-4">
                      <p className="text-xs font-medium text-white">Business Insights</p>
                      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                        {(modules[activeModule] as AnalyticsModule).insights.map((insight) => (
                          <div
                            key={insight.title}
                            className="rounded-lg border border-white/5 bg-white/[0.02] p-3"
                          >
                            <div className="flex items-center gap-2">
                              <Lightbulb className="size-3.5 text-amber-300" />
                              <p className="text-[10px] text-muted-foreground">{insight.title}</p>
                            </div>
                            <p className="mt-2 text-lg font-semibold text-white">{insight.value}</p>
                            <p className="text-[10px] text-muted-foreground">{insight.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
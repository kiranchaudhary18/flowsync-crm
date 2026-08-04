"use client";

import { motion } from "framer-motion";
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
} from "lucide-react";

const pipelineStages = [
  { label: "New", count: 24, color: "bg-blue-500", width: "w-full" },
  { label: "Contacted", count: 18, color: "bg-indigo-400", width: "w-[82%]" },
  { label: "Qualified", count: 11, color: "bg-violet-400", width: "w-[64%]" },
  { label: "Won", count: 7, color: "bg-emerald-400", width: "w-[48%]" },
];

const recentDeals = [
  { name: "Acme Corp", value: "$12,400", tag: "Won", color: "bg-emerald-400/15 text-emerald-300" },
  { name: "Nimbus Labs", value: "$8,900", tag: "Qualified", color: "bg-violet-400/15 text-violet-300" },
  { name: "Vertex Inc", value: "$21,000", tag: "Contacted", color: "bg-indigo-400/15 text-indigo-300" },
];

const chartBars = [35, 55, 42, 68, 48, 78, 60, 88];

export function DashboardMockup() {
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
              <span className="flex size-10 items-center justify-center rounded-xl bg-linear-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/25">
                <Users className="size-4.5 text-white" />
              </span>
              <span className="flex size-10 items-center justify-center rounded-xl text-muted-foreground transition-colors hover:bg-white/5 hover:text-white">
                <Building2 className="size-4.5" />
              </span>
              <span className="flex size-10 items-center justify-center rounded-xl text-muted-foreground transition-colors hover:bg-white/5 hover:text-white">
                <FileText className="size-4.5" />
              </span>
              <span className="flex size-10 items-center justify-center rounded-xl text-muted-foreground transition-colors hover:bg-white/5 hover:text-white">
                <CircleDollarSign className="size-4.5" />
              </span>
              <span className="mt-4 flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-muted-foreground">
                <MoreHorizontal className="size-4.5" />
              </span>
            </div>
          </div>

          {/* Main content */}
          <div className="space-y-5 p-5 sm:p-6">
            {/* Row 1: KPI cards */}
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
              {[
                { label: "Total Revenue", value: "$84.2k", change: "+12.4%", icon: TrendingUp, accent: "text-emerald-300" },
                { label: "Active Leads", value: "1,248", change: "+8.1%", icon: Users, accent: "text-blue-300" },
                { label: "Open Invoices", value: "196", change: "+3.2%", icon: FileText, accent: "text-violet-300" },
                { label: "Win Rate", value: "32%", change: "+5.7%", icon: CircleDollarSign, accent: "text-indigo-300" },
              ].map((kpi) => (
                <div
                  key={kpi.label}
                  className="rounded-xl border border-white/5 bg-white/[0.03] p-3.5 transition-colors duration-300 hover:border-white/10 hover:bg-white/[0.05]"
                >
                  <div className="flex items-center justify-between">
                    <kpi.icon className={["size-4", kpi.accent].join(" ")} />
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

            {/* Row 2: Revenue chart + pipeline */}
            <div className="grid gap-3 lg:grid-cols-[1.5fr_1fr]">
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
                  {chartBars.map((height, i) => (
                    <div
                      key={i}
                      className="group relative flex-1 rounded-t-md bg-linear-to-t from-blue-500/60 to-purple-500/60 transition-all duration-300 hover:from-blue-400 hover:to-purple-400"
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

              {/* Pipeline */}
              <div className="rounded-xl border border-white/5 bg-white/[0.03] p-4">
                <p className="text-xs font-medium text-white">Pipeline Health</p>
                <div className="mt-4 space-y-3">
                  {pipelineStages.map((stage) => (
                    <div key={stage.label}>
                      <div className="flex items-center justify-between text-[10px]">
                        <span className="text-muted-foreground">{stage.label}</span>
                        <span className="font-medium text-white">{stage.count}</span>
                      </div>
                      <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-white/5">
                        <motion.div
                          className={["h-full rounded-full", stage.color].join(" ")}
                          initial={{ width: 0 }}
                          whileInView={{ width: stage.width }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Row 3: Recent deals */}
            <div className="rounded-xl border border-white/5 bg-white/[0.03] p-4">
              <div className="flex items-center justify-between">
                <p className="text-xs font-medium text-white">Recent Deals</p>
                <span className="text-[10px] text-blue-300 transition-colors hover:text-blue-200">
                  View all
                </span>
              </div>
              <div className="mt-3 space-y-2">
                {recentDeals.map((deal) => (
                  <div
                    key={deal.name}
                    className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2.5 transition-colors duration-300 hover:border-white/10 hover:bg-white/[0.04]"
                  >
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="size-4 text-emerald-400/70" />
                      <div>
                        <p className="text-xs font-medium text-white">{deal.name}</p>
                        <p className="text-[10px] text-muted-foreground">{deal.value}</p>
                      </div>
                    </div>
                    <span className={["rounded-full px-2 py-0.5 text-[9px] font-medium", deal.color].join(" ")}>
                      {deal.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
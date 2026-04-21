import React, { useMemo } from "react";
import { AlertTriangle } from "lucide-react";
import { DataTable, PageHero, Pill } from "../../../components/ui";

const statusStyles = {
  Waiting: "bg-amber-500/15 text-amber-300 border-amber-400/30",
  Called: "bg-emerald-500/15 text-emerald-300 border-emerald-400/30",
  Delayed: "bg-rose-500/15 text-rose-300 border-rose-400/30",
};

const LiveQueuePage = () => {
  const data = useMemo(
    () => ({
      queue: [
        {
          id: "T-2041",
          name: "Hanna Bekele",
          entry: "Remote",
          service: "General Consultation",
          wait: "12 min",
          status: "Waiting",
          priority: "Standard",
        },
        {
          id: "T-2042",
          name: "Yonas Abate",
          entry: "Walk-In",
          service: "Document Review",
          wait: "6 min",
          status: "Called",
          priority: "Standard",
        },
        {
          id: "T-2043",
          name: "Mimi Tsegaye",
          entry: "Remote",
          service: "Payments & Receipts",
          wait: "18 min",
          status: "Waiting",
          priority: "High",
        },
        {
          id: "T-2044",
          name: "Elias Zerihun",
          entry: "Walk-In",
          service: "Special Assistance",
          wait: "22 min",
          status: "Delayed",
          priority: "Standard",
        },
      ],
    }),
    [],
  );

  const queueColumns = useMemo(
    () => [
      {
        key: "id",
        header: "Ticket ID",
        cellClassName: "px-4 py-4 font-semibold text-white",
      },
      { key: "name", header: "Customer Name" },
      { key: "entry", header: "Entry Type" },
      { key: "service", header: "Service Type" },
      { key: "wait", header: "Est. Wait" },
      {
        key: "status",
        header: "Status",
        render: (value) => (
          <span
            className={`rounded-full border px-3 py-1 text-xs font-semibold ${
              statusStyles[value] ||
              "border-white/10 bg-slate-900/70 text-slate-200"
            }`}
          >
            {value}
          </span>
        ),
      },
      {
        key: "priority",
        header: "Priority",
        render: (value) =>
          value === "High" ? (
            <span className="inline-flex items-center gap-1 rounded-full border border-rose-400/30 bg-rose-500/15 px-3 py-1 text-xs font-semibold text-rose-300">
              <AlertTriangle size={12} /> Priority
            </span>
          ) : (
            <span className="rounded-full border border-white/10 bg-slate-900/70 px-3 py-1 text-xs font-semibold text-slate-200">
              Standard
            </span>
          ),
      },
    ],
    [],
  );

  return (
    <div className="space-y-6">
      <PageHero
        title="Live Queue Operations"
        description="FIFO ordering is enforced at the queue engine. Operators act on the live queue state streamed through WebSockets."
        badge={
          <Pill className="border-white/10 bg-slate-950/60 text-slate-200">
            FIFO enforced
          </Pill>
        }
        actions={
          <>
            <button className="rounded-full bg-sky-500/20 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-950/40">
              Call Next
            </button>
            <button className="rounded-full border border-white/10 bg-slate-950/40 px-4 py-2 text-sm font-semibold text-slate-200">
              Mark Served
            </button>
            <button className="rounded-full border border-white/10 bg-slate-950/40 px-4 py-2 text-sm font-semibold text-slate-200">
              Mark No-Show
            </button>
            <button
              className="rounded-full border border-white/10 bg-slate-950/40 px-4 py-2 text-sm font-semibold text-slate-400"
              disabled
            >
              Escalate (demo)
            </button>
          </>
        }
      />

      <DataTable columns={queueColumns} rows={data.queue} />

      {/* WebSocket hook would stream queue updates and update row status in real time. */}
    </div>
  );
};

export default LiveQueuePage;

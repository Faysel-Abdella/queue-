import React, { useMemo } from "react";
import { DataTable, PageHero, Pill, StatusBadge } from "../../../components/ui";

const statusTone = {
  Waiting: "warning",
  Called: "success",
  Delayed: "danger",
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
          <StatusBadge label={value} tone={statusTone[value]} />
        ),
      },
      {
        key: "priority",
        header: "Priority",
        render: (value) =>
          value === "High" ? (
            <StatusBadge label="Priority" tone="danger" />
          ) : (
            <StatusBadge label="Standard" tone="neutral" />
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

import React, { useMemo } from "react";
import {
  ActionButton,
  DataTable,
  PageHero,
  Pill,
  StatusBadge,
} from "../../../components/ui";

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
            <ActionButton tone="primary">Call Next</ActionButton>
            <ActionButton tone="secondary">Mark Served</ActionButton>
            <ActionButton tone="secondary">Mark No-Show</ActionButton>
            <ActionButton tone="muted" disabled>
              Escalate (demo)
            </ActionButton>
          </>
        }
      />

      <DataTable
        columns={queueColumns}
        rows={data.queue}
        rowClassName={(row) =>
          `text-sm text-slate-200 ${
            row.status === "Delayed" ? "bg-rose-500/5" : ""
          }`
        }
      />

      {/* WebSocket hook would stream queue updates and update row status in real time. */}
    </div>
  );
};

export default LiveQueuePage;

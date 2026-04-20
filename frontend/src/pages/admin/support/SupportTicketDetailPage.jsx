import React, { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { InfoCard, PageHero } from "../../../components/ui";

const SupportTicketDetailPage = () => {
  const { ticketId } = useParams();
  const detail = useMemo(
    () => ({
      id: ticketId || "SUP-221",
      description:
        "Customer reported extended wait time beyond SLA during peak hours. Investigation required for staffing adherence.",
      timeline: [
        { time: "10:32 AM", note: "Ticket created by Customer Desk" },
        { time: "10:40 AM", note: "Assigned to Operations Lead" },
        { time: "11:10 AM", note: "Initial investigation started" },
      ],
      assignedAgent: "Selam T.",
      resolution: "Pending staffing adjustment and queue audit report.",
    }),
    [ticketId],
  );

  return (
    <div className="space-y-6">
      <PageHero
        title={`Ticket ${detail.id}`}
        description="Support case detail and resolution tracking."
        actions={
          <Link
            to="/admin/support/tickets"
            className="text-sm font-semibold text-slate-300 hover:text-white"
          >
            Back to Tickets
          </Link>
        }
      />

      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-lg shadow-slate-950/40">
          <h3 className="text-lg font-semibold text-white">
            Issue Description
          </h3>
          <p className="mt-3 text-sm text-slate-300">{detail.description}</p>

          <h4 className="mt-6 text-sm font-semibold text-slate-200">
            Timeline
          </h4>
          <div className="mt-3 space-y-3">
            {detail.timeline.map((entry) => (
              <div
                key={entry.time}
                className="rounded-xl border border-white/10 bg-slate-950/60 p-3"
              >
                <p className="text-xs text-slate-400">{entry.time}</p>
                <p className="text-sm text-slate-200">{entry.note}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <InfoCard label="Assigned Agent" value={detail.assignedAgent} />
          <InfoCard label="Resolution Notes" detail={detail.resolution} />
        </div>
      </div>

      {/* Detailed ticket notes would sync with an incident management backend. */}
    </div>
  );
};

export default SupportTicketDetailPage;

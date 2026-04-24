import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { DataTable, PageHero, StatusBadge } from "../../../components/ui";

const SupportTicketsPage = () => {
  const tickets = useMemo(
    () => [
      {
        id: "SUP-221",
        type: "Delay",
        reporter: "Customer Desk",
        priority: "High",
        status: "Open",
        createdAt: "10:32 AM",
      },
      {
        id: "SUP-222",
        type: "No-show",
        reporter: "Queue Manager",
        priority: "Medium",
        status: "In Progress",
        createdAt: "09:55 AM",
      },
      {
        id: "SUP-223",
        type: "System",
        reporter: "IT Support",
        priority: "Low",
        status: "Resolved",
        createdAt: "Yesterday",
      },
    ],
    [],
  );

  const statusTone = {
    Open: "danger",
    "In Progress": "warning",
    Resolved: "success",
  };

  const ticketColumns = [
    {
      key: "id",
      header: "Ticket ID",
      cellClassName: "px-4 py-4 font-semibold text-white",
      render: (value) => (
        <Link
          to={`/admin/support/tickets/${value}`}
          className="hover:text-slate-100"
        >
          {value}
        </Link>
      ),
    },
    { key: "type", header: "Issue Type" },
    { key: "reporter", header: "Reported By" },
    { key: "priority", header: "Priority", align: "center" },
    {
      key: "status",
      header: "Status",
      align: "center",
      render: (value) => <StatusBadge label={value} tone={statusTone[value]} />,
    },
    { key: "createdAt", header: "Created", align: "right" },
  ];

  return (
    <div className="space-y-6">
      <PageHero
        title="Support Tickets"
        description="Support tickets capture service disruptions and customer concerns, improving reliability and trust through transparent resolution."
      />

      <DataTable
        columns={ticketColumns}
        rows={tickets}
        emptyMessage="No support tickets yet"
        emptyDescription="New incidents and disruptions will appear here once reported."
      />

      {/* Ticket data would be retrieved from a support case management service. */}
    </div>
  );
};

export default SupportTicketsPage;

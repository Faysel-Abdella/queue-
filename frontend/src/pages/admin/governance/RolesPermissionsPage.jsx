import React from "react";
import { DataTable, PageHero } from "../../../components/ui";

const RolesPermissionsPage = () => {
  const roles = ["Admin", "Supervisor", "Operations", "Support"];
  const permissions = [
    "Queue Management",
    "Service Configuration",
    "Analytics Access",
    "Audit Logs",
    "Override Actions",
  ];

  const accessMatrix = {
    Admin: [true, true, true, true, true],
    Supervisor: [true, true, true, true, false],
    Operations: [true, false, true, false, false],
    Support: [false, false, true, false, false],
  };

  const columns = [
    {
      key: "permission",
      header: "Permission",
      cellClassName: "px-4 py-4 font-semibold text-white",
    },
    ...roles.map((role) => ({
      key: role,
      header: role,
      render: (isGranted) =>
        isGranted ? (
          <span className="rounded-full border border-emerald-400/30 bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-300">
            Granted
          </span>
        ) : (
          <span className="rounded-full border border-rose-400/30 bg-rose-500/15 px-3 py-1 text-xs font-semibold text-rose-300">
            Restricted
          </span>
        ),
    })),
  ];

  const rows = permissions.map((permission, index) => {
    const row = { permission };

    roles.forEach((role) => {
      row[role] = accessMatrix[role][index];
    });

    return row;
  });

  return (
    <div className="space-y-6">
      <PageHero
        title="Roles & Permissions"
        description="Access policies are view-only in demo mode. This matrix reflects enterprise-grade governance for queue operations."
      />

      <DataTable
        columns={columns}
        rows={rows}
        getRowKey={(row) => row.permission}
      />

      {/* Role policies would be enforced by auth middleware and stored in an IAM service. */}
    </div>
  );
};

export default RolesPermissionsPage;

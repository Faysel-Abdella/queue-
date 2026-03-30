import React from "react";
import { DataTable, PageHero, StatusBadge } from "../../../components/ui";

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
          <StatusBadge label="Granted" tone="success" />
        ) : (
          <StatusBadge label="Restricted" tone="danger" />
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

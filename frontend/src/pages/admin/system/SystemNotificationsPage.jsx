import React from "react";
import { InfoCard, PageHero } from "../../../components/ui";

const policyCards = [
  {
    label: "Threshold Rule",
    detail: "Notify customers at 3 positions away.",
  },
  {
    label: "Delivery Channels",
    detail: "SMS, in-app, and kiosk display.",
  },
  {
    label: "Escalation Rules",
    detail: "Supervisor notified after 2 no-shows.",
  },
];

const SystemNotificationsPage = () => {
  return (
    <div className="space-y-6">
      <PageHero
        title="Notification Policies"
        description="Notification rules determine when customers receive alerts and how providers coordinate service readiness."
      />

      <div className="grid gap-4 lg:grid-cols-3">
        {policyCards.map((policy) => (
          <InfoCard
            key={policy.label}
            label={policy.label}
            detail={policy.detail}
            labelClassName="text-slate-100 normal-case tracking-normal text-sm font-semibold"
          />
        ))}
      </div>

      {/* Notification policies would be managed via a rules engine and stored in configuration DB. */}
    </div>
  );
};

export default SystemNotificationsPage;

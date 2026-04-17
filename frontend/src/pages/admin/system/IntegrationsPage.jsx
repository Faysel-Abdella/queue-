import React from "react";
import { Plug } from "lucide-react";
import { IconInfoCard, PageHero } from "../../../components/ui";

const integrations = [
  { name: "Telebirr", status: "Planned" },
  { name: "SMS Gateway", status: "Active (Demo)" },
  { name: "Email Notifications", status: "Planned" },
];

const IntegrationsPage = () => {
  return (
    <div className="space-y-6">
      <PageHero
        title="System Integrations (Demo)"
        description="External integrations enable payments, messaging, and analytics partnerships. All connectors are demo-only in this capstone build."
      />

      <div className="grid gap-4 lg:grid-cols-3">
        {integrations.map((integration) => (
          <IconInfoCard
            key={integration.name}
            icon={<Plug size={18} />}
            label={integration.name}
            detail={`Status: ${integration.status}`}
          />
        ))}
      </div>

      {/* Integrations would be managed through secure API keys and service contracts. */}
    </div>
  );
};

export default IntegrationsPage;

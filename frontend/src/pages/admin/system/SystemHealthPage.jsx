import React from "react";
import { Activity, Database, Wifi } from "lucide-react";
import { IconInfoCard, PageHero } from "../../../components/ui";

const healthCards = [
  {
    label: "Queue Engine",
    value: "Stable",
    detail: "Latency 120ms",
    icon: <Activity size={18} />,
  },
  {
    label: "Database",
    value: "Healthy",
    detail: "Last write: 2 mins ago",
    icon: <Database size={18} />,
  },
  {
    label: "WebSocket",
    value: "Connected",
    detail: "Clients: 146",
    icon: <Wifi size={18} />,
  },
];

const SystemHealthPage = () => {
  return (
    <div className="space-y-6">
      <PageHero
        title="System Health"
        description="Status indicators summarize infrastructure health and real-time connectivity."
      />

      <div className="grid gap-4 lg:grid-cols-3">
        {healthCards.map((card) => (
          <IconInfoCard
            key={card.label}
            icon={card.icon}
            label={card.label}
            value={card.value}
            detail={card.detail}
          />
        ))}
      </div>

      {/* Health checks would poll infrastructure services and update status in real time. */}
    </div>
  );
};

export default SystemHealthPage;

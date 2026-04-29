import React from "react";

// Shared UI primitives for both landing and admin pages.
// Keeping these components together helps maintain consistent visuals
// and supports academic assessment of component reuse.

export const Section = ({ id, eyebrow, title, subtitle, children }) => (
  <section id={id} className="border-b border-white/5 py-16 sm:py-20">
    <div className="mx-auto max-w-6xl px-6">
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-3xl text-lg text-slate-300">{subtitle}</p>
      )}
      <div className="mt-10">{children}</div>
    </div>
  </section>
);

export const PageHero = ({
  title,
  description,
  badge,
  actions,
  className = "",
}) => (
  <div
    className={`rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950/90 via-slate-900/70 to-blue-950/70 p-6 shadow-lg shadow-slate-950/40 ${className}`}
  >
    <div className="flex flex-wrap items-start justify-between gap-4">
      <div>
        <h2 className="text-2xl font-semibold text-white">{title}</h2>
        {description && (
          <p className="mt-2 text-sm text-slate-300">{description}</p>
        )}
      </div>
      {badge && (
        <div className="flex flex-wrap items-center gap-2">{badge}</div>
      )}
    </div>
    {actions && (
      <div className="mt-4 flex flex-wrap items-center gap-3">{actions}</div>
    )}
  </div>
);

export const MetricCard = ({
  label,
  value,
  note,
  className = "",
  labelClassName = "text-slate-400",
  valueClassName = "text-white",
  noteClassName = "text-slate-400",
}) => (
  <div
    className={`rounded-2xl border border-white/10 bg-gradient-to-br from-slate-950/90 via-slate-900/70 to-blue-950/70 p-5 shadow-lg shadow-slate-950/40 ${className}`}
  >
    <p className={`text-sm ${labelClassName}`}>{label}</p>
    <p className={`mt-3 text-3xl font-semibold ${valueClassName}`}>{value}</p>
    {note && <p className={`mt-2 text-xs ${noteClassName}`}>{note}</p>}
  </div>
);

export const InfoCard = ({
  label,
  value,
  detail,
  className = "",
  labelClassName = "text-slate-400",
  valueClassName = "text-white",
  detailClassName = "text-slate-300",
}) => (
  <div
    className={`rounded-2xl border border-white/10 bg-slate-950/70 p-5 shadow-lg shadow-slate-950/40 ${className}`}
  >
    <p className={`text-xs uppercase tracking-[0.2em] ${labelClassName}`}>
      {label}
    </p>
    {value !== undefined && value !== null && value !== "" && (
      <p className={`mt-2 text-xl font-semibold ${valueClassName}`}>{value}</p>
    )}
    {detail && <p className={`mt-2 text-sm ${detailClassName}`}>{detail}</p>}
  </div>
);

export const IconInfoCard = ({
  icon,
  label,
  value,
  detail,
  className = "",
  labelClassName = "text-slate-300",
  valueClassName = "text-white",
  detailClassName = "text-slate-300",
}) => (
  <div
    className={`rounded-2xl border border-white/10 bg-slate-950/70 p-5 shadow-lg shadow-slate-950/40 ${className}`}
  >
    <div className={`flex items-center gap-2 ${labelClassName}`}>
      {icon}
      <span className="text-xs uppercase tracking-[0.2em]">{label}</span>
    </div>
    {value !== undefined && value !== null && value !== "" && (
      <p className={`mt-3 text-2xl font-semibold ${valueClassName}`}>{value}</p>
    )}
    {detail && <p className={`mt-2 text-sm ${detailClassName}`}>{detail}</p>}
  </div>
);

export const FeatureCard = ({ title, description, icon, className = "" }) => (
  <div
    className={`rounded-2xl border border-white/10 bg-gradient-to-br from-slate-950/90 via-slate-900/70 to-blue-950/70 p-6 shadow-lg shadow-slate-950/40 ${className}`}
  >
    <div className="flex items-center gap-3">
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-500/20 text-xl">
        {icon}
      </span>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
    </div>
    <p className="mt-4 text-sm text-slate-300">{description}</p>
  </div>
);

export const Pill = ({ children, className = "" }) => (
  <span
    className={`rounded-full border border-white/10 bg-gradient-to-r from-slate-900/80 to-blue-900/70 px-3 py-1 text-xs font-semibold text-slate-200 ${className}`}
  >
    {children}
  </span>
);

export const StatusBadge = ({ label, tone = "neutral", className = "" }) => {
  const tones = {
    neutral: "border-white/10 bg-slate-900/70 text-slate-200",
    success: "border-emerald-400/30 bg-emerald-500/15 text-emerald-300",
    warning: "border-amber-400/30 bg-amber-500/15 text-amber-300",
    danger: "border-rose-400/30 bg-rose-500/15 text-rose-300",
    info: "border-sky-400/30 bg-sky-500/15 text-sky-300",
  };

  return (
    <span
      className={`rounded-full border px-3 py-1 text-xs font-semibold ${tones[tone] || tones.neutral} ${className}`}
    >
      {label}
    </span>
  );
};

export const ActionButton = ({
  children,
  tone = "secondary",
  className = "",
  disabled = false,
  ...props
}) => {
  const tones = {
    primary: "bg-sky-500/20 text-white shadow-lg shadow-slate-950/40",
    secondary:
      "border border-white/10 bg-slate-950/40 text-slate-200 hover:bg-slate-900/70",
    muted: "border border-white/10 bg-slate-950/40 text-slate-400",
  };

  return (
    <button
      className={`rounded-full px-4 py-2 text-sm font-semibold ${tones[tone] || tones.secondary} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export const Table = ({
  columns,
  data,
  className = "",
  headerClassName = "",
  bodyClassName = "",
}) => (
  <div
    className={`overflow-hidden rounded-2xl border border-white/10 ${className}`}
  >
    <table className="min-w-full divide-y divide-white/10">
      <thead
        className={`bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-blue-950/70 ${headerClassName}`}
      >
        <tr>
          {columns.map((column) => (
            <th
              key={column}
              className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-300"
            >
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody
        className={`divide-y divide-white/5 bg-slate-950/70 ${bodyClassName}`}
      >
        {data.map((row) => (
          <tr key={row.id} className="text-sm text-slate-200">
            {Object.values(row.cells).map((value, index) => (
              <td key={`${row.id}-${index}`} className="px-4 py-4">
                {value}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export const DataTable = ({
  columns,
  rows = [],
  getRowKey,
  className = "",
  rowClassName = "text-sm text-slate-200",
  emptyMessage = "No records available.",
  emptyDescription,
  emptyAction,
  defaultSort,
}) => {
  const [sortConfig, setSortConfig] = React.useState(defaultSort || null);

  const sortedRows = React.useMemo(() => {
    if (!sortConfig || !sortConfig.key) {
      return rows;
    }

    const targetColumn = columns.find(
      (column) => column.key === sortConfig.key,
    );
    if (!targetColumn || !targetColumn.sortable) {
      return rows;
    }

    const getSortValue = (row) =>
      targetColumn.sortValue
        ? targetColumn.sortValue(row)
        : row[sortConfig.key];

    const normalizedRows = [...rows];
    normalizedRows.sort((a, b) => {
      const valueA = getSortValue(a);
      const valueB = getSortValue(b);

      if (valueA === valueB) {
        return 0;
      }

      if (typeof valueA === "number" && typeof valueB === "number") {
        return sortConfig.direction === "asc"
          ? valueA - valueB
          : valueB - valueA;
      }

      const comparableA = String(valueA ?? "").toLowerCase();
      const comparableB = String(valueB ?? "").toLowerCase();
      const sortResult = comparableA.localeCompare(comparableB, undefined, {
        numeric: true,
      });

      return sortConfig.direction === "asc" ? sortResult : -sortResult;
    });

    return normalizedRows;
  }, [columns, rows, sortConfig]);

  const toggleSort = (column) => {
    if (!column.sortable) {
      return;
    }

    setSortConfig((currentSort) => {
      if (!currentSort || currentSort.key !== column.key) {
        return { key: column.key, direction: "asc" };
      }

      if (currentSort.direction === "asc") {
        return { key: column.key, direction: "desc" };
      }

      return null;
    });
  };

  return (
    <div
      className={`overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70 shadow-lg shadow-slate-950/40 ${className}`}
    >
      <table className="min-w-full divide-y divide-white/10">
        <thead className="bg-slate-950/80">
          <tr>
            {columns.map((column) => {
              const isActiveSort = sortConfig?.key === column.key;
              const sortIndicator =
                isActiveSort && sortConfig?.direction === "asc"
                  ? "↑"
                  : isActiveSort && sortConfig?.direction === "desc"
                    ? "↓"
                    : "↕";

              return (
                <th
                  key={column.key}
                  className={`px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-300 ${
                    column.headerClassName || ""
                  } ${column.align === "center" ? "text-center" : "text-left"} ${
                    column.align === "right" ? "text-right" : ""
                  }`}
                >
                  {column.sortable ? (
                    <button
                      type="button"
                      onClick={() => toggleSort(column)}
                      className="inline-flex items-center gap-1 text-inherit"
                    >
                      <span>{column.header}</span>
                      <span className="text-slate-500">{sortIndicator}</span>
                    </button>
                  ) : (
                    column.header
                  )}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className="divide-y divide-white/10">
          {sortedRows.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="px-4 py-10 text-center">
                <p className="text-sm font-semibold text-slate-200">
                  {emptyMessage}
                </p>
                {emptyDescription && (
                  <p className="mt-1 text-xs text-slate-400">
                    {emptyDescription}
                  </p>
                )}
                {emptyAction && <div className="mt-4">{emptyAction}</div>}
              </td>
            </tr>
          ) : (
            sortedRows.map((row, rowIndex) => {
              const rowKey = getRowKey
                ? getRowKey(row, rowIndex)
                : row.id || rowIndex;
              const resolvedRowClassName =
                typeof rowClassName === "function"
                  ? rowClassName(row, rowIndex)
                  : rowClassName;

              return (
                <tr key={rowKey} className={resolvedRowClassName}>
                  {columns.map((column) => {
                    const rawValue = row[column.key];
                    const alignmentClassName =
                      column.align === "center"
                        ? "text-center"
                        : column.align === "right"
                          ? "text-right"
                          : "text-left";
                    const resolvedCellClassName =
                      typeof column.cellClassName === "function"
                        ? column.cellClassName(rawValue, row, rowIndex)
                        : column.cellClassName || "";
                    return (
                      <td
                        key={`${rowKey}-${column.key}`}
                        className={`px-4 py-4 ${alignmentClassName} ${
                          resolvedCellClassName
                        }`}
                      >
                        {column.render
                          ? column.render(rawValue, row, rowIndex)
                          : rawValue}
                      </td>
                    );
                  })}
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
};

export const ChartCard = ({
  title,
  subtitle,
  children,
  badge,
  className = "",
  titleClassName = "text-white",
  subtitleClassName = "text-slate-400",
}) => (
  <div
    className={`rounded-2xl border border-white/10 bg-gradient-to-br from-slate-950/90 via-slate-900/70 to-blue-950/70 p-6 shadow-lg shadow-slate-950/40 ${className}`}
  >
    <div className="flex items-center justify-between">
      <div>
        <h3 className={`text-lg font-semibold ${titleClassName}`}>{title}</h3>
        {subtitle && (
          <p className={`text-sm ${subtitleClassName}`}>{subtitle}</p>
        )}
      </div>
      {badge && <Pill>{badge}</Pill>}
    </div>
    <div className="mt-6 h-52">{children}</div>
  </div>
);

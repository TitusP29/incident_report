import { AlertTriangle, CheckCircle } from "lucide-react";

export default function EligibleIncidents({
  title = "Eligible Incidents for Online Reporting",
  description,
  incidents = [],
  warning,
}) {
  return (
    <div className="rounded-md border border-slate-200 bg-white p-4 shadow-sm">
      <h3 className="text-[10px] font-bold text-slate-900">
        {title}
      </h3>

      {description && (
        <p className="mt-3 text-[8px] leading-4 text-slate-500">
          {description}
        </p>
      )}

      <div className="mt-3 space-y-2">
        {incidents.map((incident) => (
          <div
            key={incident}
            className="flex items-center gap-2 text-[8px] text-slate-700"
          >
            <CheckCircle
              size={11}
              className="shrink-0 text-teal-600"
            />

            <span>{incident}</span>
          </div>
        ))}
      </div>

      {warning && (
        <div className="mt-4 flex items-start gap-2 rounded border border-amber-300 bg-amber-50 px-2.5 py-2">
          <AlertTriangle
            size={12}
            className="mt-0.5 shrink-0 text-amber-600"
          />

          <p className="text-[7px] leading-3 text-amber-700">
            {warning}
          </p>
        </div>
      )}
    </div>
  );
}
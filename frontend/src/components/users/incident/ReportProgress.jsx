export default function ReportProgress({
  currentStep = 1,
  totalSteps = 3,
  label = "ELIGIBILITY SCREENING",
}) {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="mb-7">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-[8px] font-bold uppercase tracking-wide text-teal-600">
          STEP {currentStep} OF {totalSteps}
        </span>

        <span className="text-[8px] font-semibold uppercase tracking-wide text-slate-500">
          {label}
        </span>
      </div>

      <div className="relative h-1 overflow-hidden rounded-full bg-slate-200">
        <div
          className="h-full rounded-full bg-teal-500 transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
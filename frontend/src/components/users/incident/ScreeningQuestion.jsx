export default function ScreeningQuestion({
  number,
  question,
  options,
  selected,
  onSelect,
}) {
  return (
    <div className="w-full max-w-[300px] rounded-md border border-slate-200 bg-white p-3 shadow-sm">
      <p className="text-[9px] font-bold leading-4 text-slate-800">
        {number}. {question}
      </p>

      <div className="mt-3 flex flex-wrap gap-2">
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => onSelect(option.value)}
            className={`rounded-md border px-4 py-2 text-[8px] font-semibold transition ${
              selected === option.value
                ? option.activeClass
                : "border-slate-200 bg-white text-slate-700 hover:border-teal-500 hover:text-teal-600"
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
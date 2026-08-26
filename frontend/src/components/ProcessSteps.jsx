const steps = [
  {
    number: "01",
    title: "Check Eligibility",
    description:
      "Verify that the incident qualifies for non-emergency classification and occurred inside borders.",
  },
  {
    number: "02",
    title: "Submit Report",
    description:
      "Fill out details about yourself, the location, description, and upload photos/docs safely.",
  },
  {
    number: "03",
    title: "Track Progress",
    description:
      "Receive an official reference key immediately and monitor the progress of review online.",
  },
];

function ProcessSteps() {
  return (
    <section className="mt-6 sm:mt-7">

      <h3 className="mb-3 text-[10px] font-extrabold text-[#10243e] sm:text-[13px]">
        How the Online Reporting Process Works
      </h3>

      <div className="grid gap-3 md:grid-cols-3">

        {steps.map((step) => (
          <div
            key={step.number}
            className="rounded-[5px] border border-[#e0e6eb] bg-white p-3 sm:p-4"
          >

            <div className="mb-3 flex h-[19px] w-[19px] items-center justify-center rounded-full bg-[#edf4ff] text-[6px] font-bold text-[#294d78] sm:h-[22px] sm:w-[22px] sm:text-[7px]">
              {step.number}
            </div>

            <h4 className="text-[8px] font-bold text-[#10243e] sm:text-[9px]">
              {step.title}
            </h4>

            <p className="mt-2 text-[6px] leading-[1.55] text-[#647287] sm:text-[7px]">
              {step.description}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default ProcessSteps;
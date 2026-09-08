import { useState } from "react";
import { AlertTriangle, CheckCircle2, ShieldCheck } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import SouthAfricaBar from "../components/SouthAfricaBar";
import DashboardHeader from "../components/DashboardHeader";
import DashboardFooter from "../components/DashboardFooter";

const questions = [
  {
    id: "danger",
    question: "Is anyone currently in immediate danger or is there a threat of violence?",
    unsafe: "Yes, There's Danger",
    safe: "No, Scene is Safe",
  },
  {
    id: "services",
    question: "Do you require immediate ambulance or fire services at this location?",
    unsafe: "Yes, Send Services",
    safe: "No, Not Required",
  },
  {
    id: "stable",
    question: "Did the incident occur in the past (not currently in progress) with the scene now stable?",
    unsafe: "No, Scene In Progress",
    safe: "Yes, Scene is Now Stable",
  },
];

function NewReport() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});

  const hasEmergency = Object.values(answers).includes("unsafe");
  const isEligible = questions.every((question) => answers[question.id] === "safe");

  const chooseAnswer = (id, answer) => {
    setAnswers((current) => ({ ...current, [id]: answer }));
  };

  const handleProceed = () => {
    if (isEligible) {
      navigate("/report-details");
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#f5f8fa] text-[#10243e]">
      <SouthAfricaBar />
      <DashboardHeader />

      <main className="mx-auto w-full max-w-[1170px] flex-1 px-4 py-8 sm:px-8 sm:py-10">
        <div className="mb-7 flex items-center justify-between border-b border-[#dfe6ed] pb-2">
          <p className="text-[10px] font-bold uppercase tracking-wide text-[#009b83]">
            Step 1 of 3
          </p>
          <p className="text-[10px] font-bold uppercase tracking-wide text-[#526174]">
            Eligibility screening
          </p>
        </div>
        <div className="-mt-[30px] mb-7 h-1 w-[38%] rounded-full bg-[#0c9b8d]" />

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(300px,0.8fr)]">
          <section>
            <h1 className="mb-5 text-xl font-extrabold tracking-tight sm:text-2xl">
              Initial Screening Questions
            </h1>

            <div className="space-y-4">
              {questions.map((item, index) => (
                <article
                  key={item.id}
                  className="max-w-[500px] rounded-lg border border-[#dfe6ed] bg-white p-4"
                >
                  <h2 className="min-h-10 text-sm font-bold leading-snug text-[#10243e]">
                    {index + 1}. {item.question}
                  </h2>

                  <div className="mt-3 flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => chooseAnswer(item.id, "unsafe")}
                      className={`min-w-[138px] rounded-md border px-4 py-2 text-xs font-bold transition ${
                        answers[item.id] === "unsafe"
                          ? "border-[#ed2929] bg-[#fff0f0] text-[#d92323] ring-1 ring-[#ed2929]"
                          : "border-[#ed2929] bg-white text-[#e52424] hover:bg-[#fff5f5]"
                      }`}
                    >
                      {item.unsafe}
                    </button>
                    <button
                      type="button"
                      onClick={() => chooseAnswer(item.id, "safe")}
                      className={`min-w-[138px] rounded-md px-4 py-2 text-xs font-bold transition ${
                        answers[item.id] === "safe"
                          ? "bg-[#0c9b8d] text-white ring-2 ring-[#84d8cf]"
                          : "bg-[#10243e] text-white hover:bg-[#1b3658]"
                      }`}
                    >
                      {item.safe}
                    </button>
                  </div>
                </article>
              ))}
            </div>

            {hasEmergency && (
              <div className="mt-5 flex max-w-[500px] gap-3 rounded-lg border border-[#f4c7c7] bg-[#fff7f7] p-4 text-sm text-[#9d2424]">
                <AlertTriangle className="mt-0.5 shrink-0" size={18} />
                <p>
                  This incident needs immediate assistance. Please call emergency services on <strong>10111</strong> for police, or <strong>10177</strong> for ambulance and fire services.
                </p>
              </div>
            )}
          </section>

          <aside className="h-fit rounded-lg border border-[#dfe6ed] bg-white p-5">
            <h2 className="text-base font-extrabold">Eligible Incidents for Online Reporting</h2>
            <p className="mt-4 text-xs leading-relaxed text-[#536276]">
              Only the following low-risk event types may be processed through this online reporting environment:
            </p>

            <ul className="mt-5 space-y-3 text-sm text-[#27374c]">
              {[
                "Property Damage / Vandalism",
                "Minor Theft (no physical threat/weapons)",
                "Persistent Noise Nuisances",
                "Lost Personal Belongings",
              ].map((incident) => (
                <li key={incident} className="flex items-center gap-3">
                  <ShieldCheck size={17} className="shrink-0 text-[#0c9b8d]" />
                  {incident}
                </li>
              ))}
            </ul>

            <div className="mt-5 flex gap-2 rounded-md border border-[#f5d579] bg-[#fff9e6] p-3 text-xs leading-relaxed text-[#9c6810]">
              <AlertTriangle className="mt-0.5 shrink-0" size={15} />
              Filing a false report is a criminal offense under South African Law.
            </div>
          </aside>
        </div>

        <div className="mt-8 flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Link to="/user" className="text-sm font-medium text-[#526174] hover:text-[#10243e]">
            Cancel and return home
          </Link>
          <button
            type="button"
            onClick={handleProceed}
            disabled={!isEligible}
            className="inline-flex items-center justify-center gap-2 rounded-md bg-[#0c9b8d] px-7 py-3 text-sm font-bold text-white transition hover:bg-[#07897c] disabled:cursor-not-allowed disabled:bg-[#a8d8d2]"
          >
            <CheckCircle2 size={17} />
            Proceed to Details Form
          </button>
        </div>
      </main>

      <DashboardFooter />
    </div>
  );
}

export default NewReport;

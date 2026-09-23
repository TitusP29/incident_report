import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ReportHeader from "./ReportHeader";
import ReportProgress from "./ReportProgress";
import ScreeningQuestion from "./ScreeningQuestion";
import EligibleIncidents from "./EligibleIncidents";
import ReportFooter from "./ReportFooter";

const questions = [
  {
    id: "danger",
    number: 1,
    question:
      "Is anyone currently in immediate danger or is there a threat of violence?",
    options: [
      {
        value: "yes",
        label: "Yes, There is Danger",
        activeClass: "border-red-500 bg-red-50 text-red-600",
      },
      {
        value: "no",
        label: "No, Scene is Safe",
        activeClass: "border-slate-800 bg-[#071b33] text-white",
      },
    ],
  },

  {
    id: "emergencyServices",
    number: 2,
    question:
      "Do you require immediate ambulance or fire services at this location?",
    options: [
      {
        value: "yes",
        label: "Yes, Send Services",
        activeClass: "border-red-500 bg-red-50 text-red-600",
      },
      {
        value: "no",
        label: "No, Not Required",
        activeClass: "border-slate-800 bg-[#071b33] text-white",
      },
    ],
  },

  {
    id: "incidentStable",
    number: 3,
    question:
      "Did the incident occur in the past (not currently in progress) with the scene now stable?",
    options: [
      {
        value: "yes",
        label: "Yes, Scene is Now Stable",
        activeClass: "border-teal-600 bg-teal-600 text-white",
      },
      {
        value: "no",
        label: "No, Scene in Progress",
        activeClass: "border-slate-800 bg-[#071b33] text-white",
      },
    ],
  },
];

const eligibleIncidents = [
  "Property Damage / Vandalism",
  "Minor Theft (no physical threats/weapons)",
  "Persistent Noise Nuisances",
  "Lost Personal Belongings",
];

export default function InitialScreening() {
  const navigate = useNavigate();

  const [answers, setAnswers] = useState({
    danger: null,
    emergencyServices: null,
    incidentStable: null,
  });

  const handleAnswer = (question, value) => {
    setAnswers((previous) => ({
      ...previous,
      [question]: value,
    }));
  };

  const handleProceed = () => {
    const unanswered = Object.values(answers).some(
      (answer) => answer === null
    );

    if (unanswered) {
      alert("Please answer all screening questions.");
      return;
    }

    if (
      answers.danger === "yes" ||
      answers.emergencyServices === "yes"
    ) {
      alert(
        "This situation requires emergency assistance. Please contact 10111 or 10177."
      );
      return;
    }

    if (answers.incidentStable === "no") {
      alert(
        "The incident appears to still be in progress. Please contact emergency services if necessary."
      );
      return;
    }

    navigate("/report/details");
  };

  return (
    <div className="min-h-screen bg-[#f5f7fa] text-slate-900">
      <ReportHeader />

      <main className="mx-auto max-w-[1200px] px-5 pb-8 pt-7">
        <ReportProgress
          currentStep={1}
          totalSteps={3}
          label="Eligibility Screening"
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_340px]">
          {/* QUESTIONS */}
          <section>
            <h2 className="mb-4 text-[15px] font-bold">
              Initial Screening Questions
            </h2>

            <div className="space-y-4">
              {questions.map((question) => (
                <ScreeningQuestion
                  key={question.id}
                  number={question.number}
                  question={question.question}
                  options={question.options}
                  selected={answers[question.id]}
                  onSelect={(value) =>
                    handleAnswer(question.id, value)
                  }
                />
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between">
              <button
                onClick={() => navigate("/dashboard")}
                className="text-[9px] font-medium text-slate-700 hover:text-teal-600"
              >
                Cancel and return home
              </button>

              <button
                onClick={handleProceed}
                className="rounded-md bg-teal-600 px-6 py-2.5 text-[9px] font-bold text-white transition hover:bg-teal-700"
              >
                Proceed to Details Form
              </button>
            </div>
          </section>

          {/* INFORMATION */}
          <aside>
            <EligibleIncidents
              description="Only the following low-risk event types may be processed through this simulation environment:"
              incidents={eligibleIncidents}
              warning="Filing a false report is a criminal offense under South African law."
            />
          </aside>
        </div>
      </main>

      <ReportFooter />
    </div>
  );
}
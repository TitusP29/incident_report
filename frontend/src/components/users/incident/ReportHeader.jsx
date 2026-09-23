import { Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ReportHeader() {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex h-1 w-full">
        <div className="w-1/5 bg-red-600" />
        <div className="w-1/5 bg-yellow-400" />
        <div className="w-1/5 bg-green-600" />
        <div className="w-1/5 bg-blue-800" />
        <div className="w-1/5 bg-black" />
      </div>

      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-11 max-w-[1200px] items-center justify-between px-5">
          <div className="flex items-center gap-2.5">
            <div className="flex h-7 w-7 items-center justify-center rounded-md border border-slate-300 bg-slate-100">
              <Shield size={16} className="text-slate-700" />
            </div>

            <div>
              <h1 className="text-[11px] font-bold leading-none">
                Community Incident Reporting System
              </h1>

              <p className="mt-0.5 text-[7px] font-medium tracking-wide text-green-600">
                REPUBLIC OF SOUTH AFRICA
              </p>
            </div>
          </div>

          <nav className="flex items-center gap-5 text-[9px] font-medium">
            <button
              onClick={() => navigate("/emergency-guide")}
              className="text-slate-700 hover:text-teal-600"
            >
              Emergency Guide
            </button>

            <button
              onClick={() => navigate("/report")}
              className="font-semibold text-teal-600"
            >
              New Report
            </button>

            <button
              onClick={() => navigate("/track-status")}
              className="text-slate-700 hover:text-teal-600"
            >
              Track Status
            </button>

            <button
              onClick={() => navigate("/dashboard")}
              className="rounded-sm border border-slate-200 bg-slate-50 px-2 py-1 text-[7px] font-bold tracking-widest text-slate-500"
            >
              OFFICIAL PORTAL
            </button>
          </nav>
        </div>
      </header>
    </>
  );
}
import {
  FileText,
  ArrowRight,
} from "lucide-react";

import { Link } from "react-router-dom";

function OnlineReportingCard() {
  return (
    <div className="rounded-[6px] border border-[#cdebe6] bg-[#effcf9] p-4 sm:p-5">

      {/* Heading */}
      <div className="flex items-start gap-2.5">

        <div className="flex h-[25px] w-[25px] shrink-0 items-center justify-center rounded-[5px] bg-[#0c9b8d] sm:h-[30px] sm:w-[30px]">
          <FileText
            size={15}
            className="text-white sm:h-[17px] sm:w-[17px]"
          />
        </div>

        <div>
          <p className="text-[6px] font-bold uppercase tracking-[0.4px] text-[#009b83] sm:text-[7px]">
            NON-EMERGENCY PATH
          </p>

          <h3 className="mt-[2px] text-[11px] font-bold text-[#10243e] sm:text-[14px]">
            Online Reporting System
          </h3>
        </div>

      </div>

      {/* Description */}
      <p className="mt-4 text-[7px] leading-[1.55] text-[#536276] sm:text-[9px]">
        Use this portal for reporting low-risk incidents that do not
        require immediate police dispatcher presence. Your case will be
        documented and securely routed for formal investigation.
      </p>

      {/* Continue */}
      <Link
        to="/new-report"
        className="mt-4 flex h-[27px] w-full items-center justify-center gap-1 rounded-[5px] bg-[#0c9b8d] text-[7px] font-bold text-white transition hover:bg-[#07897c] sm:h-[30px] sm:text-[8px]"
      >
        Continue with Online Reporting

        <ArrowRight
          size={11}
          strokeWidth={2}
        />
      </Link>

    </div>
  );
}

export default OnlineReportingCard;
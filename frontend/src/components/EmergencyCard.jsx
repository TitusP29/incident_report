import {
  Ambulance,
  Phone,
} from "lucide-react";

function EmergencyCard({ onCall }) {
  return (
    <div className="rounded-[6px] border border-[#f2d5d5] bg-[#fff1f1] p-4 sm:p-5">

      {/* Heading */}
      <div className="flex items-start gap-2.5">

        <div className="flex h-[25px] w-[25px] shrink-0 items-center justify-center rounded-[5px] bg-[#e52420] sm:h-[30px] sm:w-[30px]">
          <Ambulance
            size={15}
            className="text-white sm:h-[17px] sm:w-[17px]"
          />
        </div>

        <div>
          <p className="text-[6px] font-bold uppercase tracking-[0.4px] text-[#e52420] sm:text-[7px]">
            CRITICAL ACTION
          </p>

          <h3 className="mt-[2px] text-[11px] font-bold text-[#10243e] sm:text-[14px]">
            Emergency / Get Help Now
          </h3>
        </div>

      </div>

      {/* Description */}
      <p className="mt-4 text-[7px] leading-[1.55] text-[#536276] sm:text-[9px]">
        Is anyone currently in danger? Is there an active crime scene,
        fire, or a severe medical crisis happening right now? Stop this
        form and call emergency services immediately.
      </p>

      {/* Emergency Numbers */}
      <div className="mt-4 w-fit overflow-hidden rounded-[5px] border border-[#ffb4b4] bg-white">

        {/* Police */}
        <div className="flex items-center justify-between gap-6 border-b border-[#f1dddd] px-2 py-2 sm:gap-10 sm:px-3">
          <span className="text-[7px] font-semibold text-[#172235] sm:text-[8px]">
            Police Emergency Services
          </span>

          <span className="text-[10px] font-extrabold text-[#ed2929] sm:text-[11px]">
            10111
          </span>
        </div>

        {/* Ambulance */}
        <div className="flex items-center justify-between gap-6 px-2 py-2 sm:gap-10 sm:px-3">
          <span className="text-[7px] font-semibold text-[#172235] sm:text-[8px]">
            Medical / Ambulance
          </span>

          <span className="text-[10px] font-extrabold text-[#ed2929] sm:text-[11px]">
            10177
          </span>
        </div>

        {/* Call Button */}
        <div className="border-t border-[#f1dddd] px-2 py-2 sm:px-3">
          <button
            onClick={onCall}
            className="flex w-full items-center justify-center gap-1 rounded-[4px] bg-[#ed2929] px-4 py-2 text-[8px] font-bold text-white transition hover:bg-[#d92323] sm:text-[9px]"
          >
            <Phone size={11} />
            Call Emergency Services
          </button>
        </div>

      </div>

    </div>
  );
}

export default EmergencyCard;
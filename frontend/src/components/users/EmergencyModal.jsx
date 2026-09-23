import {
  Ambulance,
  Phone,
  ShieldAlert,
  X,
} from "lucide-react";

function EmergencyModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-sm rounded-xl bg-white p-5 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-3 top-3 rounded-full p-1 text-gray-500 transition hover:bg-gray-100"
          aria-label="Close emergency menu"
        >
          <X size={18} />
        </button>

        {/* Header */}
        <div className="mb-5 text-center">

          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
            <Phone
              size={24}
              className="text-[#ed2929]"
            />
          </div>

          <h2 className="text-lg font-bold text-[#172235]">
            Emergency Call
          </h2>

          <p className="mt-1 text-xs text-gray-500">
            Who would you like to contact?
          </p>

        </div>

        {/* Police */}
        <a
          href="tel:10111"
          onClick={onClose}
          className="mb-3 flex items-center justify-between rounded-lg border border-red-200 bg-red-50 p-4 transition hover:bg-red-100"
        >
          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
              <ShieldAlert
                size={20}
                className="text-[#ed2929]"
              />
            </div>

            <div>
              <p className="text-sm font-bold text-[#172235]">
                Police Emergency
              </p>

              <p className="text-xs text-gray-500">
                Police Services
              </p>
            </div>

          </div>

          <span className="text-sm font-extrabold text-[#ed2929]">
            10111
          </span>

        </a>

        {/* Ambulance */}
        <a
          href="tel:10177"
          onClick={onClose}
          className="flex items-center justify-between rounded-lg border border-blue-200 bg-blue-50 p-4 transition hover:bg-blue-100"
        >
          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
              <Ambulance
                size={20}
                className="text-blue-600"
              />
            </div>

            <div>
              <p className="text-sm font-bold text-[#172235]">
                Medical / Ambulance
              </p>

              <p className="text-xs text-gray-500">
                Ambulance Services
              </p>
            </div>

          </div>

          <span className="text-sm font-extrabold text-blue-600">
            10177
          </span>

        </a>

        {/* Cancel */}
        <button
          onClick={onClose}
          className="mt-4 w-full rounded-lg border border-gray-200 py-2 text-sm font-semibold text-gray-600 transition hover:bg-gray-50"
        >
          Cancel
        </button>

      </div>
    </div>
  );
}

export default EmergencyModal;
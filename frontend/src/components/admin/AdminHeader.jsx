import { LogOutIcon, HelpCircle } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useAuthStore } from "../../store/useAuthStore";

export default function AdminHeader() {
  const location = useLocation();
  const { logout } = useAuthStore();

  const pageInfo = {
    "/admin": {
      title: "Admin Dashboard",
      subtitle:
        "Community incident administration and case management",
    },

    "/admin/assignments": {
      title: "Assignments",
      subtitle:
        "Assign incidents to authorized investigators",
    },

    "/admin/progress-updates": {
      title: "Record Case Progress",
      subtitle:
        "Authorized SAPS administrative updates and investigation history",
    },

    "/admin/cases": {
      title: "Cases",
      subtitle:
        "Review and manage reported incidents",
    },

    "/admin/evidence": {
      title: "Evidence",
      subtitle:
        "Manage evidence associated with active cases",
    },

    "/admin/reports": {
      title: "Reports",
      subtitle:
        "Review incident and case statistics",
    },

    "/admin/users": {
      title: "Users",
      subtitle:
        "Manage system users and access",
    },

    "/admin/audit-log": {
      title: "Audit Log",
      subtitle:
        "Review authorized system activity",
    },
  };

  const current =
    Object.entries(pageInfo).find(([path]) =>
      location.pathname.startsWith(path)
    )?.[1] || pageInfo["/admin"];

  return (
    <header className="border-b border-slate-200 bg-white px-7 py-4">
      <div className="flex items-start justify-between">
        {/* PAGE TITLE */}
        <div>
          <h1 className="text-xl font-bold text-slate-900">
            {current.title}
          </h1>

          <p className="mt-1 text-xs text-slate-500">
            {current.subtitle}
          </p>
        </div>

        {/* HEADER ACTIONS */}
        <div className="flex items-center gap-3">
          {/* LOGOUT */}
          <button
            onClick={logout}
            className="text-slate-400 hover:text-red-500 transition-colors"
            title="Logout"
          >
            <LogOutIcon className="size-5" />
          </button>

          {/* HELP */}
          <button
            className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-300 text-slate-500 hover:bg-slate-100"
            title="Help"
          >
            <HelpCircle size={13} />
          </button>
        </div>
      </div>
    </header>
  );
}
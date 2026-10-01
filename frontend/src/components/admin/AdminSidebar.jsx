import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/useAuthStore";
import { axiosInstance } from "../../lib/axios";
import toast from "react-hot-toast";

import {
  LayoutDashboard,
  Inbox,
  FileText,
  UserCheck,
  Activity,
  Shield,
  FolderOpen,
  BarChart3,
} from "lucide-react";

const navigation = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    path: "/admin",
  },
  {
    name: "Intake Queue",
    icon: Inbox,
    path: "/admin/intake",
  },
  {
    name: "Cases",
    icon: FileText,
    path: "/admin/cases",
  },
  {
    name: "Assignments",
    icon: UserCheck,
    path: "/admin/assignments",
  },
  {
    name: "Progress Updates",
    icon: Activity,
    path: "/admin/progress",
  },
  {
    name: "Evidence",
    icon: FolderOpen,
    path: "/admin/evidence",
  },
  {
    name: "Reports",
    icon: BarChart3,
    path: "/admin/reports",
  },
  {
    name: "Investigators",
    icon: UserCheck,
    path: "/admin/investigators",
  },
  {
    name: "Audit Log",
    icon: Shield,
    path: "/admin/audit",
  },
];

export default function AdminSidebar({ activeItem }) {
  const navigate = useNavigate();

  const { authUser, setAuthUser } = useAuthStore();

  const [isUploading, setIsUploading] = useState(false);

  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    // Check file type
    if (!file.type.startsWith("image/")) {
      toast.error("Please select an image file");
      return;
    }

    // Check file size - 5MB
    if (file.size > 5 * 1024 * 1024) {
      toast.error("Image must be smaller than 5MB");
      return;
    }

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = async () => {
      try {
        setIsUploading(true);

        const res = await axiosInstance.put(
          "/auth/update-profile",
          {
            profilePic: reader.result,
          }
        );

        // Backend returns updated user
        setAuthUser(res.data);

        toast.success("Profile picture updated");
      } catch (error) {
        console.error(
          "Profile image upload failed:",
          error
        );

        toast.error(
          error.response?.data?.message ||
            "Failed to update profile picture"
        );
      } finally {
        setIsUploading(false);
      }
    };

    reader.onerror = () => {
      toast.error("Failed to read image");
      setIsUploading(false);
    };

    // Allows selecting the same image again
    e.target.value = "";
  };

  return (
    <aside className="flex min-h-screen w-[220px] shrink-0 flex-col bg-[#071b34] text-white">

      {/* HEADER */}
      <div className="flex h-[74px] items-center gap-2 border-b border-white/10 px-4">
        <div className="flex h-8 w-8 items-center justify-center rounded-md border border-white/30">
          <Shield size={17} />
        </div>

        <div>
          <p className="text-[6px] font-bold tracking-wide text-emerald-400">
            REPUBLIC OF SOUTH AFRICA
          </p>

          <h2 className="text-[9px] font-bold">
            Community Incident Portal
          </h2>
        </div>
      </div>

      {/* PROFILE */}
      <div className="border-b border-white/10 p-4">
        <div className="flex items-center gap-3">

          {/* PROFILE IMAGE */}
          <div className="avatar online">
            <button
              type="button"
              disabled={isUploading}
              onClick={() =>
                fileInputRef.current?.click()
              }
              className="group relative size-12 overflow-hidden rounded-full bg-[#80654c]"
            >
              <img
                src={
                  authUser?.profilePic ||
                  "/avatar.png"
                }
                alt={
                  authUser?.fullName ||
                  "User profile"
                }
                className="size-full object-cover"
              />

              <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity group-hover:opacity-100">
                <span className="text-[8px] text-white">
                  {isUploading
                    ? "Uploading..."
                    : "Change"}
                </span>
              </div>
            </button>

            <input
              type="file"
              accept="image/png,image/jpeg,image/jpg,image/webp"
              ref={fileInputRef}
              onChange={handleImageUpload}
              className="hidden"
            />
          </div>

          {/* LOGGED-IN USER */}
          <div className="min-w-0">
            <h3 className="max-w-[130px] truncate text-[10px] font-medium text-slate-200">
              {authUser?.fullName || "User"}
            </h3>

            <p className="text-[8px] text-slate-400">
              Online
            </p>
          </div>
        </div>
      </div>

      {/* NAVIGATION */}
      <nav className="space-y-1 px-2 py-3">
        {navigation.map(
          ({ name, icon: Icon, path }) => (
            <button
              key={name}
              type="button"
              onClick={() => navigate(path)}
              className={`flex h-8 w-full items-center gap-3 rounded-md px-3 text-left text-[8px] transition ${
                activeItem === name
                  ? "bg-[#079e8d] text-white"
                  : "text-slate-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              <Icon size={15} />

              <span>{name}</span>
            </button>
          )
        )}
      </nav>

      {/* FOOTER */}
      <div className="mt-auto p-3">
        <div className="rounded-sm border border-slate-700 px-2 py-1.5 text-center">
          <span className="text-[5px] tracking-wider text-slate-500">
            OFFICIAL ADMIN PORTAL
          </span>
        </div>
      </div>
    </aside>
  );
}
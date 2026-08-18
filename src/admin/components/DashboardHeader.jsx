import React from "react";
import { Menu } from "lucide-react";

const DashboardHeader = ({
  activeSection,
  setMobileOpen,
}) => {
  const titles = {
    dashboard: "Dashboard",
    projects: "Projects & Gallery",
    locations: "Locations",
    jobs: "Careers / Jobs",
    settings: "Settings",
  };

  return (
    <header className="h-20 bg-[#111111] border-b border-[#292929] px-5 md:px-8 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button
          onClick={() => setMobileOpen(true)}
          className="lg:hidden text-gray-400 hover:text-white"
        >
          <Menu size={24} />
        </button>

        <div>
          <h2 className="text-xl md:text-2xl font-serif text-white">
            {titles[activeSection]}
          </h2>

          <p className="text-xs text-gray-500 mt-1">
            Manage your website content
          </p>
        </div>
      </div>

      <div className="hidden sm:flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-[#C9A35D] flex items-center justify-center text-black font-semibold">
          A
        </div>

        <div>
          <p className="text-sm text-white">Administrator</p>
          <p className="text-xs text-gray-500">Super Admin</p>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
import React from "react";
import {
  LayoutDashboard,
  Image,
  MapPin,
  BriefcaseBusiness,
  Settings,
  LogOut,
  X,
} from "lucide-react";

const Sidebar = ({
  activeSection,
  setActiveSection,
  mobileOpen,
  setMobileOpen,
}) => {
  const menuItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: LayoutDashboard,
    },
    {
      id: "projects",
      label: "Projects & Gallery",
      icon: Image,
    },
    {
      id: "locations",
      label: "Locations",
      icon: MapPin,
    },
    {
      id: "jobs",
      label: "Careers / Jobs",
      icon: BriefcaseBusiness,
    },
    {
      id: "settings",
      label: "Settings",
      icon: Settings,
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminUser");

    window.location.href = "/admin/login";
  };

  return (
    <>
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/70 z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside
        className={`
          fixed lg:static z-50 top-0 left-0
          h-screen w-72
          bg-[#111111]
          border-r border-[#292929]
          flex flex-col
          transition-transform duration-300
          ${mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        {/* Logo */}
        <div className="h-20 px-6 flex items-center justify-between border-b border-[#292929]">
          <div>
            <h1 className="text-xl font-serif text-[#C9A35D]">
              Amazing Solution
            </h1>

            <p className="text-[10px] uppercase tracking-[0.25em] text-gray-500 mt-1">
              Admin Panel
            </p>
          </div>

          <button
            onClick={() => setMobileOpen(false)}
            className="lg:hidden text-gray-400 hover:text-white"
          >
            <X size={22} />
          </button>
        </div>

        {/* Menu */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const active = activeSection === item.id;

            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  setMobileOpen(false);
                }}
                className={`
                  w-full flex items-center gap-3
                  px-4 py-3 rounded-lg
                  text-sm
                  transition-all duration-200
                  ${
                    active
                      ? "bg-[#C9A35D] text-black"
                      : "text-gray-400 hover:bg-[#1C1C1C] hover:text-white"
                  }
                `}
              >
                <Icon size={19} />

                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-[#292929]">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-red-500/10 hover:text-red-400 transition"
          >
            <LogOut size={19} />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
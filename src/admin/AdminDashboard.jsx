import React, { useEffect, useState } from "react";

import Sidebar from "./components/Sidebar";
import DashboardHeader from "./components/DashboardHeader";
import DashboardHome from "./components/DashboardHome";
import ProjectsManager from "./components/ProjectsManager";
import LocationsManager from "./components/LocationsManager";
import JobsManager from "./components/JobsManager";
import AdminSettings from "./components/AdminSettings";
import API from "../data/api";

const AdminDashboard = () => {
  const [activeSection, setActiveSection] =
    useState("dashboard");

  const [mobileOpen, setMobileOpen] = useState(false);

  const [stats, setStats] = useState({
    projects: 0,
    locations: 0,
    jobs: 0,
  });

  const fetchStats = async () => {
    try {
      const [
        projectsResponse,
        locationsResponse,
        jobsResponse,
      ] = await Promise.all([
        API.get("/api/projects"),
        API.get("/api/locations"),
        API.get("/api/jobs"),
      ]);

      setStats({
        projects: projectsResponse.data.length,
        locations: locationsResponse.data.length,
        jobs: jobsResponse.data.length,
      });
    } catch (error) {
      console.error("Failed to fetch dashboard stats:", error);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  const renderSection = () => {
    switch (activeSection) {
      case "projects":
        return <ProjectsManager />;

      case "locations":
        return <LocationsManager />;

      case "jobs":
        return <JobsManager />;

      case "settings":
        return <AdminSettings />;

      default:
        return (
          <DashboardHome
            setActiveSection={setActiveSection}
            projectCount={stats.projects}
            locationCount={stats.locations}
            jobCount={stats.jobs}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white flex">

      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      <div className="flex-1 min-w-0">

        <DashboardHeader
          activeSection={activeSection}
          setMobileOpen={setMobileOpen}
        />

        <main className="p-5 md:p-8">
          {renderSection()}
        </main>

      </div>
    </div>
  );
};

export default AdminDashboard;
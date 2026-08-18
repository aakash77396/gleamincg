import React from "react";
import {
  Image,
  MapPin,
  BriefcaseBusiness,
  ArrowRight,
} from "lucide-react";

const DashboardHome = ({
  setActiveSection,
  projectCount = 0,
  locationCount = 0,
  jobCount = 0,
}) => {
  const cards = [
    {
      title: "Projects",
      count: projectCount,
      icon: Image,
      section: "projects",
      description: "Manage projects, images and videos",
    },
    {
      title: "Locations",
      count: locationCount,
      icon: MapPin,
      section: "locations",
      description: "Manage company locations and contact",
    },
    {
      title: "Job Openings",
      count: jobCount,
      icon: BriefcaseBusiness,
      section: "jobs",
      description: "Manage current career openings",
    },
  ];

  return (
    <div className="space-y-8">

      {/* Welcome */}
      <div>
        <p className="text-[#C9A35D] uppercase tracking-[0.25em] text-xs mb-3">
          Welcome Back
        </p>

        <h1 className="text-3xl md:text-4xl font-serif text-white">
          Manage Your Website
        </h1>

        <p className="text-gray-500 mt-2">
          Everything you need to manage your interior business website.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <button
              key={card.title}
              onClick={() => setActiveSection(card.section)}
              className="text-left bg-[#171717] border border-[#292929]
              rounded-xl p-6
              hover:border-[#C9A35D]
              transition-all duration-300 group"
            >
              <div className="flex items-start justify-between">
                <div className="w-11 h-11 rounded-lg bg-[#C9A35D]/10 flex items-center justify-center">
                  <Icon className="text-[#C9A35D]" size={22} />
                </div>

                <ArrowRight
                  size={19}
                  className="text-gray-600 group-hover:text-[#C9A35D] transition"
                />
              </div>

              <h3 className="text-lg text-white mt-6">
                {card.title}
              </h3>

              <p className="text-3xl font-semibold text-[#C9A35D] mt-2">
                {card.count}
              </p>

              <p className="text-sm text-gray-500 mt-2">
                {card.description}
              </p>
            </button>
          );
        })}
      </div>

      {/* Notice */}
      <div className="border border-[#292929] bg-[#171717] rounded-xl p-6">
        <p className="text-[#C9A35D] text-sm font-medium">
          Admin Information
        </p>

        <p className="text-gray-400 text-sm mt-2 leading-relaxed">
          Changes made from this dashboard will automatically reflect on the
          public website after being saved.
        </p>
      </div>
    </div>
  );
};

export default DashboardHome;
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import API from "../data/api";
import ProjectCard from "../components/common/ProjectCard";
import Container from "../components/common/Container";

const Projects = () => {
  const navigate = useNavigate();

  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await API.get("/api/projects");

        console.log("PROJECT RESPONSE:", response.data);
        console.log(
          "IS ARRAY:",
          Array.isArray(response.data)
        );

        setProjects(
          Array.isArray(response.data)
            ? response.data
            : []
        );

      } catch (error) {
        console.error(
          "Failed to fetch projects:",
          error
        );

        setProjects([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter(
          (item) => item.type === filter
        );

  return (
    <section className="py-10 bg-[#0D0D0D] min-h-screen">

      <div
        onClick={() => navigate("/")}
        className="cursor-pointer text-black mx-3 w-fit bg-[#C9A35D] px-4 py-3 mb-5 rounded-lg font-medium transition-all duration-200 hover:opacity-80"
      >
        Home
      </div>

      <Container>

        <div className="text-center">

          <p className="uppercase tracking-[5px] text-[#C9A35D]">
            Portfolio
          </p>

          <h1 className="text-5xl font-bold mt-4 font-['Playfair_Display']">
            Our Recent Projects
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto mt-6">
            Browse our completed residential,
            commercial and luxury interior projects.
          </p>

        </div>

        {/* Filter */}
        <div className="flex justify-center gap-5 mt-12">

          <button
            onClick={() => setFilter("all")}
            className={`px-6 py-3 rounded-full ${
              filter === "all"
                ? "bg-[#C9A35D] text-black"
                : "bg-[#1A1A1A] text-white"
            }`}
          >
            All
          </button>

          <button
            onClick={() => setFilter("image")}
            className={`px-6 py-3 rounded-full ${
              filter === "image"
                ? "bg-[#C9A35D] text-black"
                : "bg-[#1A1A1A] text-white"
            }`}
          >
            Images
          </button>

          <button
            onClick={() => setFilter("video")}
            className={`px-6 py-3 rounded-full ${
              filter === "video"
                ? "bg-[#C9A35D] text-black"
                : "bg-[#1A1A1A] text-white"
            }`}
          >
            Videos
          </button>

        </div>

        {/* Loading */}
        {loading && (
          <div className="text-center py-20 text-gray-500">
            Loading projects...
          </div>
        )}

        {/* Projects */}
        {!loading &&
          Array.isArray(filteredProjects) &&
          filteredProjects.length > 0 && (

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project._id}
                  project={project}
                />
              ))}

            </div>
          )}

        {/* Empty */}
        {!loading &&
          Array.isArray(filteredProjects) &&
          filteredProjects.length === 0 && (

            <div className="text-center py-20 text-gray-500">
              No projects available.
            </div>
          )}

      </Container>

    </section>
  );
};

export default Projects;
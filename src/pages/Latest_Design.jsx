import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { projects } from "../data/projects";
import ProjectCard from "../components/common/ProjectCard";
import Container from "../components/common/Container";

const Latest_Design = () => {
 const navigate = useNavigate();
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((item) => item.type === filter);

  return (
    <section className="py-10 bg-[#0D0D0D] min-h-screen">

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
            className={`px-6 py-3 rounded-full ${filter === "all"
                ? "bg-[#C9A35D] text-black"
                : "bg-[#1A1A1A]"
              }`}
          >
            All
          </button>

          <button
            onClick={() => setFilter("image")}
            className={`px-6 py-3 rounded-full ${filter === "image"
                ? "bg-[#C9A35D] text-black"
                : "bg-[#1A1A1A]"
              }`}
          >
            Images
          </button>

          <button
            onClick={() => setFilter("video")}
            className={`px-6 py-3 rounded-full ${filter === "video"
                ? "bg-[#C9A35D] text-black"
                : "bg-[#1A1A1A]"
              }`}
          >
            Videos
          </button>

        </div>

        {/* Grid */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}

        </div>

        <div
            onClick={() => navigate("/projects")}
            className="cursor-pointer text-black mx-3 mt-10 w-40 target-blank text-center bg-amber-300 px-4 py-3 mb-5 rounded-lg font-medium transition-all duration-200 hover:opacity-80"
            
          >
            More
          </div>

      </Container>

    </section>
  );
};

export default Latest_Design;
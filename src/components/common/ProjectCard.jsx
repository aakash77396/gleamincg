import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      className="bg-[#1A1A1A] rounded-2xl overflow-hidden shadow-lg"
    >
      <div className="relative">

        {project.type === "image" ? (
          <img
            src={project.url}
            alt={project.title}
            className="w-full h-72 object-cover"
          />
        ) : (
          <>
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-72 object-cover"
            />

            <div className="absolute inset-0 flex justify-center items-center bg-black/30">
              <div className="bg-[#C9A35D] p-5 rounded-full">
                <FaPlay className="text-black text-xl" />
              </div>
            </div>
          </>
        )}
      </div>

      <div className="p-6">

        <span className="text-[#C9A35D] text-sm">
          {project.category}
        </span>

        <h3 className="text-2xl font-semibold mt-2">
          {project.title}
        </h3>

        <p className="text-gray-400 mt-3">
          {project.description}
        </p>

        {project.type === "image" ? (
          <a
            href={project.url}
            target="_blank"
            className="inline-block mt-6 text-[#C9A35D]"
          >
            View Image →
          </a>
        ) : (
          <a
            href={project.url}
            target="_blank"
            className="inline-block mt-6 text-[#C9A35D]"
          >
            Watch Video →
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
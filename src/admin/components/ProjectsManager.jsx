import React, { useEffect, useState } from "react";
import { Plus, Trash2, Image as ImageIcon, X } from "lucide-react";

import API from "../../data/api";

const ProjectsManager = () => {
  const [projects, setProjects] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    type: "image",
    title: "",
    category: "",
    description: "",
    url: "",
    thumbnail: "",
  });

  // =========================
  // FETCH PROJECTS
  // =========================
  const fetchProjects = async () => {
    try {
      const response = await API.get("/api/projects");

      setProjects(response.data);
    } catch (error) {
      console.error("Failed to fetch projects:", error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // =========================
  // FORM CHANGE
  // =========================
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // =========================
  // ADD PROJECT
  // =========================
  const handleAdd = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await API.post(
        "/api/projects",
        form
      );

      // Add newly created project to UI
      setProjects((prev) => [
        response.data,
        ...prev,
      ]);

      // Reset form
      setForm({
        type: "image",
        title: "",
        category: "",
        description: "",
        url: "",
        thumbnail: "",
      });

      setShowForm(false);

    } catch (error) {
      console.error("Failed to add project:", error);

      alert(
        error?.response?.data?.message ||
        "Failed to add project"
      );

    } finally {
      setLoading(false);
    }
  };

  // =========================
  // DELETE PROJECT
  // =========================
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this project?"
    );

    if (!confirmDelete) {
      return;
    }

    try {
      await API.delete(
        `/api/projects/${id}`
      );

      // Remove from UI after successful delete
      setProjects((prev) =>
        prev.filter(
          (project) => project._id !== id
        )
      );

    } catch (error) {
      console.error(
        "Failed to delete project:",
        error
      );

      alert(
        error?.response?.data?.message ||
        "Failed to delete project"
      );
    }
  };

  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

        <div>
          <p className="text-gray-500 text-sm">
            Manage your project gallery
          </p>
        </div>

        <button
          onClick={() => setShowForm(true)}
          className="flex items-center justify-center gap-2 bg-[#C9A35D] text-black px-5 py-3 rounded-lg font-medium hover:opacity-85 transition"
        >
          <Plus size={18} />
          Add Project
        </button>

      </div>

      {/* Add Form */}
      {showForm && (
        <div className="bg-[#171717] border border-[#C9A35D]/40 rounded-xl p-6">

          <div className="flex items-center justify-between mb-6">

            <h3 className="text-xl font-serif text-white">
              Add New Project
            </h3>

            <button
              onClick={() => setShowForm(false)}
              className="text-gray-500 hover:text-white"
            >
              <X size={20} />
            </button>

          </div>

          <form
            onSubmit={handleAdd}
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >

            {/* Type */}
            <div>
              <label className="admin-label">
                Type
              </label>

              <select
                name="type"
                value={form.type}
                onChange={handleChange}
                className="admin-input"
              >
                <option value="image">
                  Image
                </option>

                <option value="video">
                  Video
                </option>
              </select>
            </div>

            {/* Title */}
            <div>
              <label className="admin-label">
                Title
              </label>

              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                className="admin-input"
                placeholder="Luxury Living Room"
                required
              />
            </div>

            {/* Category */}
            <div>
              <label className="admin-label">
                Category
              </label>

              <input
                name="category"
                value={form.category}
                onChange={handleChange}
                className="admin-input"
                placeholder="Living Room"
                required
              />
            </div>

            {/* Media URL */}
            <div>
              <label className="admin-label">
                Media URL
              </label>

              <input
                name="url"
                value={form.url}
                onChange={handleChange}
                className="admin-input"
                placeholder="Cloudinary / YouTube URL"
                required
              />
            </div>

            {/* Thumbnail */}
            {form.type === "video" && (
              <div>
                <label className="admin-label">
                  Thumbnail URL
                </label>

                <input
                  name="thumbnail"
                  value={form.thumbnail}
                  onChange={handleChange}
                  className="admin-input"
                  placeholder="Thumbnail URL"
                />
              </div>
            )}

            {/* Description */}
            <div className="md:col-span-2">

              <label className="admin-label">
                Description
              </label>

              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                rows="4"
                className="admin-input resize-none"
                placeholder="Project description..."
              />

            </div>

            {/* Submit */}
            <div className="md:col-span-2">

              <button
                disabled={loading}
                className="bg-[#C9A35D] text-black px-6 py-3 rounded-lg font-medium hover:opacity-85 disabled:opacity-50"
              >
                {loading
                  ? "Adding..."
                  : "Add Project"}
              </button>

            </div>

          </form>

        </div>
      )}

      {/* Project List */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">

        {projects.map((project) => (

          <div
            key={project._id}
            className="bg-[#171717] border border-[#292929] rounded-xl overflow-hidden group"
          >

            {/* Preview */}
            <div className="h-48 bg-[#0D0D0D] overflow-hidden">

              {project.type === "image" ? (

                <img
                  src={project.url}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />

              ) : (

                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />

              )}

            </div>

            <div className="p-5">

              <p className="text-xs text-[#C9A35D] uppercase tracking-widest">
                {project.category}
              </p>

              <h3 className="text-lg text-white mt-2">
                {project.title}
              </h3>

              <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                {project.description}
              </p>

              <button
                onClick={() =>
                  handleDelete(project._id)
                }
                className="mt-5 flex items-center gap-2 text-sm text-red-400 hover:text-red-300"
              >
                <Trash2 size={16} />
                Delete
              </button>

            </div>

          </div>

        ))}

      </div>

      {/* Empty State */}
      {projects.length === 0 && (
        <div className="text-center py-20 text-gray-600">

          <ImageIcon
            className="mx-auto mb-3"
            size={35}
          />

          <p>
            No projects added yet.
          </p>

        </div>
      )}

    </div>
  );
};

export default ProjectsManager;
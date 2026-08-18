import React, { useEffect, useState } from "react";
import {
  Plus,
  Trash2,
  BriefcaseBusiness,
  X,
} from "lucide-react";

import API from "../../data/api";

const JobsManager = () => {
  const [jobs, setJobs] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    title: "",
    location: "",
    type: "Full Time",
    experience: "",
    description: "",
  });

  // =========================
  // FETCH JOBS
  // =========================
  const fetchJobs = async () => {
    try {
      const response = await API.get("/api/jobs");

      setJobs(response.data);
    } catch (error) {
      console.error(
        "Failed to fetch jobs:",
        error
      );
    }
  };

  useEffect(() => {
    fetchJobs();
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
  // ADD JOB
  // =========================
  const handleAdd = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await API.post(
        "/api/jobs",
        form
      );

      setJobs((prev) => [
        response.data,
        ...prev,
      ]);

      setForm({
        title: "",
        location: "",
        type: "Full Time",
        experience: "",
        description: "",
      });

      setShowForm(false);

    } catch (error) {
      console.error(
        "Failed to add job:",
        error
      );

      alert(
        error?.response?.data?.message ||
        "Failed to add job"
      );

    } finally {
      setLoading(false);
    }
  };

  // =========================
  // DELETE JOB
  // =========================
  const handleDelete = async (id) => {
    if (
      !window.confirm(
        "Delete this job opening?"
      )
    ) {
      return;
    }

    try {
      await API.delete(
        `/api/jobs/${id}`
      );

      setJobs((prev) =>
        prev.filter(
          (job) => job._id !== id
        )
      );

    } catch (error) {
      console.error(
        "Failed to delete job:",
        error
      );

      alert(
        error?.response?.data?.message ||
        "Failed to delete job"
      );
    }
  };

  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">

        <p className="text-gray-500 text-sm">
          Manage current job openings
        </p>

        <button
          onClick={() => setShowForm(true)}
          className="flex items-center justify-center gap-2 bg-[#C9A35D] text-black px-5 py-3 rounded-lg font-medium hover:opacity-85 transition"
        >
          <Plus size={18} />
          Add Job
        </button>

      </div>

      {/* Add Form */}
      {showForm && (
        <div className="bg-[#171717] border border-[#C9A35D]/40 rounded-xl p-6">

          <div className="flex items-center justify-between mb-6">

            <h3 className="text-xl font-serif">
              Add Job Opening
            </h3>

            <button
              onClick={() =>
                setShowForm(false)
              }
              className="text-gray-500 hover:text-white"
            >
              <X size={20} />
            </button>

          </div>

          <form
            onSubmit={handleAdd}
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >

            {/* Job Title */}
            <div>
              <label className="admin-label">
                Job Title
              </label>

              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                className="admin-input"
                placeholder="Interior Designer"
                required
              />
            </div>

            {/* Location */}
            <div>
              <label className="admin-label">
                Location
              </label>

              <input
                name="location"
                value={form.location}
                onChange={handleChange}
                className="admin-input"
                placeholder="Noida / Greater Noida"
                required
              />
            </div>

            {/* Job Type */}
            <div>
              <label className="admin-label">
                Job Type
              </label>

              <select
                name="type"
                value={form.type}
                onChange={handleChange}
                className="admin-input"
              >
                <option value="Full Time">
                  Full Time
                </option>

                <option value="Part Time">
                  Part Time
                </option>

                <option value="Internship">
                  Internship
                </option>

                <option value="Contract">
                  Contract
                </option>
              </select>
            </div>

            {/* Experience */}
            <div>
              <label className="admin-label">
                Experience
              </label>

              <input
                name="experience"
                value={form.experience}
                onChange={handleChange}
                className="admin-input"
                placeholder="1–3 Years"
                required
              />
            </div>

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
                placeholder="Job description..."
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
                  : "Add Job"}
              </button>

            </div>

          </form>
        </div>
      )}

      {/* Job List */}
      <div className="space-y-4">

        {jobs.map((job) => (

          <div
            key={job._id}
            className="bg-[#171717] border border-[#292929] rounded-xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-5 hover:border-[#C9A35D]/50 transition"
          >

            <div className="flex gap-4">

              <div className="w-11 h-11 rounded-lg bg-[#C9A35D]/10 flex items-center justify-center shrink-0">

                <BriefcaseBusiness
                  className="text-[#C9A35D]"
                  size={21}
                />

              </div>

              <div>

                <h3 className="text-white text-lg">
                  {job.title}
                </h3>

                <div className="flex flex-wrap gap-4 text-sm text-gray-500 mt-2">

                  <span>
                    📍 {job.location}
                  </span>

                  <span>
                    💼 {job.type}
                  </span>

                  <span>
                    ⌛ {job.experience}
                  </span>

                </div>

                {job.description && (
                  <p className="text-gray-600 text-sm mt-2">
                    {job.description}
                  </p>
                )}

              </div>

            </div>

            <button
              onClick={() =>
                handleDelete(job._id)
              }
              className="flex items-center gap-2 text-red-400 hover:text-red-300 text-sm"
            >
              <Trash2 size={16} />
              Delete
            </button>

          </div>

        ))}

      </div>

      {/* Empty State */}
      {jobs.length === 0 && (
        <div className="text-center py-20 text-gray-600">

          <BriefcaseBusiness
            className="mx-auto mb-3"
            size={35}
          />

          <p>
            No job openings available.
          </p>

        </div>
      )}

    </div>
  );
};

export default JobsManager;
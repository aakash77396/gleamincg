import React, { useEffect, useState } from "react";
import API from "../data/api";

const Careers = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  // =========================
  // FETCH JOBS
  // =========================
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await API.get("/api/jobs");

        setJobs(response.data);
      } catch (error) {
        console.error(
          "Failed to fetch jobs:",
          error
        );
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <section className="min-h-screen bg-[#0D0D0D] text-white px-6 md:px-16 py-20">

      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-16">

        <p className="text-[#C9A35D] tracking-[0.35em] uppercase text-sm mb-5">
          Join Our Team
        </p>

        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
          Build Beautiful
          <br />
          <span className="text-[#C9A35D]">
            Spaces With Us
          </span>
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
          We are always looking for creative minds,
          passionate designers, and talented
          professionals who want to create
          exceptional interiors.
        </p>

      </div>

      {/* Open Positions */}
      <div className="max-w-6xl mx-auto">

        <div className="mb-8">

          <p className="text-[#C9A35D] uppercase tracking-widest text-sm">
            Careers
          </p>

          <h2 className="text-3xl md:text-4xl font-serif mt-2">
            Current Openings
          </h2>

        </div>

        {/* Loading */}
        {loading && (
          <div className="text-center py-16 text-gray-500">
            Loading current openings...
          </div>
        )}

        {/* Jobs */}
        {!loading && jobs.length > 0 && (
          <div className="space-y-4">

            {jobs.map((job) => (

              <div
                key={job._id}
                className="group border border-[#2A2A2A] bg-[#171717] rounded-xl p-6 md:p-8 hover:border-[#C9A35D] transition-all duration-300"
              >

                <h3 className="text-2xl font-serif group-hover:text-[#C9A35D] transition">
                  {job.title}
                </h3>

                <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-400">

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
                  <p className="text-gray-500 mt-4 leading-relaxed">
                    {job.description}
                  </p>
                )}

              </div>

            ))}

          </div>
        )}

        {/* No Jobs */}
        {!loading && jobs.length === 0 && (
          <div className="border border-[#2A2A2A] bg-[#171717] rounded-xl text-center py-16">

            <p className="text-gray-400 text-lg">
              No current openings available.
            </p>

            <p className="text-gray-600 text-sm mt-2">
              Please check back later for new opportunities.
            </p>

          </div>
        )}

      </div>

      {/* Apply Information */}
      <div className="max-w-4xl mx-auto mt-20 text-center border-t border-[#2A2A2A] pt-12">

        <p className="text-[#C9A35D] uppercase tracking-[0.25em] text-sm mb-4">
          Interested in joining us?
        </p>

        <h2 className="text-3xl md:text-4xl font-serif mb-5">
          Send Your Resume
        </h2>

        <p className="text-gray-400 text-lg leading-relaxed">
          To apply for any of the above positions,
          please send your resume and portfolio to
        </p>

        <a
          href="mailto:gleamincginteriordesign@gmail.com"
          className="inline-block mt-5 text-[#C9A35D] text-xl font-medium hover:underline"
        >
          gleamincginteriordesign@gmail.com
        </a>

        <p className="text-gray-500 text-sm mt-5">
          Please mention the position you are applying
          for in the subject line.
        </p>

      </div>

    </section>
  );
};

export default Careers;
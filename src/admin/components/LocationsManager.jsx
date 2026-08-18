import React, { useEffect, useState } from "react";
import { Plus, Trash2, MapPin, X } from "lucide-react";

import API from "../../data/api";

const LocationsManager = () => {
  const [locations, setLocations] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    mapUrl: "",
  });

  // =========================
  // FETCH LOCATIONS
  // =========================
  const fetchLocations = async () => {
    try {
      const response = await API.get("/api/locations");

      setLocations(response.data);
    } catch (error) {
      console.error(
        "Failed to fetch locations:",
        error
      );
    }
  };

  useEffect(() => {
    fetchLocations();
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
  // ADD LOCATION
  // =========================
  const handleAdd = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await API.post(
        "/api/locations",
        form
      );

      setLocations((prev) => [
        response.data,
        ...prev,
      ]);

      setForm({
        name: "",
        phone: "",
        address: "",
        mapUrl: "",
      });

      setShowForm(false);

    } catch (error) {
      console.error(
        "Failed to add location:",
        error
      );

      alert(
        error?.response?.data?.message ||
        "Failed to add location"
      );

    } finally {
      setLoading(false);
    }
  };

  // =========================
  // DELETE LOCATION
  // =========================
  const handleDelete = async (id) => {
    if (
      !window.confirm(
        "Delete this location?"
      )
    ) {
      return;
    }

    try {
      await API.delete(
        `/api/locations/${id}`
      );

      setLocations((prev) =>
        prev.filter(
          (location) =>
            location._id !== id
        )
      );

    } catch (error) {
      console.error(
        "Failed to delete location:",
        error
      );

      alert(
        error?.response?.data?.message ||
        "Failed to delete location"
      );
    }
  };

  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

        <p className="text-gray-500 text-sm">
          Manage company branches and contact
          locations
        </p>

        <button
          onClick={() => setShowForm(true)}
          className="flex items-center justify-center gap-2 bg-[#C9A35D] text-black px-5 py-3 rounded-lg font-medium hover:opacity-85 transition"
        >
          <Plus size={18} />
          Add Location
        </button>

      </div>

      {/* Add Form */}
      {showForm && (
        <div className="bg-[#171717] border border-[#C9A35D]/40 rounded-xl p-6">

          <div className="flex justify-between items-center mb-6">

            <h3 className="text-xl font-serif">
              Add Location
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

            {/* Location Name */}
            <div>
              <label className="admin-label">
                Location Name
              </label>

              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="admin-input"
                placeholder="Noida / Greater Noida"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label className="admin-label">
                Phone
              </label>

              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="admin-input"
                placeholder="9625586977"
                required
              />
            </div>

            {/* Address */}
            <div className="md:col-span-2">
              <label className="admin-label">
                Address
              </label>

              <input
                name="address"
                value={form.address}
                onChange={handleChange}
                className="admin-input"
                placeholder="Full address"
              />
            </div>

            {/* Google Maps */}
            <div className="md:col-span-2">
              <label className="admin-label">
                Google Maps URL
              </label>

              <input
                name="mapUrl"
                value={form.mapUrl}
                onChange={handleChange}
                className="admin-input"
                placeholder="https://www.google.com/maps/..."
                required
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
                  : "Add Location"}
              </button>

            </div>

          </form>
        </div>
      )}

      {/* Locations */}
      <div className="space-y-4">

        {locations.map((location) => (

          <div
            key={location._id}
            className="bg-[#171717] border border-[#292929] rounded-xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-5"
          >

            <div className="flex gap-4">

              <div className="w-11 h-11 rounded-lg bg-[#C9A35D]/10 flex items-center justify-center shrink-0">
                <MapPin
                  className="text-[#C9A35D]"
                  size={21}
                />
              </div>

              <div>

                <h3 className="text-white text-lg">
                  {location.name}
                </h3>

                <p className="text-gray-500 text-sm mt-1">
                  {location.phone}
                </p>

                {location.address && (
                  <p className="text-gray-600 text-sm mt-1">
                    {location.address}
                  </p>
                )}

              </div>

            </div>

            <button
              onClick={() =>
                handleDelete(location._id)
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
      {locations.length === 0 && (
        <div className="text-center py-20 text-gray-600">

          <MapPin
            className="mx-auto mb-3"
            size={35}
          />

          <p>
            No locations added yet.
          </p>

        </div>
      )}

    </div>
  );
};

export default LocationsManager;
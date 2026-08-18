import React, { useState } from "react";
import { Lock, Shield } from "lucide-react";
import API from "../../data/api";

const AdminSettings = () => {
  const [form, setForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.newPassword !== form.confirmPassword) {
      alert("New passwords do not match.");
      return;
    }

    try {
      setLoading(true);

      await API.put("/api/auth/change-password", {
        currentPassword: form.currentPassword,
        newPassword: form.newPassword,
      });

      alert("Password changed successfully.");

      setForm({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });

      // Important:
      // Backend increments tokenVersion, so the current
      // JWT becomes invalid after password change.
      localStorage.removeItem("adminToken");
      localStorage.removeItem("adminUser");

      window.location.href = "/admin/login";

    } catch (error) {
      console.error(
        "Change Password Error:",
        error
      );

      alert(
        error?.response?.data?.message ||
        "Failed to change password."
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl space-y-6">

      <div className="bg-[#171717] border border-[#292929] rounded-xl p-6">

        <div className="flex items-center gap-4 mb-6">

          <div className="w-11 h-11 rounded-lg bg-[#C9A35D]/10 flex items-center justify-center">
            <Shield
              className="text-[#C9A35D]"
              size={21}
            />
          </div>

          <div>
            <h3 className="text-xl font-serif text-white">
              Admin Security
            </h3>

            <p className="text-gray-500 text-sm">
              Manage your administrator password
            </p>
          </div>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          {/* Current Password */}
          <div>
            <label className="admin-label">
              Current Password
            </label>

            <div className="relative">

              <Lock
                size={17}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600"
              />

              <input
                type="password"
                name="currentPassword"
                value={form.currentPassword}
                onChange={handleChange}
                className="admin-input pl-10"
                placeholder="Enter current password"
                required
              />

            </div>
          </div>

          {/* New Password */}
          <div>
            <label className="admin-label">
              New Password
            </label>

            <input
              type="password"
              name="newPassword"
              value={form.newPassword}
              onChange={handleChange}
              className="admin-input"
              placeholder="Enter new password"
              minLength={6}
              required
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="admin-label">
              Confirm New Password
            </label>

            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              className="admin-input"
              placeholder="Confirm new password"
              minLength={6}
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="bg-[#C9A35D] text-black px-6 py-3 rounded-lg font-medium hover:opacity-85 disabled:opacity-50"
          >
            {loading
              ? "Updating..."
              : "Change Password"}
          </button>

        </form>

      </div>

    </div>
  );
};

export default AdminSettings;
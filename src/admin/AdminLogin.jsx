import React, { useState } from "react";
import { Lock, Mail, Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import API from "../data/api";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] =
    useState(false);

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    setLoading(true);

    const response = await API.post(
      "/api/auth/login",
      {
        email: form.email,
        password: form.password,
      }
    );

    // Save JWT token
    localStorage.setItem(
      "adminToken",
      response.data.token
    );

    // Save admin information
    localStorage.setItem(
      "adminUser",
      JSON.stringify(response.data.user)
    );

    // Go to dashboard
    navigate("/admin/dashboard");

  } catch (error) {
    console.error("Login Error:", error);

    alert(
      error?.response?.data?.message ||
      "Invalid email or password"
    );

  } finally {
    setLoading(false);
  }
};

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white flex items-center justify-center px-5">

      <div className="absolute top-0 left-0 w-full h-1 bg-[#C9A35D]" />

      <div className="w-full max-w-md">

        {/* Brand */}
        <div className="text-center mb-10">
          <p className="text-[#C9A35D] uppercase tracking-[0.3em] text-xs mb-4">
            Administration
          </p>

          <h1 className="text-4xl md:text-5xl font-serif">
            Admin Login
          </h1>

          <p className="text-gray-500 mt-3 text-sm">
            Manage your interior website
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-[#171717] border border-[#292929] rounded-2xl p-7 md:p-9 shadow-2xl">

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            {/* Email */}
            <div>
              <label className="admin-label">
                Email Address
              </label>

              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600"
                />

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="admin@example.com"
                  className="admin-input pl-10"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="admin-label">
                Password
              </label>

              <div className="relative">
                <Lock
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600"
                />

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Enter password"
                  className="admin-input pl-10 pr-11"
                  required
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-[#C9A35D]"
                >
                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
            </div>

            {/* Forgot */}
            <div className="text-right">
              <button
                type="button"
                onClick={() =>
                  alert(
                    "Forgot password functionality will be connected with backend."
                  )
                }
                className="text-sm text-[#C9A35D] hover:underline"
              >
                Forgot Password?
              </button>
            </div>

            {/* Login */}
            <button
              disabled={loading}
              className="w-full bg-[#C9A35D] text-black py-3.5 rounded-lg font-semibold hover:opacity-85 transition disabled:opacity-50"
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>

          </form>
        </div>

        <p className="text-center text-gray-700 text-xs mt-8">
          © 2026 Amazing Solution & Decoration
        </p>

      </div>
    </div>
  );
};

export default AdminLogin;
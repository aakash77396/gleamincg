import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Careers from "../pages/Careers";
import AdminDashboard from "../admin/AdminDashboard";
import AdminLogin from "../admin/AdminLogin";
import ProtectedRoute from "../admin/ProtectedRoute";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/careers" element={<Careers />} />

                {/* Protected Admin Routes */}
                <Route element={<ProtectedRoute />}>
                    <Route
                        path="/admin/dashboard"
                        element={<AdminDashboard />}
                    />
                </Route>

                <Route path="/admin/login" element={<AdminLogin />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;
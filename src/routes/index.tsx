import {  Route, Routes } from 'react-router-dom';
import AuthGuard from "@/features/auth/auth-guard.tsx";
import ProductPage from "@/pages/product-page.tsx";
import PublicPage from "@/pages/public-page.tsx";
import LoginPage from "@/pages/login-page.tsx";
import GatedPage from "@/pages/gated-page.tsx";
import DashboardPage from "@/pages/dashboard-page.tsx";

const AppRoutes = () => {
    return (
            <Routes>
                {/* Public Routes */}
                <Route path="/" element={<DashboardPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/customers" element={<PublicPage />} />
                <Route path="/appointments" element={<PublicPage />} />
                <Route path="/products" element={<ProductPage />} />
                <Route path="/orders" element={<PublicPage />} />
                <Route path="/login" element={<LoginPage />} />

                {/* Protected Routes */}
                <Route
                    path="/gated"
                    element={
                        <AuthGuard>
                            <GatedPage />
                        </AuthGuard>
                    }
                />
            </Routes>
    );
};

export default AppRoutes;

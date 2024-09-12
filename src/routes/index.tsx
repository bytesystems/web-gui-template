import {  Route, Routes } from 'react-router-dom';
import AuthGuard from "@/features/auth/auth-guard.tsx";
import ProductPage from "@/pages/product-page.tsx";
import PublicPage from "@/pages/public-page.tsx";
import LoginPage from "@/pages/login-page.tsx";
import GatedPage from "@/pages/gated-page.tsx";
import DashboardPage from "@/pages/dashboard-page.tsx";
import {Layout} from "@/components/layout";
import TestPage from "@/pages/test-page.tsx";

const AppRoutes = () => {
    return (
            <Routes>
                {/* Public Routes */}
                <Route path="/" element={<Layout><DashboardPage /></Layout>} />
                <Route path="/dashboard" element={<Layout><DashboardPage /></Layout>} />
                <Route path="/customers" element={<Layout><PublicPage /></Layout>} />
                <Route path="/appointments" element={<Layout><PublicPage /></Layout>} />
                <Route path="/products" element={<Layout><ProductPage /></Layout>} />
                <Route path="/orders" element={<Layout><PublicPage /></Layout>} />
                <Route path="/reports/*" element={<Layout><PublicPage /></Layout>} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/test" element={<TestPage />} />

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

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/login-page';
import PublicPage from '../pages/public-page';
import GatedPage from '../pages/gated-page';
import AuthGuard from "@/features/auth/auth-guard.tsx";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                {/* Public Routes */}
                <Route path="/" element={<PublicPage />} />
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
        </Router>
    );
};

export default AppRoutes;

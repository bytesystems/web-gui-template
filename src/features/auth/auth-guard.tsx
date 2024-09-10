import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from "@/hooks/useAuth.ts";

interface AuthGuardProps {
    children: ReactNode;
}

const AuthGuard = ({ children }: AuthGuardProps) => {
    const { isAuthorized } = useAuth();

    if (!isAuthorized) {
        return <Navigate to="/login" replace />;
    }

    return <>{children}</>;
};

export default AuthGuard;

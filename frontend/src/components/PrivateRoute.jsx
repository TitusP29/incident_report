import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

export default function PrivateRoute({ children, allowedRole }) {
    const { authUser, isCheckingAuth } = useAuthStore();

    if (isCheckingAuth) {
        return <div>Loading...</div>;
    }

    if (!authUser) {
        return <Navigate to="/login" replace />;
    }

    if (allowedRole && !allowedRole.includes(authUser.role)) {
        return <Navigate to="/" replace />;
    }

    return typeof children === "function" ? children(authUser) : children;
}
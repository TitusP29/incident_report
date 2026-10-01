import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

export default function PublicRoute({ children }) {
    const { authUser, isCheckingAuth } = useAuthStore();

    if (isCheckingAuth) {
        return <div>Loading....</div>;
    }

    if (authUser) {
        return <Navigate to="/" replace />;
    }

    return children;
}
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "../Components/horizon/Looding";

function RoleProtectedRoute({ allowedRoles = [] }) {
    const { user, profile, loading } = useSelector((state) => state.auth);

    if (loading) {
        return (
            <div className="flex items-center justify-center w-full h-screen">
                <Loading />
            </div>
        );
    }

    if (!user) return <Navigate to="/singin" replace />;

    if (!profile?.role) return <Navigate to="/singin" replace />;

    if (!allowedRoles.includes(profile.role)) {
        return <Navigate to="/studio" replace />;
    }

    return <Outlet />;
    
}

export default RoleProtectedRoute;
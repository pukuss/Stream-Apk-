import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function RoleProtectedRoute({ children, allowedRoles }) {
    const { user, profile, loading } = useSelector((state) => state.auth);

    if (loading) return <h1>Loading...</h1>;

    if (!user) return <Navigate to="/login" replace />;

    if (!allowedRoles.includes(profile?.role)) {
        return <Navigate to="studio" replace />;
    }

    return children;
}

export default RoleProtectedRoute;

// {
//     path: "/dashboard",
//     element: (
//       <RoleProtectedRoute allowedRoles={["user", "admin", "host"]}>
//         <UserDashboard />
//       </RoleProtectedRoute>
// ),
import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoutes() {
  const user = useSelector((state) => state.auth.user);
  const loading = useSelector((state) => state.auth.looding);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/register" replace />
  );
}

export default ProtectedRoutes;
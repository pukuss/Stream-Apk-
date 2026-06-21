import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import Looging from "../Components/horizon/Looding";

function ProtectedRoutes() {
  const user = useSelector((state) => state.auth.user);
  const loading = useSelector((state) => state.auth.looding);

  if (loading) {
    return <div className="w-full h-screen flex justify-center items-center"><Looging /></div>;
  }

  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/singin" replace />
  );
}

export default ProtectedRoutes;
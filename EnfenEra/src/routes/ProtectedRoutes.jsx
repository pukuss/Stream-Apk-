import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function ProtectedRoutes() {
    const token = localStorage.getItem("token");

    return (
    <div>
        {token ? <outlet /> : <Navigate to="/userAuth" replace />}
    </div>
  )
}

export default ProtectedRoutes

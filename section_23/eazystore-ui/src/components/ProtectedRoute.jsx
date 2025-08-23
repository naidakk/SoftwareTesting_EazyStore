import React, { useEffect } from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "../store/auth-slice";

export default function ProtectedRoute() {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const location = useLocation();

  useEffect(() => {
    const skipRedirect = sessionStorage.getItem("skipRedirectPath") === "true";
    if (!isAuthenticated && location.pathname !== "/login" && !skipRedirect) {
      sessionStorage.setItem("redirectPath", location.pathname);
    }
  }, [isAuthenticated, location.pathname]);

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

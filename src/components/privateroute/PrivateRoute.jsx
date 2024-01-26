import React, { Suspense } from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuth } from '../../contexts/AuthContext';

const PrivateRoute = ({ element, roles }) => {
  const { user } = useAuth();


  const isAuthenticated = !!user; // Check if a user is logged in
  const canActivate = isAuthenticated && roles.some(role => user.roles.includes(role));

  return canActivate ? element : <Navigate to="/login" replace />;
};

export default PrivateRoute;

// components/ProtectedRoute.js
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../utils/auth";

const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/poma/admin/login" />; // Redirect to login if not authenticated
  }

  return children; // If authenticated, render the protected content
};

export default ProtectedRoute;

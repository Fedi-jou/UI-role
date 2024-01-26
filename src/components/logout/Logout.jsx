import React from "react";
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from "react-router-dom";
import "./Logout.css"; // Import the stylesheet


const LogoutButton = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/", { replace: true });
  };

  return (
    <button className="logout-button" onClick={handleLogout}>
      Logout
    </button>
  );
};

export default LogoutButton;

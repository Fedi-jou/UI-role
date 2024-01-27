import React, { useState, lazy, Suspense , useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import PrivateRoute from "./components/privateroute/PrivateRoute";
import Login from "./components/login/Login";
import { useAuth } from './contexts/AuthContext';
import "./App.css";
import { useNavigate } from "react-router-dom";
const AdminDashboard = lazy(() => import("./pages/dashboard/AdminDashboard"));


const App = () => {
  const { user, login, logout } = useAuth();
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

 
  useEffect(() => {
    if (user) {
      if (user.roles.includes('admin' || 'Admin')) {
        navigate("/admin", { replace: true });
      } else if (user.roles.includes('user' || 'User')) {
        navigate("/user", { replace: true });
      }
    }
  }, [user, navigate]);

  const handleLogin = () => {
    if (username.trim() !== '') {
      login(username);
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/", { replace: true });
  };

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            user ? (
              user.roles.includes('admin') ? (
                <Navigate to="/admin" replace />
              ) : (
                <Navigate to="/user" replace />
              )
            ) : (
              <div className="app-container">
                <Login setUsername={setUsername} handleLogin={handleLogin} />
              </div>
            )
          }
        />
        {user && user.roles.includes('admin') && (
          <Route
            path="/admin/*"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <PrivateRoute element={<AdminDashboard />} roles={['admin']} />
              </Suspense>
            }
          />
        )}
        {user && user.roles.includes('user') && (
          <Route
            path="/user/*"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <PrivateRoute element={<AdminDashboard />} roles={['user']} />
              </Suspense>
            }
          />
        )}
      </Routes>

      {user && (
      
        null
      )}
    </div>
  );
};

export default App;
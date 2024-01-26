// Login.jsx
import React, { useState } from "react";
import { useAuth } from '../../contexts/AuthContext';
import './Login.css'; // Import the CSS file for styling

const Login = () => {
  const [username, setUsername] = useState('');
  const { login } = useAuth(); // Access the login function from AuthContext

  const handleLogin = () => {
    if (username.trim() !== '') {
      login(username);
    }
  };

  return (
    <div className="paper-container">
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <label className="login-label" htmlFor="username">Username:</label>
      <input
        className="login-input"
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button className="login-button" onClick={handleLogin}>Login</button>
    </div>
    </div>
  );
};

export default Login;

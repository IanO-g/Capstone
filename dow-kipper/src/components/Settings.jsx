import React, { useState } from "react";
import Navbar from "./Navbar";

const Settings = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
    // Reset the form
    setUsername("");
    setPassword("");
  };

  return (
    <div>
      <Navbar />
      <div className="account-main flex ml-4 py-6">
        <div className="side-bar">
          <div className="settings-container">
            <h1>Settings</h1>
            <h3>Account</h3>
            <h3>Notifications</h3>
            <h3>Password</h3>
          </div>
        </div>
        <div className="account-controls ml-12">
          <div className="your-account-container">
            <h1>Your Account</h1>
            <h3>Your Username</h3>
          </div>
          <div className="change-password-container">
            <h1>Change Password</h1>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  className="p-3 my-2 bg-white-700 rounded form-input"
                  type="username"
                  placeholder="username"
                  id="username"
                  value={username}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  className="p-3 my-2 bg-white-700 rounded form-input"
                  type="password"
                  placeholder="Password"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
              </div>
              <button
                className="bg-blue-600 py-3 my-6 mx-6 rounded font-bold text-white"
                type="submit"
              >
                Update Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;

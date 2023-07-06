import React, { useState } from "react";
import coverLogo from "../assets/cover.png"
import Navbar from "./Navbar";
import axios from 'axios';
import { useAppState } from "../context/useappstate";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setAccessToken } =
    useAppState();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);

    try {
      const response = await axios.post("/security/authenticate", {
        username: email,
        password,
      });
      console.log("Login was successful:", response.data);
      setAccessToken(response.data.jwt_token);
      // Reset the form
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  // Create a POST Request for LOGIN ENDPOINT

  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-64 object-cover"
          src={coverLogo}
          alt="/"
        />
        {/* Form Overlay */}
        <div className="sticky w-full px-4 py-72 z-10">
          {/* Form */}
          <div className="max-w-[450px] h-[400px] mx-auto bg-slate-200 text-black rounded">
            <div className="max-w-[320px] mx-auto py-12">
              <h1 className="text 3xl font-bold">Login</h1>
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col py-4"
              >
                <label htmlFor="email">Email: </label>
                <input
                  className="p-3 my-2 bg-white-700 rounded"
                  type="email"
                  placeholder="Email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
                <label htmlFor="password">Password:</label>
                <input
                  className="p-3 my-2 bg-white-700 rounded"
                  type="password"
                  placeholder="Password"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
                <button
                  className="bg-blue-600 py-3 my-6 rounded font-bold text-white"
                  type="submit"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

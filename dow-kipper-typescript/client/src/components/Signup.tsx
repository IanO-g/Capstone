import React, { useState } from "react";
import coverLogo from "../assets/cover.png";
import axios from "axios";
import Navbar from "./Navbar";

const Signup: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);


    try {
      const response = await axios.post(
        "/security/create-account",
        {
          username: email,
          password,
        }
      );
      console.log("Signup was successful:", response.data);
      // Reset the form
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  // After the user signs up, as a response from create-account, the user needs to receive a JWT access token and refresh token
  // THIS NEEDS TO COME FROM THE BACKEND
  // What kind of authentication we need

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

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
              <h1 className="text 3xl font-bold">Sign Up</h1>
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
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;

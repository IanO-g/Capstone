import React, { Fragment } from "react";
import Navbar from "./components/Navbar";
import Collections from "./components/Collections";
import Formsubmit from "./components/Formsubmit";
import Itemsubmit from "./components/Itemsubmit";
import User from "./components/User";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Inventory from "./components/Inventory";
import Settings from "./components/Settings";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import { AppStateProvider } from "./context/useappstate";

import "./index.css";

const App: React.FC = () => {
  return (
    <AppStateProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/user" element={<User />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </AppStateProvider>
  );
};

export default App;

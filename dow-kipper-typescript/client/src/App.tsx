import React, { Fragment } from "react";
import Navbar from "./components/Navbar";
import Collections from "./components/Collections";
import Formsubmit from "./components/Formsubmit";
import Itemsubmit from "./components/Itemsubmit";
import User from "./components/User";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Inventory from "./components/Inventory";
import Signup from "./components/Signup";
import { Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
};

export default App;

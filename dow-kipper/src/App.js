import React from 'react';

import Collections from "./components/Collections";
import Formsubmit from "./components/Formsubmit";
import Home from "./components/Home";
import Inventory from "./components/Inventory";
import Itemsubmit from "./components/Itemsubmit";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Settings from "./components/Settings";
import Signup from "./components/Signup";
import "./index.css";

const App = () => {
  return (
    <div className="App">
        <Itemsubmit />
        {/* <Formsubmit /> */}
        {/* <Navbar /> */}
        {/* <Home /> */}
        {/* <Collections /> */}
        {/* <Signup /> */}
        {/* <Login /> */}
        {/* <Settings /> */}
        {/* <Inventory /> */}
    </div>
  );
}

export default App;

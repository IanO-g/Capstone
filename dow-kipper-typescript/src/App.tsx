import React from "react";
import Navbar from "./components/Navbar";
import Collections from "./components/Collections";
import Formsubmit from "./components/Formsubmit";
import Itemsubmit from "./components/Itemsubmit";
import User from "./components/User";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Inventory from "./components/Inventory";
import Signup from "./components/Signup";

const App: React.FC = () => {
  return (
    <div className="App">
      {/* <Navbar /> */}
      {/* <Footer /> */}
      {/* <Home /> */}
      {/* <Inventory /> */}
      {/* <Collections /> */}
      {/* <Formsubmit /> */}
      {/* <Itemsubmit /> */}
      {/* <User /> */}
      <Signup />
    </div>
  );
};

export default App;

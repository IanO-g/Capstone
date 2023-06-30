import React from "react";
import Home from "./components/Home";
import "./index.css";
import Collections from "./components/Collections";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Settings from "./components/Settings";

const App:React.FC = () => {
  return (
    <div className="App">
        <Home />
        <Collections/>
        <Signup/>
        <Login/>
        <Settings/>
    </div>
  );
}

export default App;

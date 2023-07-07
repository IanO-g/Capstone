import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MEmptyInventory: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="main-collections">
      <h1 className="ml-3 mt-8 text-4xl font-bold">Your Inventory is Empty!</h1>
      <p className="ml-3 mt-4 text-lg">
        Would you like to add items to your collection?
      </p>
      <button
        className="ml-3 mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => navigate("/mitemform")}
      >
        Add Items
      </button>
    </div>
  );
};

export default MEmptyInventory;
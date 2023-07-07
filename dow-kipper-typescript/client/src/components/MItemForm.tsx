import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const MItemForm: React.FC = () => {
  const [cardName, setCardName] = useState("");
  const [cardType, setCardType] = useState("");
  const [year, setYear] = useState("");
  const navigate = useNavigate();

  // Generate years from 1900 to current year
  const years = [];
  for (let i = new Date().getFullYear(); i >= 1900; i--) {
    years.push(i);
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Card Name: ${cardName}`);
    console.log(`Card Type: ${cardType}`);
    console.log(`Year: ${year}`);
    navigate("/mcardslist");
  };

  return (
    <div className="card p-4 rounded border border-black ml-4 mt-8 h-5/6">
      <h3 className="font-semibold text-xl">Add Item to Inventory:</h3>
      <form onSubmit={handleSubmit} className="mt-1">
        <input
          type="text"
          placeholder="Card Name"
          value={cardName}
          onChange={(e) => setCardName(e.target.value)}
          className="border-2 border-gray-400 p-1 rounded text-sm"
        />

        <select
          value={cardType}
          onChange={(e) => setCardType(e.target.value)}
          className="border-2 border-gray-400 p-1 rounded text-sm mt-2"
        >
          <option value="" disabled selected>
            Select Card Type
          </option>
          <option value="Pokemon">Pokemon</option>
          <option value="Yu-Gi-Oh">Yu-Gi-Oh</option>
          <option value="Baseball">Baseball</option>
        </select>

        <select
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="border-2 border-gray-400 p-1 rounded text-sm mt-2"
        >
          <option value="" disabled selected>
            Select Year
          </option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>

        <button
          type="submit"
          className="bg-blue-500 text-white px-2 py-1 rounded mt-2 text-sm"
        >
          Add Item
        </button>
      </form>
    </div>
  );
};

export default MItemForm;
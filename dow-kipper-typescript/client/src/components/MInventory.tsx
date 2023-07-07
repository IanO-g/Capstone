import React from "react";

const InventoryPage: React.FC = () => {
  return (
    <div className="flex mt-8">
      <div className="w-2/3">
        <h1 className="text-2xl mb-4">Your Inventory</h1>
        <div className="border border-gray-300 p-4 rounded mb-6 cursor-pointer">
          <img
            src="https://dilxwvfkfup17.cloudfront.net/eyJpdiI6Ik0wVG9Ici9HbkR6Vk5KSkNtMTk4U3c9PSIsInZhbHVlIjoibCs3Z0tCLzdYazlPU3RQVU1hVjRDVno1SzR0M2JycWg1a2d1KzBsQlBkdGlWVkVMdTRmTUxiYzMzUmJNR3BWc05rakNuQXlUZ2NDVlpsakFSSGZSZnc9PSIsIm1hYyI6IjZjZWZlYmIzZjI1NmUzNGNmNmE2NGE0NWY3MmMwZWEwZjAwZDA5MjY1NzM0ZDYxM2VmNThkODI4ZDk2OTczMDEiLCJ0YWciOiIifQ=="
            alt="Charizard 1st Edition #4"
            className="w-full h-64 object-cover rounded"
          />
          <div className="mt-2">
            <h2 className="text-lg font-bold">Charizard 1st Edition #4</h2>
            <p>Pokemon Base Set</p>
          </div>
        </div>
      </div>
      <div className="w-1/3 ml-4 p-6 border border-gray-300 rounded">
        <h2 className="text-xl font-bold mb-4">Card Information</h2>
        <p>
          <strong>Name:</strong> Charizard 1st Edition #4
        </p>
        <p>
          <strong>Set:</strong> Pokemon Base Set
        </p>
        <p>
          <strong>Estimated Value: </strong> $1050.00
        </p>
        <p>
          <strong>Average Sale Price:</strong> $8261.24
        </p>
        <p>
          <strong>Price Ungraded: </strong>$1050.00{" "}
        </p>
        <p>
          <strong>Grade 7 Price: </strong>$7489.71{" "}
        </p>
        <p>
          <strong>Grade 8 Price: </strong>$9000.00{" "}
        </p>
        <p>
          <strong>Grade 9 Price: </strong>$19,219.00{" "}
        </p>
        <p>
          <strong>Grade 9.5 Price: </strong>$36031.00{" "}
        </p>
        <p>
          <strong>Grade 10 Price: </strong>$36766.00{" "}
        </p>
      </div>
    </div>
  );
};

export default InventoryPage;
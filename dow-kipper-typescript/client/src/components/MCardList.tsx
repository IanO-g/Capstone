import React from "react";
import { useNavigate } from "react-router-dom";

interface Card {
  name: string;
  set: string;
  imageUrl: string;
}

const MCardsList: React.FC = () => {
  const navigate = useNavigate();
  const cards: Card[] = [
    {
      name: "Charizard 1st Edition",
      set: "Pokemon Japanese Shining Darkness",
      imageUrl: "https://i.ebayimg.com/images/g/iuMAAOSwhyRkkxMH/s-l1600.jpg",
    },
    {
      name: "Charizard 1st Edition #103",
      set: "Pokemon Japanese Expedition Pack",
      imageUrl: "https://i.ebayimg.com/images/g/ScIAAOSwpf5jho2V/s-l1600.jpg",
    },
    {
      name: "Charizard 1st Edition #11",
      set: "Pokemon Japanese 20th Anniversary",
      imageUrl:
        "https://commondatastorage.googleapis.com/images.pricecharting.com/7ee71e3435e294998f914c249cb3481b5b7be5fbefbc5287d1d906913b0b7864/240.jpg",
    },
    {
      name: "Charizard 1st Edition #4",
      set: "Pokemon Base Set",
      imageUrl:
        "https://dilxwvfkfup17.cloudfront.net/eyJpdiI6Ik0wVG9Ici9HbkR6Vk5KSkNtMTk4U3c9PSIsInZhbHVlIjoibCs3Z0tCLzdYazlPU3RQVU1hVjRDVno1SzR0M2JycWg1a2d1KzBsQlBkdGlWVkVMdTRmTUxiYzMzUmJNR3BWc05rakNuQXlUZ2NDVlpsakFSSGZSZnc9PSIsIm1hYyI6IjZjZWZlYmIzZjI1NmUzNGNmNmE2NGE0NWY3MmMwZWEwZjAwZDA5MjY1NzM0ZDYxM2VmNThkODI4ZDk2OTczMDEiLCJ0YWciOiIifQ==",
    },
    {
      name: "Charizard 1st Edition #71",
      set: "Pokemon Japanese Expedition Expansion Pack",
      imageUrl: "https://i.ebayimg.com/images/g/PW4AAOSwUoNi4jR7/s-l1200.webp",
    },
  ];

  return (
    <div className="p-4">
      <h1 className="mb-4 text-3xl">Cards List:</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((card, index) => (
          <div key={index} className="card p-4 flex flex-col items-center">
            <img
              className="object-cover h-64 w-64 mb-2"
              src={card.imageUrl}
              alt={card.name}
            />
            <h2 className="text-lg font-bold text-center">{card.name}</h2>
            <p className="text-sm text-gray-500 text-center">{card.set}</p>
            <button
              className="mt-2 bg-blue-500 text-white px-2 py-1 rounded"
              onClick={() => navigate("/minventory")}
            >
              Add Item
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MCardsList;
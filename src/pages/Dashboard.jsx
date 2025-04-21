import React, { useEffect, useState } from "react";
import styles from "../utils/editor-data";
import { useNavigate } from "react-router";

export default function Dashboard() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [allCards, setAllCards] = useState([]);
  const [cards, setCards] = useState([]);

  const navigate = useNavigate();

  const handleData = () => {
    const mappedCategories = Object.keys(styles);

    setCategories(mappedCategories);

    let arr = [];

    mappedCategories.forEach((cat) => {
      Object.keys(styles[cat]).map((bgKey) => {
        arr.push({
          path: styles[cat][bgKey].cardPath,
          category: cat,
          id: bgKey,
        });
      });
    });
    setCards(arr);
    setAllCards(arr);
  };

  const handleSelectCategory = (selectedCat) => {
    if (selectedCat === selectedCategory) {
      setSelectedCategory("");
      setCards(allCards);
      return;
    }
    setSelectedCategory(selectedCat);
    let copiedCards = structuredClone(cards);

    copiedCards = copiedCards.filter((card) => card.category === selectedCat);

    setCards(copiedCards);
  };

  useEffect(() => {
    handleData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        DIY INVITATION
      </h1>

      <div className="flex justify-center gap-4 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleSelectCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 shadow-md ${
              selectedCategory === cat
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
            }`}
          >
            {cat?.toUpperCase() || ""}
          </button>
        ))}
      </div>

      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {cards.map((item) => (
          <div
            key={item.id}
            className="break-inside-avoid rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            <img
              src={item.path}
              alt="img"
              className="w-full object-cover"
              onClick={() =>
                navigate(`/editor?type=${item.category}&temp=${item.id}`)
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}

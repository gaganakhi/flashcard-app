import { useState } from "react";

export default function FlashcardPreview({ card, onFlip }) {
  const [flipped, setFlipped] = useState(false);

  if (!card) return null;

  const handleClick = () => {
    setFlipped(!flipped);
    onFlip(); // show action buttons
  };

  return (
    <div
      onClick={handleClick}
      className="relative w-full h-64 cursor-pointer perspective"
    >
      <div
        className={`absolute inset-0 transition-transform duration-500 transform-style-preserve-3d ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* FRONT SIDE */}
        <div className="absolute inset-0 bg-white rounded-xl shadow-lg p-6 backface-hidden flex items-center justify-center">
          <h2 className="text-xl font-bold text-gray-800 text-center">
            {card.title}
          </h2>
        </div>

        {/* BACK SIDE (DETAILS) */}
        <div className="absolute inset-0 bg-blue-600 text-white rounded-xl shadow-lg p-4 rotate-y-180 backface-hidden overflow-y-auto">
          <h3 className="text-lg font-semibold mb-2">
            {card.description}
          </h3>

          <ul className="space-y-2 text-sm">
            {card.terms.map((term, index) => (
              <li
                key={index}
                className="bg-white/10 p-2 rounded"
              >
                <span className="font-semibold">
                  {index + 1}. {term.term}:
                </span>{" "}
                {term.definition}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

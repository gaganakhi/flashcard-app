import { useState } from "react";
import { Link } from "react-router-dom";

export default function FlashcardCard({ card }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      onClick={() => setFlipped(!flipped)}
      className="relative h-48 cursor-pointer perspective"
    >
      <div
        className={`absolute inset-0 transition-transform duration-500 transform-style-preserve-3d ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front */}
        <div className="absolute inset-0 bg-white rounded-xl shadow p-4 backface-hidden">
          <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
            {card.category}
          </span>
          <h3 className="mt-3 text-lg font-bold">{card.title}</h3>
          <p className="text-gray-600 mt-2 line-clamp-3">
            {card.description}
          </p>
          <p className="text-sm text-gray-400 mt-4">
            Click to flip
          </p>
        </div>

        {/* Back */}
        <div className="absolute inset-0 bg-blue-600 text-white rounded-xl shadow p-4 rotate-y-180 backface-hidden">
          <h4 className="font-semibold mb-2">Terms</h4>
          <p className="text-sm">
            {card.terms.length} items
          </p>

          <Link
            to={`/flashcards/${card.id}`}
            className="absolute bottom-4 right-4 text-sm underline"
          >
            View details →
          </Link>
        </div>
      </div>
    </div>
  );
}

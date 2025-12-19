import { useSelector, useDispatch } from "react-redux";
import { setActiveCard } from "../redux/flashcardSlice";
import { useState } from "react";
import FlashcardPreview from "../components/FlashcardPreview";
import FlashcardActions from "../components/FlashcardActions";
import PageWrapper from "../components/PageWrapper";

export default function MyFlashcards() {
  const dispatch = useDispatch();
  const { cards, activeCardId } = useSelector(
    (state) => state.flashcards
  );

  // 👇 LOCAL UI STATE (this is the fix)
  const [hasClickedCard, setHasClickedCard] = useState(false);

  const activeCard =
    cards.find((c) => c.id === activeCardId) || null;

  return (
    <PageWrapper>
    <div className="grid grid-cols-12 gap-6 px-12 py-10">
      {/* LEFT LIST */}
      <div className="col-span-3 bg-white p-4 rounded-lg shadow">
        <h3 className="font-semibold mb-3">Flashcards</h3>
        <ul className="space-y-2">
          {cards.map((card, i) => (
            <li
              key={card.id}
              onClick={() => {
                dispatch(setActiveCard(card.id));
                setHasClickedCard(false); // reset when switching cards
              }}
              className="cursor-pointer hover:underline"
            >
              {i + 1}. {card.title}
            </li>
          ))}
        </ul>
      </div>

      {/* CENTER PREVIEW */}
      <div className="col-span-6 flex justify-center items-center">
        <FlashcardPreview
          card={activeCard}
          onFlip={() => setHasClickedCard(true)} // 👈 unlock buttons
        />
      </div>

      {/* RIGHT ACTIONS */}
      <div className="col-span-3">
        <FlashcardActions
          card={activeCard}
          visible={hasClickedCard} // 👈 ONLY after flip
        />
      </div>
    </div>
    </PageWrapper>
  );
}

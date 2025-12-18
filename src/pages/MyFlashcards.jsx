import { useSelector } from "react-redux";
import FlashcardCard from "../components/FlashcardCard";
import PageWrapper from "../components/PageWrapper";

export default function MyFlashcards() {
  const cards = useSelector((state) => state.flashcards.cards);

  return (
    <PageWrapper>
      <div className="max-w-7xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-bold mb-6">
          My Flashcards
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {cards.map((card) => (
            <FlashcardCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}

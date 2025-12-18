import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function FlashcardDetails() {
  const { id } = useParams();
  const card = useSelector((state) =>
    state.flashcards.cards.find((c) => c.id == id)
  );

  if (!card) return null;

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold">{card.title}</h1>
      {card.terms.map((t, i) => (
        <div key={i} className="border p-3 mt-2">
          <p className="font-semibold">{t.term}</p>
          <p>{t.definition}</p>
        </div>
      ))}
    </div>
  );
}

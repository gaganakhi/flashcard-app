import FlashcardForm from "../components/FlashcardForm";
import PageWrapper from "../components/PageWrapper";

export default function CreateFlashcard() {
  return (
    <PageWrapper>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Create Flashcard
        </h2>

        <FlashcardForm />
      </div>
    </PageWrapper>
  );
}

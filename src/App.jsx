import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateFlashcard from "./pages/CreateFlashcard";
import MyFlashcards from "./pages/MyFlashcards";
import FlashcardDetails from "./pages/FlashcardDetails";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<CreateFlashcard />} />
        <Route path="/flashcards" element={<MyFlashcards />} />
        <Route path="/flashcards/:id" element={<FlashcardDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

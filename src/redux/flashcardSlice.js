import { createSlice } from "@reduxjs/toolkit";

const flashcardSlice = createSlice({
  name: "flashcards",
  initialState: {
    cards: [],
    activeCardId: null,   // 👈 tracks selected card
  },
  reducers: {
    addFlashcard: (state, action) => {
      const newCard = {
        ...action.payload,
        category: action.payload.category || "General",
      };

      state.cards.push(newCard);

      // 👇 automatically select the newly created card
      state.activeCardId = newCard.id;
    },

    setActiveCard: (state, action) => {
      state.activeCardId = action.payload;
    },
  },
});

export const { addFlashcard, setActiveCard } = flashcardSlice.actions;
export default flashcardSlice.reducer;

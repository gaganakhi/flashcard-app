import { createSlice } from "@reduxjs/toolkit";

const flashcardSlice = createSlice({
  name: "flashcards",
  initialState: {
    cards: [],
  },
  reducers: {
    addFlashcard: (state, action) => {
  state.cards.push({
    ...action.payload,
    category: action.payload.category || "General",
  });
},
  },
});

export const { addFlashcard } = flashcardSlice.actions;
export default flashcardSlice.reducer;

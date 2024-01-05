import { createSlice } from "@reduxjs/toolkit";

export const NoteReducer = createSlice({
  name: "notes",
  initialState: {
    notes: [],
    note: {},
  },
  reducers: {
    addNotes: (state, action) => {
      state.notes.push(action.payload);
    },
    getNoteById: (state, action) => {
      state.note = state.notes.find((data) => data.title === action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addNotes, getNoteById } = NoteReducer.actions;
export default NoteReducer.reducer;
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
      state.notes.splice(action.payload,1,action.payload.notetitle)
      // state.note = state.notes.find((data) => data.title === action.payload);
    },
    deleteNoteById: (state,action) => {
      state.notes.splice(action.payload,1);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addNotes, getNoteById, deleteNoteById } = NoteReducer.actions;
export default NoteReducer.reducer;
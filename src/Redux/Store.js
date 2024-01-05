import { configureStore } from "@reduxjs/toolkit";
import NoteReducer from "./Reducers/NoteReducer";
// ROOT REDUCER

const store = configureStore({
  reducer: {
    notesreducer:NoteReducer,
  },
});

export default store;
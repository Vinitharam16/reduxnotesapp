import { configureStore } from "@reduxjs/toolkit";
import NoteReducer from "./Reducers/NoteReducer";
import AuthReducer from "./Reducers/AuthenticationReducer";
// ROOT REDUCER

const store = configureStore({
  reducer: {
    notesreducer:NoteReducer,
    authreducer:AuthReducer,
  },
});

export default store;
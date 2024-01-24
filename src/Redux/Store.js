import { configureStore } from "@reduxjs/toolkit";
import NoteReducer from "./Reducers/NoteReducer";
import AuthReducer from "./Reducers/AuthenticationReducer";
import TaskReducer from "./Reducers/TaskReducer";
// ROOT REDUCER

const store = configureStore({
  reducer: {
    notesreducer:NoteReducer,
    authreducer:AuthReducer,
    taskreducer:TaskReducer,
  },
});

export default store;
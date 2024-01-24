import { createSlice } from "@reduxjs/toolkit";

export const TaskReducer = createSlice ({
    name: "tasks",
    initialState: {
        tasks: [],
    },
    reducers: {
        addTask: (state,action) => {
            state.tasks.push(action.payload);
        },
    },
});

export const { addTask } = TaskReducer.actions;
export default TaskReducer.reducer;
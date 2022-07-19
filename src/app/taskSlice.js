import { createSlice } from "@reduxjs/toolkit";

const initialState = {
     tasks: [],
};

export const tasksSlice = createSlice({
     name: "tasks",
     initialState,
     reducers: {
          addTask: (state, action) => {
               state.push(action.payload);
          },
          markSelected: (state, action) => {
               const tasks = state.find((task) => task.id === action.payload);
               tasks.completed = !tasks.completed;
          },
     },
});

export const taskValues = (state) => state.tasks.tasks;
export const { addTask, markSelected } = tasksSlice.actions;

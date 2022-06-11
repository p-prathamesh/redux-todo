import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTask: (state, {payload}) => {
      const newTask = {
        id: payload.id,
        name: payload.task,
        createdDate: payload.date,
        createdTime: payload.time
      };
      state.push(newTask);
    },
    deleteTask: (state, {payload}) => {
      return state.filter((item) => item.id !== payload.id);
    },
  },
});

export const { addTask, deleteTask } = tasksSlice.actions;

export default tasksSlice.reducer;

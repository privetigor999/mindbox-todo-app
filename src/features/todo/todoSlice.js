import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    toggleCompletedTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      todo.isCompleted = !todo.isCompleted;
    },
    showActivedTodo: (state) => {
      state.todos = state.todos.filter((todo) => todo.isCompleted === true);
    },
  },
});

export const { addTodo, toggleCompletedTodo, showActivedTodo } =
  todoSlice.actions;
export default todoSlice.reducer;

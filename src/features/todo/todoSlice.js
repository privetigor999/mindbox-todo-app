import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  active: [],
  completed: [],
  index: 0,
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

    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, toggleCompletedTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;

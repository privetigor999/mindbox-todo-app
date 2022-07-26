import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import "./styles.scss";
const TodoList = () => {
  const todos = useSelector((state) => state.todo.todos);

  return (
    <div className="todoList">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;

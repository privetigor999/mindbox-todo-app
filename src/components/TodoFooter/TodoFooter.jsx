import React from "react";
import "./styles.scss";
import { useSelector } from "react-redux";

const TodoFooter = () => {
  const counter = useSelector((state) => state.todo.todos.length);

  return (
    <footer>
      <p>total: {counter} items</p>
    </footer>
  );
};

export default TodoFooter;

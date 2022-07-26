import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { showActivedTodo } from "../../features/todo/todoSlice";
const TodoFooter = () => {
  const counter = useSelector((state) => state.todo.todos.length);
  const dispatch = useDispatch();
  const showActive = () => {
    dispatch(showActivedTodo());
  };
  return (
    <footer>
      <p>{counter} items left</p>
      <div>
        <p>All</p>
        <p onClick={showActive}>Active</p>
        <p>Completed</p>
      </div>
      <p className="clearButton">Clear completed</p>
    </footer>
  );
};

export default TodoFooter;

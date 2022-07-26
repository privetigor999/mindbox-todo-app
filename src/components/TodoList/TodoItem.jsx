import React from "react";
import { useDispatch } from "react-redux";
import { toggleCompletedTodo, deleteTodo } from "../../features/todo/todoSlice";
import completedPng from "../../images/completed.png";
import activePng from "../../images/active.png";
import removePng from "../../images/remove.png";
const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const toggleTodoHandler = (id) => {
    dispatch(toggleCompletedTodo(todo.id));
  };
  const removeHandleTodo = (id) => {
    dispatch(deleteTodo(id));
  };
  return (
    <div className="todoItem">
      <img
        onClick={() => toggleTodoHandler(todo.id)}
        src={todo.isCompleted ? completedPng : activePng}
        className={todo.isCompleted ? null : "activeRing"}
        alt="ok"
      />
      <p className={todo.isCompleted ? "completed" : null}>{todo.title}</p>
      <img
        onClick={() => removeHandleTodo(todo.id)}
        src={removePng}
        alt="remove"
        className="removeButton"
      />
    </div>
  );
};

export default TodoItem;

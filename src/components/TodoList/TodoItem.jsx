import React from "react";
import { useDispatch } from "react-redux";
import { toggleCompletedTodo } from "../../features/todo/todoSlice";
import done from "../../images/done.png";
import remove from "../../images/remove.png";
const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const toggleTodoHandler = (id) => {
    dispatch(toggleCompletedTodo(todo.id));
  };
  return (
    <div className="todoItem">
      <img
        onClick={() => toggleTodoHandler(todo.id)}
        src={todo.isCompleted ? done : remove}
        alt="ok"
      />
      <p className={todo.isCompleted ? "completed" : null}>{todo.title}</p>
    </div>
  );
};

export default TodoItem;

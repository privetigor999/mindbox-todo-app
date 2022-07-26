import React from "react";
import done from "./../images/done.png";

const TodoList = () => {
  return (
    <div className="todoList">
      <div className="todoItem">
        <img src={done} alt="ok" />
        <p>Todo</p>
      </div>
    </div>
  );
};

export default TodoList;

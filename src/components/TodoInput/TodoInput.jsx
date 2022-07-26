import React from "react";
import done from "./../../images/done.png";
const TodoInput = () => {
  return (
    <div className="todoInput">
      <input placeholder="what needs to be done?" />
      <img src={done} alt="ok" />
    </div>
  );
};

export default TodoInput;

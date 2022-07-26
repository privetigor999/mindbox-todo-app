import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../features/todo/todoSlice";
import uuid from "react-uuid";
import done from "./../../images/done.png";

const TodoInput = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const handleAddTodo = () => {
    const newTodo = {
      id: uuid(),
      title: value,
      isCompleted: false,
    };
    dispatch(addTodo(newTodo));
    setValue("");
    console.log(newTodo);
  };
  return (
    <div className="todoInput">
      <input
        value={value}
        onChange={(event) => setValue(event.target.value)}
        type="text"
        placeholder="what needs to be done?"
      />
      <img onClick={handleAddTodo} src={done} alt="ok" />
    </div>
  );
};

export default TodoInput;

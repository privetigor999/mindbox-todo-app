import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../features/todo/todoSlice";
import uuid from "react-uuid";
import "./styles.scss";
import addPng from "./../../images/add.png";

const TodoInput = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const handleAddTodo = () => {
    if (value.trim()) {
      const newTodo = {
        id: uuid(),
        title: value,
        isCompleted: false,
      };
      dispatch(addTodo(newTodo));
      setValue("");
    }
  };
  return (
    <div className="todoInput">
      <input
        value={value}
        onChange={(event) => setValue(event.target.value)}
        type="text"
        placeholder="what needs to be done?"
      />
      <img onClick={handleAddTodo} src={addPng} alt="ok" />
    </div>
  );
};

export default TodoInput;

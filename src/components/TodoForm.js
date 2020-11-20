import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value:"");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });

    setInput("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="todo-form">
    {props.edit ? (
        <div>
        <input
          type="text"
          placeholder="Update"
          value={input}
          name="text"
          className="todo-input"
          onChange={handleChange}
          ref={inputRef}
        />
        <button className="todo-button edit ">Update</button> 
        </div>) :
        (
        <div> 
        <input
          type="text"
          placeholder="Add a Todo"
          value={input}
          name="text"
          className="todo-input"
          onChange={handleChange}
          ref={inputRef}
        />
        <button className="todo-button">Add Todo</button>
        </div>)}
      </form>
    </div>
  );
}
export default TodoForm;

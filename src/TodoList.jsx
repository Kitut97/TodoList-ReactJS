// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./TodoList.css";

function TodoList() {
  const [text, setText] = useState([]);
  const [input, setInput] = useState("");

  const Add = () => {
    if (input.trim()) {
      setText([...text, input]);
      setInput("");
    }
  };
  // untuk delete dari chatGbt
  const Delete = (index) => {
    const newKata = text.filter((_text, i) => i !== index);
    setText(newKata);
  };

  return (
    <div className="todo-container">
      <h1>TodoList</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a new task"
        className="todo-input"
      />
      <button onClick={Add} className="todo-add-button">
        Add
      </button>
      <ul className="todo-list">
        {text.map((_text, index) => (
          <li key={index} className="todo-item">
            {text}
            <button
              onClick={() => Delete(index)}
              className="todo-delete-button"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

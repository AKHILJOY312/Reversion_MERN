// Todo.jsx
import React, { useState } from "react";
import { useTodo } from "./context";

function Todo() {
  const { items, dispatch } = useTodo();
  const [inputValue, setInputValue] = useState("");

  const handleAdd = () => {
    if (inputValue.trim() === "") return; // Prevent empty tasks
    dispatch({ type: "add", payload: inputValue });
    setInputValue(""); // Clear input after adding
  };

  const handleToggle = (id) => {
    dispatch({ type: "toggle", payload: id });
  };

  const handleDelete = (id) => {
    dispatch({ type: "delete", payload: id });
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new task"
          onKeyPress={(e) => e.key === "Enter" && handleAdd()}
          style={{ padding: "8px", marginRight: "8px", width: "300px" }}
        />
        <button onClick={handleAdd} style={{ padding: "8px 16px" }}>
          Add
        </button>
      </div>

      <ul style={{ marginTop: "20px", listStyle: "none", padding: 0 }}>
        {items.length === 0 ? (
          <p>No tasks yet. Add one above!</p>
        ) : (
          items.map((item) => (
            <li
              key={item.id}
              style={{
                padding: "10px",
                margin: "5px 0",
                background: item.completed ? "#e45656ff" : "#926e6eff",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                textDecoration: item.completed ? "line-through" : "none",
              }}
            >
              <span
                onClick={() => handleToggle(item.id)}
                style={{ cursor: "pointer", flex: 1 }}
              >
                {item.text}
              </span>
              <button
                onClick={() => handleDelete(item.id)}
                style={{
                  padding: "4px 8px",
                  background: "#ff4d4d",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default Todo;

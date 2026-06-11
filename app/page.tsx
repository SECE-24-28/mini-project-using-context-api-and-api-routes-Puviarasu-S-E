"use client";
import { useState } from "react";
import { useTodos } from "./context/TodoContext";

export default function Home() {
  const { todos, addTodo, deleteTodo } = useTodos();
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (!input.trim()) return;
    addTodo(input.trim());
    setInput("");
  };

  return (
    <main>
      <h1>Todo App</h1>
      <div>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAdd()}
          placeholder="Add a new todo..."
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
      {todos.length === 0 && <p>No todos yet.</p>}
    </main>
  );
}

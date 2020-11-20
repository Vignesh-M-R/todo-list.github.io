import React from "react";
import "./style.css";
import TodoList from "./components/TodoList";
window.React = React;

export default function App() {
  return (
    <div className="todo-app">
      <TodoList />
    </div>
  );
}
export default App;
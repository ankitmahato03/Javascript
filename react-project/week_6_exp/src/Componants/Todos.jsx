import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

let count = 4;

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "hello", description: "hell description" },
    { id: 2, title: "hello2", description: "hell description2" },
    { id: 3, title: "hello3", description: "hell description3" },
  ]);

  function addTodo() {
    setTodos([
      ...todos,
      {
        id: count++,
        title: "title" + Math.random(),
        description: "description" + Math.random(),
      },
    ]);
  }

  return (
    <>
      <button onClick={addTodo}>Add New Todo</button>
      {todos.map((todo) => (
        <Todo key={todo.id} title={todo.title} description={todo.description} />
      ))}
    </>
  );
}

function Todo({ title, description }) {
  return (
    <>
      <h1> {title}</h1>
      <h5>{description}</h5>
    </>
  );
}

export default App;

import { useState } from "react";

import "./App.css";
import { CreateTodo } from "./Componants/CreateTodo";

function App() {
  const [Todos, setTodos] = useState([]);

  return (
    <>
      <CreateTodo />
      <Todos />
    </>
  );
}

export default App;

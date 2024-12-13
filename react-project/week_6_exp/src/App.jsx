import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [Title, setTitle] = useState("ankit 1");

  return (
    <>
      <button on>Click here to change the title</button>
      <Header title={title}></Header>
      <Header title="ankit2"></Header>
    </>
  );
}

function Header({ title }) {
  return <div>{title}</div>;
}

export default App;

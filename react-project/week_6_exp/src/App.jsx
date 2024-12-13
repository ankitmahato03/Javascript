import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <CerdWrapper innerComponant={<Textconfig />} />
      <CerdWrapper innerComponant={<Textconfig2 />} />
    </>
  );
}

function Textconfig() {
  return <>hi there</>;
}

function Textconfig2() {
  return <>hi there2</>;
}

function CerdWrapper({ innerComponant }) {
  return (
    <div style={{ border: "2px solid red", margin: 10, padding: 10 }}>
      {innerComponant}
    </div>
  );
}
export default App;

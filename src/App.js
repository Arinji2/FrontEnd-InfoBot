import Nav from "../src/components/nav";
import About from "./components/about";
import "./App.css";
import React from "react";

function App() {
  return (
    <div className="bg-black">
      <Nav />
      <About />
    </div>
  );
}

export default App;

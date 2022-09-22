import Nav from "../src/components/nav";
import Hero from "./components/hero";
import About from "./components/about";
import Choose from "./components/choose";
import Topics from "./components/topics";
import Updates from "./components/updates";
import "./App.css";
import React from "react";

function App() {
  return (
    <div className="bg-black">
      <Nav />
      <Hero />
      <About />
      <Choose />
      <Topics />
      <Updates />
    </div>
  );
}

export default App;

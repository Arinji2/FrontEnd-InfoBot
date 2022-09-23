import Nav from "../src/components/nav";
import Hero from "./components/hero";
import About from "./components/about";
import Choose from "./components/choose";
import Topics from "./components/topics";
import Updates from "./components/updates";
import Contact from "./components/contact";
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
      <Contact />
    </div>
  );
}

export default App;

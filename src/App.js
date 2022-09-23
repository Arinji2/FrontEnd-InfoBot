import Nav from "../src/components/nav";
import Home from "./pages/home";
import Team from "./pages/team";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="bg-black">
      <Nav />
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/team" element={<Team />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

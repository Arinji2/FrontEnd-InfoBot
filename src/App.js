import Nav from "../src/components/nav";
import Home from "./pages/home";
import Team from "./pages/team";
import Register from "./pages/register";
import Login from "./pages/login";
import Verify from "./pages/verify";
import Dashboard from "./pages/dashboard";
import Pto from "./pages/pto";
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
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/verify" element={<Verify />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/pto" element={<Pto />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

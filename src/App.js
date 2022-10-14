import Nav from "../src/components/nav";
import Home from "./pages/home";
import Team from "./pages/team";

import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import PtoSelection from "./pages/pto/ptoSelection";
import Specific from "./pages/pto/specific";
import Account from "./pages/account";
import loop from "./pages/pto/chapters/loops/loopRouter";
import string from "./pages/pto/chapters/string/stringRouter";
import array from "./pages/pto/chapters/arrays/arrayRouter";
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
          <Route path="/login" element={<Login />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/account" element={<Account />}></Route>
          <Route path="/pto" element={<PtoSelection />}></Route>
          <Route path="/specificTest" element={<Specific />}></Route>

          {loop}
          {string}
          {array}
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import React from "react";
import Q1 from "./Questions/Q1";
import Home from "../../../home";
import { Route } from "react-router-dom";

const routes = [
  <Route path="pto/loop/Q1" element={<Q1 />}></Route>,
  <Route path="pto/loop/Q2" element={<Home />}></Route>,
];

export default routes;

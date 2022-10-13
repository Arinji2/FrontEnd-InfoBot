import React from "react";
import Q1 from "./Questions/Q1";
import Q2 from "./Questions/Q2";
import { Route } from "react-router-dom";

const routes = [
  <Route path="pto/loop/Q1" element={<Q1 />}></Route>,
  <Route path="pto/loop/Q2" element={<Q2 />}></Route>,
];

export default routes;

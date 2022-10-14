import React from "react";
import Q1 from "../loops/Questions/Q2";
import Q2 from "../string/Questions/Q1";

import { Route } from "react-router-dom";

const routes = [
  <Route path="pto/Q1" element={<Q1 />}></Route>,
  <Route path="pto/loop/Q2" element={<Q2 />}></Route>,
];

export default routes;

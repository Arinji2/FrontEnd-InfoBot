import React from "react";
import Q1 from "./Questions/Q1";
import Q2 from "./Questions/Q2";
import Q3 from "./Questions/Q3";
import Q4 from "./Questions/Q4";
import Q5 from "./Questions/Q5";

import { Route } from "react-router-dom";

const routes = [
  <Route path="pto/string/Q1" element={<Q1 />}></Route>,
  <Route path="pto/string/Q2" element={<Q2 />}></Route>,
  <Route path="pto/string/Q3" element={<Q3 />}></Route>,
  <Route path="pto/string/Q4" element={<Q4 />}></Route>,
  <Route path="pto/string/Q5" element={<Q5 />}></Route>,
];

export default routes;

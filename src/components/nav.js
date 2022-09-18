import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faCoffee } from "@fortawesome/fontawesome-free-solid";

class Nav extends Component {
  state = {};
  render() {
    return (
      <div>
        <FontAwesomeIcon icon={faCoffee}> </FontAwesomeIcon>
        <h1 className="text-green-500">Bobbie</h1>
      </div>
    );
  }
}

export default Nav;

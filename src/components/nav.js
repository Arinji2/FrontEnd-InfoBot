import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faCoffee } from "@fortawesome/fontawesome-free-solid";
import { TypeAnimation } from "react-type-animation";

class Nav extends Component {
  state = {};
  render() {
    return (
      <div>
        <FontAwesomeIcon icon={faCoffee}> </FontAwesomeIcon>
        <h1 className="text-green-500">Bobbie</h1>
        <TypeAnimation
          sequence={[
            "One", // Types 'One'
            1000, // Waits 1s
            "Two", // Deletes 'One' and types 'Two'
            2000, // Waits 2s
            "Two Three", // Types 'Three' without deleting 'Two'
            () => {
              console.log("Done typing!"); // Place optional callbacks anywhere in the array
            },
          ]}
          wrapper="div"
          cursor={true}
          repeat={Infinity}
          style={{ fontSize: "2em" }}
        />
      </div>
    );
  }
}

export default Nav;

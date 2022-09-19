import React, { Component } from "react";
import HeroPic from "../assets/Hero.jpg";
class Hero extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <p className="p-10"></p>
        <div className="flex flex-col  items-center">
          <img
            src={HeroPic}
            alt={HeroPic}
            className="relative w-screen h-2/3"
          ></img>
        </div>
      </React.Fragment>
    );
  }
}

export default Hero;

import React, { Component } from "react";
import HeroPic from "../assets/banner.jpg";
import { TypeAnimation } from "react-type-animation";
class Hero extends Component {
  state = {};
  handleTopic() {
    let element = document.getElementById("topic");
    element.scrollIntoView({ behavior: "smooth" });
  }
  render() {
    return (
      <React.Fragment>
        <p className="p-10"></p>
        <div className="flex flex-col  items-center w-full h-[35rem] relative">
          <img
            src={HeroPic}
            alt={HeroPic}
            className="absolute w-full h-full blur-sm -z-10"
          ></img>
          <div
            onClick={this.handleTopic}
            className=" absolute bottom-80 md:bottom-80 border-2 border-white w-2/3 text-center p-3 rounded-lg shadow-md shadow-white hover:cursor-pointer hover:shadow-lg hover:shadow-white md:h-auto h-20 transition ease-in-out duration-300"
          >
            <TypeAnimation
              // Same String at the start will only be typed once, initially
              sequence={[
                "",
                1000,
                "How to check for Palindrome Number?",
                1000,
                "How to check for Niven Number?",
                1000,
                "How to trim a String?",
                1000,
                "How to overload a Function?",
                1000,
                "How to create a Constructor?",
                1000,
                "How to do a Binary Search?",
                1000,
              ]}
              speed={20} // Custom Speed from 1-99 - Default Speed: 40
              wrapper="span" // Animation will be rendered as a <span>
              className="text-lg md:text-4xl"
              repeat={Infinity} // Repeat this Animation Sequence infinitely
            />
          </div>
          <p
            onClick={this.handleTopic}
            className="absolute bottom-44 md:bottom-50 text-2xl p-2 border-2 border-white rounded-md  hover:border-blue-500 hover:text-3xl hover:cursor-pointer transition-all ease-in-out duration-300"
          >
            Start {""}
            <span className="text-yellow-500">Searching</span>
          </p>
        </div>
      </React.Fragment>
    );
  }
}

export default Hero;

import React, { Component } from "react";
class Topics extends Component {
  state = {};
  handleTopic(number) {
    switch (number) {
      case 1:
        window.location.href = "chapters/loops/index.html";
        break;
      case 2:
        window.location.href = "chapters/methods/index.html";
        break;
      case 3:
        window.location.href = "chapters/strings/index.html";
        break;
      case 4:
        window.location.href = "chapters/arrays/index.html";
        break;
      case 5:
        window.location.href = "chapters/patterns/index.html";
        break;
      case 6:
        window.location.href = "chapters/classes/index.html";
        break;
      default:
        console.log("Invalid");
    }
  }
  render() {
    return (
      <div id="topic" className="m-5 rounded-lg text-center">
        <p className="p-16"></p>
        <h1 className="text-6xl p-10">
          Choose A {""}
          <span className="text-green-500">Topic</span>
        </h1>
        <div className="flex flex-row items-center  flex-wrap md:max-w-screen gap-10 justify-between md:justify-evenly">
          <div
            onClick={this.handleTopic.bind(this, 1)}
            className="border-4 border-white border-r--500 border-t-green-500 text-xl md:text-2xl max-w-screen md:w-2/6 p-5 hover:border-r-blue-500 hover:border-t-blue-500 hover:text-3xl hover:cursor-pointer  transition-all ease-in-out duration-300 "
          >
            <p className="text-blue-500">Loops</p>
          </div>
          <div
            onClick={this.handleTopic.bind(this, 2)}
            className="border-4 border-white border-r--500 border-t-green-500 text-xl md:text-2xl max-w-screen md:w-2/6 p-5 hover:border-r-blue-500 hover:border-t-blue-500 hover:text-3xl hover:cursor-pointer  transition-all ease-in-out duration-300 "
          >
            <p className="text-blue-500">Patterns</p>
          </div>
        </div>
        <div className="flex flex-row items-center  flex-wrap max-w-screen justify-between pt-6">
          <div
            onClick={this.handleTopic.bind(this, 3)}
            className="border-4 border-white border-r--500 border-t-green-500 text-xl md:text-2xl max-w-screen md:w-2/6 p-5 hover:border-r-blue-500 hover:border-t-blue-500 hover:text-3xl hover:cursor-pointer  transition-all ease-in-out duration-300 "
          >
            <p className="text-blue-500">Series</p>
          </div>
          <div
            onClick={this.handleTopic.bind(this, 4)}
            className="border-4 border-white border-r--500 border-t-green-500 text-lg md:text-2xl max-w-screen md:w-2/6 p-5 hover:border-r-blue-500 hover:border-t-blue-500 hover:text-3xl hover:cursor-pointer  transition-all ease-in-out duration-300 "
          >
            <p className="text-blue-500">Methods</p>
          </div>
        </div>
        <div className="flex flex-row items-center  flex-wrap max-w-screen justify-between pt-6">
          <div
            onClick={this.handleTopic.bind(this, 5)}
            className="border-4 border-white border-r--500 border-t-green-500 text-xl md:text-2xl max-w-screen md:w-2/6 p-5 hover:border-r-blue-500 hover:border-t-blue-500 hover:text-3xl hover:cursor-pointer  transition-all ease-in-out duration-300 "
          >
            <p className="text-blue-500">Arrays</p>
          </div>
          <div
            onClick={this.handleTopic.bind(this, 6)}
            className="border-4 border-white border-r--500 border-t-green-500 text-xl md:text-2xl max-w-screen md:w-2/6 p-5 hover:border-r-blue-500 hover:border-t-blue-500 hover:text-3xl hover:cursor-pointer  transition-all ease-in-out duration-300 "
          >
            <p className="text-blue-500">Classes</p>
          </div>
        </div>
        <div className="flex flex-row items-center  flex-wrap max-w-screen justify-center  pt-6">
          <div
            onClick={this.handleTopic.bind(this, 7)}
            className="border-4 border-white border-r--500 border-t-green-500 text-xl md:text-2xl max-w-screen md:w-2/6 p-5 hover:border-r-blue-500 hover:border-t-blue-500 hover:text-3xl hover:cursor-pointer  transition-all ease-in-out duration-300 "
          >
            <p className="text-blue-500">Strings</p>
          </div>
        </div>
        <p className="p-10"></p>
        <div className="flex justify-center">
          <div className="w-screen border-b-2 border-white"></div>
        </div>
      </div>
    );
  }
}

export default Topics;

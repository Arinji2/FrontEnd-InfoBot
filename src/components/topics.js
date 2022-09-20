import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/fontawesome-free-solid";
class Topics extends Component {
  state = {};
  render() {
    return (
      <div id="topic" className="m-5 rounded-lg text-center">
        <p className="p-16"></p>
        <div className="flex flex-col items-center md:flex-row flex-wrap max-w-screen gap-10 justify-evenly">
          <div className="border-4 border-white border-r-green-500 border-t-green-500 text-2xl max-w-screen md:w-2/6 p-5 hover:border-r-blue-500 hover:border-t-blue-500 hover:text-3xl hover:cursor-pointer  transition-all ease-in-out duration-300 ">
            <span>
              <FontAwesomeIcon className="text-6xl pb-4" icon={faCode} />
            </span>

            <p className="text-blue-500">Loops</p>
            <p>Programs based on Loops</p>
          </div>
          <div className="border-4 border-white border-r-green-500 border-t-green-500 text-2xl max-w-screen md:w-2/6 p-5 hover:border-r-blue-500 hover:border-t-blue-500 hover:text-3xl hover:cursor-pointer  transition-all ease-in-out duration-300 ">
            <span>
              <FontAwesomeIcon className="text-6xl pb-4" icon={faCode} />
            </span>

            <p className="text-blue-500">Patterns</p>
            <p>Programs based on all Patterns</p>
          </div>
        </div>
        <div className="flex flex-col items-center md:flex-row flex-wrap max-w-screen justify-between pt-6">
          <div className="border-4 border-white border-r-green-500 border-t-green-500 text-2xl max-w-screen md:w-2/6 p-5 hover:border-r-blue-500 hover:border-t-blue-500 hover:text-3xl hover:cursor-pointer  transition-all ease-in-out duration-300 ">
            <span>
              <FontAwesomeIcon className="text-6xl pb-4" icon={faCode} />
            </span>

            <p className="text-blue-500">Series</p>
            <p>Programs based on Loop Series</p>
          </div>
          <div className="border-4 border-white border-r-green-500 border-t-green-500 text-2xl max-w-screen md:w-2/6 p-5 hover:border-r-blue-500 hover:border-t-blue-500 hover:text-3xl hover:cursor-pointer  transition-all ease-in-out duration-300 ">
            <span>
              <FontAwesomeIcon className="text-6xl pb-4" icon={faCode} />
            </span>

            <p className="text-blue-500">Methods</p>
            <p>Programs based on Functions</p>
          </div>
        </div>
        <h1 className="text-6xl p-10">
          Choose A {""}
          <span className="text-green-500">Topic</span>
        </h1>
        <div className="flex flex-col items-center md:flex-row flex-wrap max-w-screen justify-between pt-6">
          <div className="border-4 border-white border-r-green-500 border-t-green-500 text-2xl max-w-screen md:w-2/6 p-5 hover:border-r-blue-500 hover:border-t-blue-500 hover:text-3xl hover:cursor-pointer  transition-all ease-in-out duration-300 ">
            <span>
              <FontAwesomeIcon className="text-6xl pb-4" icon={faCode} />
            </span>

            <p className="text-blue-500">Arrays</p>
            <p>Programs based on Arrays</p>
          </div>
          <div className="border-4 border-white border-r-green-500 border-t-green-500 text-2xl max-w-screen md:w-2/6 p-5 hover:border-r-blue-500 hover:border-t-blue-500 hover:text-3xl hover:cursor-pointer  transition-all ease-in-out duration-300 ">
            <span>
              <FontAwesomeIcon className="text-6xl pb-4" icon={faCode} />
            </span>

            <p className="text-blue-500">Classes</p>
            <p>Programs based on Classes</p>
          </div>
        </div>
        <div className="flex flex-col items-center md:flex-row flex-wrap max-w-screen gap-10 justify-evenly pt-6">
          <div className="border-4 border-white border-r-green-500 border-t-green-500 text-2xl max-w-screen md:w-2/6 p-5 hover:border-r-blue-500 hover:border-t-blue-500 hover:text-3xl hover:cursor-pointer  transition-all ease-in-out duration-300 ">
            <span>
              <FontAwesomeIcon className="text-6xl pb-4" icon={faCode} />
            </span>

            <p className="text-blue-500">Strings</p>
            <p>Programs based on Strings</p>
          </div>
          <div className="border-4 border-white border-r-yellow-500 border-t-yellow-500 text-2xl max-w-screen md:w-2/6 p-5 hover:border-r-blue-500 hover:border-t-blue-500 hover:text-3xl hover:cursor-pointer  transition-all ease-in-out duration-300 ">
            <span>
              <FontAwesomeIcon className="text-6xl pb-4" icon={faCode} />
            </span>

            <p className="text-blue-500">Coming Soon!</p>
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

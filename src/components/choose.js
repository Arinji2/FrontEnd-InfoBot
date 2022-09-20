import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faCode,
  faSchool,
  faPhone,
  faWrench,
} from "@fortawesome/fontawesome-free-solid";
class Choose extends Component {
  state = {};
  render() {
    return (
      <div id="chooseUs" className="m-5 rounded-lg text-center">
        <p className="p-16"></p>
        <div className="flex flex-col items-center md:flex-row flex-wrap max-w-screen gap-10 justify-evenly">
          <h1 className="text-6xl md:pr-20">
            Why Choose {""}
            <span className="text-yellow-500">Us</span>
          </h1>
          <div className="border-4 border-white border-r-yellow-500 border-t-yellow-500 text-2xl max-w-screen md:w-2/5 p-5 hover:border-r-blue-500 hover:border-t-blue-500 hover:text-3xl hover:cursor-pointer  transition-all ease-in-out duration-300 ">
            <span>
              <FontAwesomeIcon className="text-6xl pb-4" icon={faCheckCircle} />
            </span>

            <p className="text-blue-500">Checked for Errors</p>
          </div>
          <div className="border-4 border-white border-r-yellow-500 border-t-yellow-500 text-2xl max-w-screen md:w-2/5 p-5 hover:border-r-blue-500 hover:border-t-blue-500 hover:text-3xl hover:cursor-pointer  transition-all ease-in-out duration-300 ">
            <span>
              <FontAwesomeIcon className="text-6xl pb-4" icon={faCode} />
            </span>

            <p className="text-blue-500">Simplistic Syntax</p>
          </div>
          <div className="border-4 border-white border-r-yellow-500 border-t-yellow-500 text-2xl max-w-screen md:w-2/5 p-5 hover:border-r-blue-500 hover:border-t-blue-500 hover:text-3xl hover:cursor-pointer  transition-all ease-in-out duration-300 ">
            <span>
              <FontAwesomeIcon className="text-6xl pb-4" icon={faSchool} />
            </span>

            <p className="text-blue-500">Based on Syllabus</p>
          </div>
          <div className="border-4 border-white border-r-yellow-500 border-t-yellow-500 text-xl md:text-2xl max-w-screen md:w-2/5 p-5 hover:border-r-blue-500 hover:border-t-blue-500 hover:text-3xl  hover:cursor-pointer transition-all ease-in-out duration-300  ">
            <span>
              <FontAwesomeIcon className="text-6xl pb-4" icon={faPhone} />
            </span>

            <p className="text-blue-500">Immediate Responses </p>
          </div>
          <div className="border-4 border-white border-r-yellow-500 border-t-yellow-500 text-2xl max-w-screen md:w-2/5 p-5 hover:border-r-blue-500 hover:border-t-blue-500 hover:text-3xl hover:cursor-pointer  transition-all ease-in-out duration-300 ">
            <span>
              <FontAwesomeIcon className="text-6xl pb-4" icon={faWrench} />
            </span>

            <p className="text-blue-500">Constant Updates</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Choose;

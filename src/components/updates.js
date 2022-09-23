import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class Updates extends Component {
  state = {};
  render() {
    return (
      <div id="update" className="m-2 md:m-5 rounded-lg text-center">
        <p className="p-16"></p>
        <h1 className="text-6xl pb-10">
          Choose an <span className="text-yellow-500">Update List</span>
        </h1>
        <div className="flex flex-row max-w-screen gap-2 md:gap-5 flex-wrap md:flex-nowrap justify-evenly">
          <div className="w-2/6 h-2/6 break-words text-center rounded-lg p-2 hover:shadow-xl hover:shadow-blue-500 hover:cursor-pointer">
            <h1 className="text-2xl md:text-3xl text-yellow-500 border-b-2 border-white pb-2">
              UI Updates
            </h1>
            <p className="md:pb-4"></p>

            <p className="text-xl hidden md:block">
              All the <span className="text-yellow-500">New Ui Updates</span>{" "}
              made to the Site
            </p>
            <p className="text-lg hidden md:block">
              Click to Continue{" "}
              <span>
                <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
              </span>
            </p>
          </div>
          <div className="w-2/6 h-2/6 s break-words text-center rounded-lg p-2 hover:shadow-xl hover:shadow-blue-500 hover:cursor-pointer">
            <h1 className="text-2xl md:text-3xl text-yellow-500 border-b-2 border-white pb-2">
              Main Updates
            </h1>
            <p className="md:pb-4"></p>

            <p className="text-xl hidden md:block">
              All the <span className="text-yellow-500">New Updates</span> made
              to the Site
            </p>
            <p className="text-lg hidden md:block">
              Click to Continue{" "}
              <span>
                <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
              </span>
            </p>
          </div>
          <div className="w-2/6 h-2/6 break-words text-center rounded-lg p-2 hover:shadow-xl hover:shadow-blue-500 hover:cursor-pointer">
            <h1 className="text-2xl md:text-3xl text-yellow-500 border-b-2 border-white pb-2">
              Article Updates
            </h1>
            <p className="md:pb-4"></p>

            <p className="text-xl hidden md:block">
              All the <span className="text-yellow-500">New Articles</span>{" "}
              added to the Site
            </p>
            <p className="text-lg hidden md:block">
              Click to Continue{" "}
              <span>
                <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
              </span>
            </p>
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

export default Updates;

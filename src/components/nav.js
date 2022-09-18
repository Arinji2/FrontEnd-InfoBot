import { faBars } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
class Nav extends Component {
  state = {};
  handleBurgerClick() {
    let menu = document.getElementById("mobile-menu");
    let button = document.getElementById("burger-button");
    if (menu.style.display !== "flex") menu.style.display = "flex";
    else menu.style.display = "none";
    button.classList.toggle("fa-rotate-90");
  }
  render() {
    return (
      <React.Fragment>
        <div id="top"></div>
        <div className="flex flex-row border-b-white border-b-2 rounded text-3xl pt-5 justify-between sticky top-0 z-50 bg-black-950 ">
          <p className="pl-6">
            InfoBot<span className="text-yellow-500">.</span>
            <span className="absolute right-3 md:invisible">
              <FontAwesomeIcon
                icon={faBars}
                onClick={this.handleBurgerClick}
                id="burger-button"
              ></FontAwesomeIcon>
            </span>
          </p>
          <p className="pr-24"></p>
        </div>
        <div
          id="mobile-menu"
          className="hidden md:flex flex-col w-2/5 h-screen md:h-20 justify-evenly md:w-screen md:flex-row border-b-2 border-white rounded text-lg md:pt-5 md:pb-3 md:justify-around md:sticky top-0 z-50 bg-black-950 hover:cursor-pointer "
        >
          <p className="p-2 shadow-lg shadow-white rounded hover:shadow-lg hover:shadow-yellow-500 hover:border-0 hover:rounded bg-black-950">
            About {""}
            <span className="text-yellow-500">Us</span>
          </p>
          <p className="p-2 shadow-lg shadow-white rounded hover:shadow-lg hover:shadow-yellow-500 hover:border-0 hover:rounded bg-black-950">
            Choose a {""}
            <span className="text-yellow-500">Topic</span>
          </p>
          <p className="p-2 shadow-lg shadow-white rounded hover:shadow-lg hover:shadow-yellow-500 hover:border-0 hover:rounded bg-black-950">
            New {""}
            <span className="text-yellow-500">Updates</span>
          </p>
          <p className="p-2 shadow-lg shadow-white rounded hover:shadow-lg hover:shadow-yellow-500 hover:border-0 hover:rounded bg-black-950">
            Meet the {""}
            <span className="text-yellow-500">Team</span>
          </p>
          <p className="p-2 shadow-lg shadow-white rounded hover:shadow-lg hover:shadow-yellow-500 hover:border-0 hover:rounded bg-black-950">
            Contact {""}
            <span className="text-yellow-500">Us</span>
          </p>
        </div>
      </React.Fragment>
    );
  }
}

export default Nav;

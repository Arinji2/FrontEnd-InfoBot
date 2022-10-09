import { faBars } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter as Router, Link } from "react-router-dom";
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
  handleAbout() {
    if (window.location.href !== "https://www.infobot.uk/")
      window.location.assign("/");
    let element = document.getElementById("aboutUs");
    element.scrollIntoView({ behavior: "smooth" });
  }
  handleChoose() {
    if (window.location.href !== "https://www.infobot.uk/")
      window.location.assign("/");
    let element = document.getElementById("chooseUs");
    element.scrollIntoView({ behavior: "smooth" });
  }
  handleTopic() {
    if (window.location.href !== "https://www.infobot.uk/") {
      window.location.assign("/");
    }
    let element = document.getElementById("topic");
    element.scrollIntoView({ behavior: "smooth" });
  }
  handleTeam() {
    window.location.assign("/Team");
  }
  handleContact() {
    if (window.location.href !== "https://www.infobot.uk/")
      window.location.assign("/");
    let element = document.getElementById("contact");
    element.scrollIntoView({ behavior: "smooth" });
  }
  handleLogin() {
    window.location.assign("/login");
  }
  render() {
    return (
      <React.Fragment>
        <div id="top"></div>
        <div className="flex flex-row rounded text-3xl pt-5 justify-between sticky top-0 z-50 bg-black-950 pb-2">
          <p className="pl-6 hover:cursor-pointer">
            <p
              onClick={() => {
                window.location.assign("/");
              }}
            >
              InfoBot<span className="text-yellow-500">.</span>
            </p>

            <p className="absolute right-3 top-5 md:invisible">
              <FontAwesomeIcon
                icon={faBars}
                onClick={this.handleBurgerClick}
                id="burger-button"
              ></FontAwesomeIcon>
            </p>
          </p>
          <p className="pr-24"></p>
        </div>
        <div
          id="mobile-menu"
          className="hidden fixed md:flex flex-col min-w-screen h-30 md:h-20 justify-start gap-10 md:gap-0  md:flex-row border-t-2  border-b-2 border-white rounded text-lg md:pt-5 md:pb-3 md:justify-around md:sticky top-16 z-50 bg-black-950 hover:cursor-pointer overflow-hidden"
        >
          <p
            onClick={this.handleAbout}
            className="p-2 rounded hover:border-b-2 border-transparent hover:border-blue-500 transition-all ease-in-out duration-300 bg-black-950"
          >
            About {""}
            <span className="text-yellow-500">Us</span>
          </p>
          <p
            onClick={this.handleChoose}
            className="p-2 rounded hover:border-b-2 border-transparent hover:border-blue-500 transition-all ease-in-out duration-300 bg-black-950"
          >
            Why {""}
            <span className="text-yellow-500">Us</span>
          </p>
          <p
            onClick={this.handleTopic}
            className="p-2 rounded hover:border-b-2 border-transparent hover:border-blue-500 transition-all ease-in-out duration-300 bg-black-950"
          >
            Choose a {""}
            <span className="text-yellow-500">Topic</span>
          </p>

          <Router>
            <Link to="/Team" onClick={this.handleTeam}>
              <p className="p-2 rounded hover:border-b-2 border-transparent hover:border-blue-500 transition-all ease-in-out duration-300 bg-black-950">
                Meet the {""}
                <span className="text-yellow-500">Team</span>
              </p>
            </Link>
          </Router>

          <Router>
            <Link to="/login" onClick={this.handleLogin}>
              <p className="p-2 rounded hover:border-b-2 border-transparent hover:border-blue-500 transition-all ease-in-out duration-300 bg-black-950 text-yellow-500">
                Login
              </p>
            </Link>
          </Router>

          <p
            onClick={this.handleContact}
            className="p-2 rounded hover:border-b-2 border-transparent hover:border-blue-500 transition-all ease-in-out duration-300 bg-black-950"
          >
            Contact {""}
            <span className="text-yellow-500">Us</span>
          </p>
        </div>
      </React.Fragment>
    );
  }
}

export default Nav;

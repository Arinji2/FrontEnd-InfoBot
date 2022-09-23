import React, { Component } from "react";
import HeroPic from "../assets/banner.jpg";
import { TypeAnimation } from "react-type-animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faCode,
  faSchool,
  faPhone,
  faWrench,
} from "@fortawesome/fontawesome-free-solid";
class Home extends Component {
  state = {};
  handleTopicScroll() {
    let element = document.getElementById("topic");
    element.scrollIntoView({ behavior: "smooth" });
  }
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
      <React.Fragment>
        <p className="p-10"></p>
        <div className="flex flex-col  items-center w-full h-[35rem] relative">
          <img
            src={HeroPic}
            alt={HeroPic}
            className="absolute w-full h-full blur-sm -z-10"
          ></img>
          <div
            onClick={this.handleTopicScroll}
            className=" absolute bottom-80 md:bottom-80 border-2 border-white w-2/3 text-center p-3 rounded-lg shadow-md shadow-white hover:cursor-pointer hover:shadow-lg hover:shadow-white md:h-auto h-20 transition ease-in-out duration-300"
          >
            <TypeAnimation
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
              speed={20}
              wrapper="span"
              className="text-lg md:text-4xl"
              repeat={Infinity}
            />
          </div>
          <p
            onClick={this.handleTopicScroll}
            className="absolute bottom-44 md:bottom-50 text-2xl p-2 border-2 border-white rounded-md  hover:border-blue-500 hover:text-3xl hover:cursor-pointer transition-all ease-in-out duration-300"
          >
            Start {""}
            <span className="text-yellow-500">Searching</span>
          </p>
        </div>
        <div id="aboutUs" className="m-5 rounded-lg text-center">
          <p className="pt-20"></p>
          <h1 className="text-6xl ">
            What is the <span className="text-yellow-500">InfoBot</span>
          </h1>
          <div className="flex md:flex-row flex-col justify-evenly md:gap-0 gap-10 pt-10">
            <div className="transition-all ease-in-out duration-300  text-lg shadow-md shadow-white p-3 rounded-lg max-w-md hover:shadow-xl hover:shadow-blue-500 hover:cursor-pointer">
              <p>
                The InfoBot is a system, containing Programs called{" "}
                <span className="text-blue-500">Articles</span>.
              </p>
            </div>
            <div className="transition-all ease-in-out duration-300  text-lg shadow-md shadow-white p-3 rounded-lg max-w-md hover:shadow-xl hover:shadow-blue-500 hover:cursor-pointer">
              <p>
                Each Article is{" "}
                <span className="text-blue-500">
                  Written , Checked and Segregated
                </span>{" "}
                by Us, following School Practices.
              </p>
            </div>
            <div className="transition-all ease-in-out duration-300  text-lg shadow-md shadow-white p-3 rounded-lg max-w-md hover:shadow-xl hover:shadow-blue-500 hover:cursor-pointer">
              <p>
                Simply choose a {""}
                <span className="text-blue-500">Topic</span>, type a {""}
                <span className="text-blue-500">Question</span>
                {""} and watch the InfoBot do its magic.
              </p>
            </div>
          </div>
          <p className="p-10"></p>
          <div className="flex justify-center">
            <div className="w-screen border-b-2 border-white"></div>
          </div>
        </div>

        <div id="chooseUs" className="m-5 rounded-lg text-center">
          <p className="p-16"></p>
          <div className="flex flex-col items-center md:flex-row flex-wrap max-w-screen gap-10 justify-evenly">
            <h1 className="text-6xl md:pr-32">
              Why Choose {""}
              <span className="text-yellow-500">Us</span>
            </h1>
            <div className="border-4 border-white border-r-yellow-500 border-t-yellow-500 text-2xl max-w-screen md:w-2/5 p-5 hover:border-r-blue-500 hover:border-t-blue-500 hover:text-3xl hover:cursor-pointer  transition-all ease-in-out duration-300 ">
              <span>
                <FontAwesomeIcon
                  className="text-6xl pb-4"
                  icon={faCheckCircle}
                />
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
          <p className="p-10"></p>
          <div className="flex justify-center">
            <div className="w-screen border-b-2 border-white"></div>
          </div>
        </div>
        <div id="topic" className="m-5 rounded-lg text-center">
          <p className="p-16"></p>
          <h1 className="text-6xl p-10">
            Choose A {""}
            <span className="text-yellow-500">Topic</span>
          </h1>
          <div className="flex flex-row items-center  flex-wrap md:max-w-screen gap-10 justify-between md:justify-evenly">
            <div
              onClick={this.handleTopic.bind(this, 1)}
              className="border-4 border-white border-r--500 border-t-yellow-500 text-xl md:text-2xl max-w-screen md:w-2/6 p-5 hover:border-r-blue-500 hover:border-t-blue-500 hover:text-3xl hover:cursor-pointer  transition-all ease-in-out duration-300 "
            >
              <p className="text-blue-500">Loops</p>
            </div>
            <div
              onClick={this.handleTopic.bind(this, 2)}
              className="border-4 border-white border-r--500 border-t-yellow-500 text-xl md:text-2xl max-w-screen md:w-2/6 p-5 hover:border-r-blue-500 hover:border-t-blue-500 hover:text-3xl hover:cursor-pointer  transition-all ease-in-out duration-300 "
            >
              <p className="text-blue-500">Patterns</p>
            </div>
          </div>
          <div className="flex flex-row items-center  flex-wrap max-w-screen justify-between pt-6">
            <div
              onClick={this.handleTopic.bind(this, 3)}
              className="border-4 border-white border-r--500 border-t-yellow-500 text-xl md:text-2xl max-w-screen md:w-2/6 p-5 hover:border-r-blue-500 hover:border-t-blue-500 hover:text-3xl hover:cursor-pointer  transition-all ease-in-out duration-300 "
            >
              <p className="text-blue-500">Series</p>
            </div>
            <div
              onClick={this.handleTopic.bind(this, 4)}
              className="border-4 border-white border-r--500 border-t-yellow-500 text-lg md:text-2xl max-w-screen md:w-2/6 p-5 hover:border-r-blue-500 hover:border-t-blue-500 hover:text-3xl hover:cursor-pointer  transition-all ease-in-out duration-300 "
            >
              <p className="text-blue-500">Methods</p>
            </div>
          </div>
          <div className="flex flex-row items-center  flex-wrap max-w-screen justify-between pt-6">
            <div
              onClick={this.handleTopic.bind(this, 5)}
              className="border-4 border-white border-r--500 border-t-yellow-500 text-xl md:text-2xl max-w-screen md:w-2/6 p-5 hover:border-r-blue-500 hover:border-t-blue-500 hover:text-3xl hover:cursor-pointer  transition-all ease-in-out duration-300 "
            >
              <p className="text-blue-500">Arrays</p>
            </div>
            <div
              onClick={this.handleTopic.bind(this, 6)}
              className="border-4 border-white border-r--500 border-t-yellow-500 text-xl md:text-2xl max-w-screen md:w-2/6 p-5 hover:border-r-blue-500 hover:border-t-blue-500 hover:text-3xl hover:cursor-pointer  transition-all ease-in-out duration-300 "
            >
              <p className="text-blue-500">Classes</p>
            </div>
          </div>
          <div className="flex flex-row items-center  flex-wrap max-w-screen justify-center  pt-6">
            <div
              onClick={this.handleTopic.bind(this, 7)}
              className="border-4 border-white border-r--500 border-t-yellow-500 text-xl md:text-2xl max-w-screen md:w-2/6 p-5 hover:border-r-blue-500 hover:border-t-blue-500 hover:text-3xl hover:cursor-pointer  transition-all ease-in-out duration-300 "
            >
              <p className="text-blue-500">Strings</p>
            </div>
          </div>
          <p className="p-10"></p>
          <div className="flex justify-center">
            <div className="w-screen border-b-2 border-white"></div>
          </div>
        </div>
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
                All the <span className="text-yellow-500">New Updates</span>{" "}
                made to the Site
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
        <div id="contact" className="m-2 md:m-5 rounded-lg text-center">
          <p className="p-16"></p>
          <h1 className="text-6xl pb-10">
            Contact <span className="text-yellow-500">Us</span>
          </h1>
          <div className="text-xl">
            <p>
              We at InfoBot value communication to be of{" "}
              <span className="text-yellow-500">Upmost Importance</span>.
            </p>
            <p>
              Current Response Times:{" "}
              <span className="italic text-yellow-500">1-2 Days</span>
            </p>
          </div>
          <p className="p-10"></p>
          <div className="flex flex-row justify-evenly flex-wrap gap-5 md:gap-0">
            <a
              className="text-yellow-500 text-xl shadow-md shadow-white p-4 rounded-lg hover:shadow-lg hover:shadow-white hover:cursor-pointer"
              href="mailto:info@infobot.uk"
            >
              info@infobot.uk
            </a>
            <a
              className="text-yellow-500 text-xl shadow-md shadow-white p-4 rounded-lg hover:shadow-lg hover:shadow-white hover:cursor-pointer"
              href="mailto:support@infobot.uk"
            >
              support@infobot.uk
            </a>
            <a
              className="text-yellow-500 text-xl shadow-md shadow-white p-4 rounded-lg hover:shadow-lg hover:shadow-white hover:cursor-pointer"
              href="mailto:jobs@infobot.uk"
            >
              jobs@infobot.uk
            </a>
          </div>
          <p className="p-10"></p>
          <div className="flex justify-center">
            <div className="w-screen border-b-2 border-white"></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;

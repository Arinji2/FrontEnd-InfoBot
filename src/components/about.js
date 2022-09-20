import React, { Component } from "react";
class About extends Component {
  state = {};
  render() {
    return (
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
        <p className="p-20"></p>
      </div>
    );
  }
}

export default About;

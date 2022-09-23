import React, { Component } from "react";

class Contact extends Component {
  state = {};
  render() {
    return (
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
    );
  }
}

export default Contact;

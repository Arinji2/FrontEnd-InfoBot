import React, { useEffect } from "react";
import { auth } from "../../firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faArrowAltCircleLeft,
} from "@fortawesome/free-solid-svg-icons";
import loopRoutes from "../pto/chapters/loops/loopRouter";
import functionRoutes from "../pto/chapters/functions/functionRouter";
import stringRoutes from "../pto/chapters/string/stringRouter";
import arrayRoutes from "../pto/chapters/arrays/arrayRouter";
function Specific() {
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser.emailVerified !== true)
        window.location.replace("/verify");
    });
  });
  return (
    <div>
      <h1 className="pt-20 text-center text-4xl text-yellow-400">
        Specific Tests
      </h1>
      <div className="pt-20 flex flex-row flex-wrap justify-evenly ">
        <div
          className="text-center bg-black-950 scale-90 hover:scale-100 p-3 rounded-lg transition-all ease-in-out duration-300 hover:cursor-pointer"
          onClick={() => {
            window.location.assign(
              loopRoutes[Math.floor(Math.random() * loopRoutes.length)].props
                .path
            );
          }}
        >
          <h2 className="text-3xl text-yellow-400">Loops</h2>
          <p className="text-2xl">Practice Loop based Pto's</p>
          <p className="mt-5 border-2 border-green-500 p-2 rounded-lg bg-green-500 hover:border-green-600 hover:bg-green-600 hover:shadow-sm hover:shadow-white hover:cursor-pointer transition-all ease-in-out duration-200">
            <FontAwesomeIcon icon={faCheckCircle} className="text-2xl" />
          </p>
        </div>
        <div
          className="text-center bg-black-950 scale-90 hover:scale-100 p-3 rounded-lg transition-all ease-in-out duration-300 hover:cursor-pointer"
          onClick={() => {
            window.location.assign(
              functionRoutes[Math.floor(Math.random() * functionRoutes.length)]
                .props.path
            );
          }}
        >
          <h2 className="text-3xl text-yellow-400">Functions</h2>
          <p className="text-2xl">Practice Function based Pto's</p>
          <p className="mt-5 border-2 border-green-500 p-2 rounded-lg bg-green-500 hover:border-green-600 hover:bg-green-600 hover:shadow-sm hover:shadow-white hover:cursor-pointer transition-all ease-in-out duration-200">
            <FontAwesomeIcon icon={faCheckCircle} className="text-2xl" />
          </p>
        </div>
        <div
          className="text-center bg-black-950 scale-90 hover:scale-100 p-3 rounded-lg transition-all ease-in-out duration-300 hover:cursor-pointer"
          onClick={() => {
            window.location.assign(
              stringRoutes[Math.floor(Math.random() * stringRoutes.length)]
                .props.path
            );
          }}
        >
          <h2 className="text-3xl text-yellow-400">Strings</h2>
          <p className="text-2xl">Practice String based Pto's</p>
          <p className="mt-5 border-2 border-green-500 p-2 rounded-lg bg-green-500 hover:border-green-600 hover:bg-green-600 hover:shadow-sm hover:shadow-white hover:cursor-pointer transition-all ease-in-out duration-200">
            <FontAwesomeIcon icon={faCheckCircle} className="text-2xl" />
          </p>
        </div>
        <div
          className="text-center bg-black-950 scale-90 hover:scale-100 p-3 rounded-lg transition-all ease-in-out duration-300 hover:cursor-pointer"
          onClick={() => {
            window.location.assign(
              arrayRoutes[Math.floor(Math.random() * arrayRoutes.length)].props
                .path
            );
          }}
        >
          <h2 className="text-3xl text-yellow-400">Arrays</h2>
          <p className="text-2xl">Practice Array based Pto's</p>
          <p className="mt-5 border-2 border-green-500 p-2 rounded-lg bg-green-500 hover:border-green-600 hover:bg-green-600 hover:shadow-sm hover:shadow-white hover:cursor-pointer transition-all ease-in-out duration-200">
            <FontAwesomeIcon icon={faCheckCircle} className="text-2xl" />
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <p
          className="mt-10 border-2 text-2xl border-yellow-500 p-2 rounded-lg bg-yellow-500 hover:border-yellow-600 hover:bg-yellow-600 hover:shadow-sm hover:shadow-white hover:cursor-pointer transition-all ease-in-out duration-200 mb-5"
          onClick={() => {
            window.location.assign("/pto");
          }}
        >
          Back to Selection <FontAwesomeIcon icon={faArrowAltCircleLeft} />
        </p>
      </div>
    </div>
  );
}

export default Specific;

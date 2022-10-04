import React, { useState, useEffect } from "react";
import { auth } from "../firebase-config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/fontawesome-free-solid";
import { BrowserRouter as Router, Navigate } from "react-router-dom";

function Register() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [user, setUser] = useState({});
  const [status, setStatus] = useState("");

  useEffect(() =>
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    })
  );

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );

      setStatus("Loading...");
      setTimeout(() => {
        setStatus("Welcome");
        window.location.replace("/");
      }, 2000);
    } catch (error) {
      if (error.code === "auth/invalid-email")
        setStatus("Invalid Email, Please try again!");
      else if (error.code === "auth/weak-password")
        setStatus("Weak Password, Please try again");
      else if (error.code === "auth/email-already-in-use")
        setStatus("Email Already In Use, Please try again!");
      else if (error.code === "auth/internal-error")
        setStatus("Internal Error, Please try again later!");
      else console.log(error.code);
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center pt-20 m-4">
        <div className=" flex flex-col items-center">
          <h1 className="text-4xl text-yellow-400">Register User</h1>
          <div className="flex flex-row gap-5 pt-5">
            <input
              className="text-md hover:border-4 hover:border-yellow-400 focus:outline-none focus:border-4 focus:border-yellow-400 rounded-lg w-2/3 text-black-950 transition-all ease-in-out duration-300 p-3 hover:cursor-pointer"
              placeholder="Email..."
              onChange={(event) => {
                setRegisterEmail(event.target.value);
              }}
            ></input>
            <input
              className="text-md hover:border-4 hover:border-yellow-400 focus:outline-none focus:border-4 focus:border-yellow-400 rounded-lg w-2/3 text-black-950 transition-all ease-in-out duration-300 p-3 hover:cursor-pointer"
              placeholder="Password..."
              onChange={(event) => {
                setRegisterPassword(event.target.value);
              }}
            ></input>
          </div>
          <button
            className="mt-10 bg-white hover:bg-green-500  text-black-950 rounded-lg p-3 transition-all ease-in-out duration-300"
            onClick={register}
          >
            Register User <FontAwesomeIcon icon={faCheckCircle} />
          </button>
          <h1 className="pt-10 text-2xl text-center">
            Status: <span className="text-yellow-400">{status}</span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Register;

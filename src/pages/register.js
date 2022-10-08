import React, { useState, useEffect } from "react";
import { auth } from "../firebase-config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/fontawesome-free-solid";

function Register() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [userName, setUserName] = useState("");
  // eslint-disable-next-line
  const [user, setUser] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() =>
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    })
  );
  const register = () => {
    createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
      .then(() => {
        updateProfile(auth.currentUser, { displayName: userName });
        window.location.replace("/verify");
      })
      .catch((error) => {
        if (error.code === "auth/invalid-email")
          setStatus("Invalid Email, Please try again!");
        else if (error.code === "auth/weak-password")
          setStatus("Weak Password, Please try again");
        else if (error.code === "auth/email-already-in-use")
          setStatus("Email Already In Use, Please try again!");
        else if (error.code === "auth/internal-error")
          setStatus("Internal Error, Please try again later!");
        else console.log(error.code);
      });
  };
  const login = () => {
    window.location.replace("/login");
  };

  return (
    <div>
      <div className="flex flex-col items-center pt-20 m-4">
        <div className=" flex flex-col items-center">
          <h1 className="text-4xl text-yellow-400">Register User</h1>
          <div className="flex flex-row flex-wrap justify-center gap-5 pt-5 items-baseline">
            <input
              className="text-md hover:shadow-md  hover:shadow-yellow-400 focus:outline-none  focus:shadow-yellow-400 rounded-lg w-2/5 text-black-950 transition-all ease-in-out duration-300 p-3 hover:cursor-pointer scale-90 hover:scale-100 focus:scale-100 align-top"
              placeholder="Username..."
              onChange={(event) => {
                event.target.value = event.target.value.trim();
                setUserName(event.target.value);
              }}
            ></input>
            <input
              className="text-md hover:shadow-md  hover:shadow-yellow-400 focus:outline-none  focus:shadow-yellow-400 rounded-lg w-2/5 text-black-950 transition-all ease-in-out duration-300 p-3 hover:cursor-pointer scale-90 hover:scale-100 focus:scale-100 align-top"
              placeholder="Email..."
              onChange={(event) => {
                event.target.value = event.target.value.trim().toLowerCase();
                setRegisterEmail(event.target.value);
              }}
            ></input>
            <input
              className="text-md hover:shadow-md  hover:shadow-yellow-400 focus:outline-none  focus:shadow-yellow-400 rounded-lg w-2/5 text-black-950 transition-all ease-in-out duration-300 p-3 hover:cursor-pointer scale-90 hover:scale-100 focus:scale-100 align-top"
              placeholder="Password..."
              onChange={(event) => {
                event.target.value = event.target.value.trim().toLowerCase();

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
          <div
            className="pt-10 text-2xl text-center text-yellow-400 hover:cursor-pointer"
            onClick={login}
          >
            Login Instead
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;

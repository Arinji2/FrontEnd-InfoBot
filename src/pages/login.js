import React, { useState, useEffect } from "react";
import { auth } from "../firebase-config";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/fontawesome-free-solid";

function Login() {
  const [loginEmail, setLoginEmail] = useState("");

  const [loginPassword, setLoginPassword] = useState("");
  // eslint-disable-next-line
  const [user, setUser] = useState({});
  const [status, setStatus] = useState("");

  useEffect(() =>
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    })
  );

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      setStatus("Welcome Back");
      window.location.replace("/dashboard");
    } catch (error) {
      if (error.code === "auth/invalid-email")
        setStatus("Invalid Email, Please try again!");
      else if (error.code === "auth/wrong-password")
        setStatus("Wrong Password, Please try again");
      else if (error.code === "auth/internal-error")
        setStatus("Internal Error, Please try again later!");
      else setStatus("Unknown Error, Mail Us for Assistance");
    }
  };
  const register = () => {
    window.location.replace("/register");
  };

  return (
    <div>
      <div className="flex flex-col items-center pt-20 m-4">
        <div className=" flex flex-col items-center">
          <h1 className="text-4xl text-yellow-400">Login User</h1>
          <div className="flex flex-row gap-5 pt-5">
            <input
              className="text-md hover:border-4 hover:border-yellow-400 focus:outline-none focus:border-4 focus:border-yellow-400 rounded-lg w-2/3 text-black-950 transition-all ease-in-out duration-300 p-3 hover:cursor-pointer"
              placeholder="Email..."
              onChange={(event) => {
                setLoginEmail(event.target.value);
              }}
            ></input>
            <input
              className="text-md hover:border-4 hover:border-yellow-400 focus:outline-none focus:border-4 focus:border-yellow-400 rounded-lg w-2/3 text-black-950 transition-all ease-in-out duration-300 p-3 hover:cursor-pointer"
              placeholder="Password..."
              onChange={(event) => {
                setLoginPassword(event.target.value);
              }}
            ></input>
          </div>
          <button
            className="mt-10 bg-white hover:bg-green-500  text-black-950 rounded-lg p-3 transition-all ease-in-out duration-300"
            onClick={login}
          >
            Login User <FontAwesomeIcon icon={faCheckCircle} />
          </button>
          <h1 className="pt-10 text-2xl text-center">
            Status: <span className="text-yellow-400">{status}</span>
          </h1>
          <div
            className="pt-10 text-2xl text-center text-yellow-400 hover:cursor-pointer"
            onClick={register}
          >
            Register Instead
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

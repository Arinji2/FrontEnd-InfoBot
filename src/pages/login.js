import React, { useState, useEffect } from "react";
import { auth } from "../firebase-config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

function Login() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState({});

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
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };
  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div>
      <div className="flex flex-col items-center pt-20">
        <div className=" flex flex-col items-center">
          <h1 className="text-4xl">Register User</h1>
          <div className="flex flex-row gap-5 pt-5">
            <input
              className="rounded-lg w-2/3 scale-75 hover:scale-100 focus:scale-100 text-black-950 transition-all ease-in-out duration-300 p-3 hover:cursor-pointer"
              placeholder="Email..."
              onChange={(event) => {
                setRegisterEmail(event.target.value);
                console.log(user);
              }}
            ></input>
            <input
              className="rounded-lg w-2/3 scale-75 hover:scale-100 focus:scale-100 text-black-950 transition-all ease-in-out duration-300 p-3 hover:cursor-pointer"
              placeholder="Password..."
              onChange={(event) => {
                setRegisterPassword(event.target.value);
              }}
            ></input>
          </div>
          <button
            className="bg-white hover:shadow-md hover:shadow-white  text-black-950 rounded-lg p-3 transition-all ease-in-out duration-300"
            onClick={register}
          >
            Create User
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center pt-20">
        <div className=" flex flex-col items-center">
          <h1 className="text-4xl">Login User</h1>
          <div className="flex flex-row gap-5 pt-5">
            <input
              className="rounded-lg w-2/3 scale-75 hover:scale-100 focus:scale-100 text-black-950 transition-all ease-in-out duration-300 p-3 hover:cursor-pointer"
              placeholder="Email..."
              onChange={(event) => {
                setLoginEmail(event.target.value);
              }}
            ></input>
            <input
              className="rounded-lg w-2/3 scale-75 hover:scale-100 focus:scale-100 text-black-950 transition-all ease-in-out duration-300 p-3 hover:cursor-pointer"
              placeholder="Password..."
              onChange={(event) => {
                setLoginPassword(event.target.value);
              }}
            ></input>
          </div>
          <button
            className="bg-white hover:shadow-md hover:shadow-white  text-black-950 rounded-lg p-3 transition-all ease-in-out duration-300"
            onClick={login}
          >
            Login User
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center pt-10">
        <h1>User Currently: {user?.email}</h1>
        <button
          className="bg-white hover:shadow-md hover:shadow-white  text-black-950 rounded-lg p-3 transition-all ease-in-out duration-300"
          onClick={logout}
        >
          SignOut
        </button>
      </div>
    </div>
  );
}

export default Login;

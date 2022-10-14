import React from "react";
import { useEffect, useState } from "react";
import { auth } from "../firebase-config";
import {
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { ThreeCircles } from "react-loader-spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

function Verify() {
  const [counter, setCounter] = useState(0);
  const [userTrue, setUserTrue] = useState(false);
  const loginwithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then(() => {
        console.log(auth.currentUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserTrue(true);
        setTimeout(() => {
          window.location.assign("/dashboard");
        }, 2000);
      }
    });
  });
  const loaderChoice = (choice) => {
    if (choice === 1) return <ThreeCircles color="yellow" />;
  };
  return (
    <div className="flex flex-col items-center justify-center m-2">
      <p className="p-10"></p>
      <h1 className="text-yellow-400 font-bold text-5xl text-center">
        Login to your Account
      </h1>
      <button
        className="mt-10 text-2xl  bg-white scale-90 hover:scale-100 hover:bg-yellow-400  text-black-950 rounded-lg p-3 transition-all ease-in-out duration-300"
        onClick={loginwithGoogle}
      >
        <FontAwesomeIcon icon={faGoogle} className="" /> Login with Google
      </button>
      <p className="p-10"></p>
      {userTrue === true ? loaderChoice(1) : loaderChoice(0)}
    </div>
  );
}

export default Verify;

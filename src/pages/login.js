import React, { useState } from "react";
import { auth } from "../firebase-config";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import firebaseui from "firebaseui";
function Login() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const loginwithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then(() => {
        window.location.assign("/dashboard");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="flex flex-col items-center pt-20 m-4">
        <div className=" flex flex-col items-center">
          <h1 className="text-4xl text-yellow-400">Login User</h1>

          <button
            className="mt-10 bg-white hover:bg-green-500  text-black-950 rounded-lg p-3 transition-all ease-in-out duration-300"
            onClick={loginwithGoogle}
          >
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;

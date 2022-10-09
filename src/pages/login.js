import React from "react";
import { auth } from "../firebase-config";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
function Login() {
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
          <h1 className="text-4xl text-yellow-400">Continue to Your Account</h1>

          <button
            className="mt-10 text-2xl bg-white hover:bg-green-500  text-black-950 rounded-lg p-3 transition-all ease-in-out duration-300"
            onClick={loginwithGoogle}
          >
            <FontAwesomeIcon icon={faGoogle} className="" /> <br></br>
            Login with Google{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;

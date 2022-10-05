import React, { useState, useEffect } from "react";
import { auth } from "../firebase-config";
// eslint-disable-next-line
import { onAuthStateChanged, sendEmailVerification } from "firebase/auth";

function Verify() {
  const [isVerified, setIsVerified] = useState("");
  const [userEmail, setUserEmail] = useState("");

  useEffect(() =>
    onAuthStateChanged(auth, (currentUser) => {
      setUserEmail(currentUser.email);
    })
  );

  const checkVerification = () => {
    const user = auth.currentUser;
    let tempVerify = user.emailVerified.toString();
    let firstLetter = tempVerify.charAt(0);
    tempVerify = tempVerify.slice(1);
    firstLetter = firstLetter.toUpperCase();
    let permVerify = firstLetter + tempVerify;
    setIsVerified(permVerify);
    if (user.emailVerified !== true) verifyEmail();
    else {
      window.location.reload();
      setIsVerified("True");
      window.location.replace("/dashboard");
    }
  };

  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser);
    setIsVerified(
      "False, A Verification Email has been sent to your mail address!"
    );
  };
  return (
    <div>
      <div className="flex flex-col items-center pt-20 m-4">
        <div className=" flex flex-col items-center">
          <h1 className="text-4xl text-yellow-400">Verify User</h1>
          <h1 className="pt-10 text-2xl">
            Current User: <span className="text-yellow-400">{userEmail}</span>
          </h1>
          <h1 className="pt-10 text-2xl">
            Verified: <span className="text-yellow-400">{isVerified}</span>
          </h1>
          <button
            className="mt-10 bg-white hover:bg-green-500  text-black-950 rounded-lg p-3 transition-all ease-in-out duration-300"
            onClick={checkVerification}
          >
            Check Verification
          </button>
          <button
            className="mt-10 bg-white hover:bg-green-500  text-black-950 rounded-lg p-3 transition-all ease-in-out duration-300"
            onClick={checkVerification}
          >
            ReSend Verification
          </button>
        </div>
      </div>
    </div>
  );
}

export default Verify;

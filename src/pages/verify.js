import React, { useState, useEffect } from "react";
import { auth } from "../firebase-config";

import { onAuthStateChanged, sendEmailVerification } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../firebase-config";

function Verify() {
  const [isVerified, setIsVerified] = useState("");
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser === null) window.location.assign("/login");
      setUserEmail(currentUser.email);
    });
    if (document.readyState === "complete") {
      checkVerification();
    }
  });

  const checkVerification = () => {
    const user = auth.currentUser;

    if (user.emailVerified !== true) verifyEmail();
    else {
      setIsVerified("True");
      addToDb();
      setTimeout(() => {
        window.location.replace("/dashboard");
      }, 5000);
    }
  };

  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser);
    setIsVerified(
      "False, A Verification Email has been sent to your mail address!"
    );
  };

  const addToDb = async () => {
    console.log("DB");
    const docRef = doc(db, "users", auth.currentUser.uid);
    const docGet = await getDoc(docRef);
    if (docGet.exists() === true) return;
    setIsVerified("True, Adding to Database");
    try {
      await setDoc(doc(db, "users", auth.currentUser.uid), {
        uid: auth.currentUser.uid,
        email: auth.currentUser.email,
        CorrectQuestions: 0,
        WrongQuestions: 0,
      });
      console.log("Added");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  return (
    <div>
      <div className="flex flex-col items-center pt-20 m-4 justify-center">
        <div className=" flex flex-col items-center justify-center">
          <h1 className="text-4xl text-yellow-400">Verify User</h1>
          <h1 className="pt-10 text-2xl text-center">
            Current User: <br></br>
            <span className="text-yellow-400">{userEmail}</span>
          </h1>
          <h1 className="pt-10 text-2xl text-center">
            Verified: <br></br>{" "}
            <span className="text-yellow-400">{isVerified}</span>
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

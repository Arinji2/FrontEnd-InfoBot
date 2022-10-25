import React from "react";
import { useEffect, useState } from "react";
import { auth, db } from "../firebase-config";
import {
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { getDoc, doc, setDoc } from "firebase/firestore";
import { ThreeCircles } from "react-loader-spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

function Verify() {
  const [userTrue, setUserTrue] = useState(false);
  const loginwithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then(() => {
        getDocs();
      })
      .catch((error) => {
        console.log("Error" + error);
      });
  };

  const getDocs = async () => {
    const docRef = doc(db, "users", auth.currentUser.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
    } else {
      await setDoc(doc(db, "users", auth.currentUser.uid), {
        CorrectQuestions: 0,
        WrongQuestions: 0,
        email: auth.currentUser.email,
        uid: auth.currentUser.uid,
        staff: false,
        writer: false,
        verifier: false,
        developer: false,
        executive: false,
        coins: 0,
        premium: false,
        userName: auth.currentUser.displayName,
      })
        .then()
        .catch((error) => {
          console.log(error);
        });
    }
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserTrue(true);
        getDocs();
        setTimeout(() => {
          window.location.assign("/dashboard");
        }, 5000);
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

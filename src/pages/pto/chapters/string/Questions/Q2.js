import React, { useState, useEffect } from "react";
import { auth, db } from "../../../../../firebase-config";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
function Q3() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [Correct, setCorrect] = useState(0);
  const [Wrong, setWrong] = useState(0);
  const [isCorrect, setisCorrect] = useState("");
  const [SolutionColor, setSolutionColor] = useState("");
  const [Solution, setSolution] = useState("");
  const [RedirectButton, setRedirectButton] = useState("");
  useEffect(() => {
    onAuthStateChanged(auth, () => {
      if (auth !== null) {
        getDatabase();
        setIsLoaded(true);
      }
    });
  });
  const getDatabase = async () => {
    const docRef = doc(db, "users", auth.currentUser.uid);
    const docGet = await getDoc(docRef);
    setCorrect(docGet.data().CorrectQuestions);
    setWrong(docGet.data().WrongQuestions);
  };
  const correct = async () => {
    if (isLoaded !== true) return;
    if (isCorrect === "Incorrect Answer!") return;
    try {
      await setDoc(doc(db, "users", auth.currentUser.uid), {
        uid: auth.currentUser.uid,
        email: auth.currentUser.email,
        CorrectQuestions: Correct + 1,
        WrongQuestions: Wrong,
      });
      setSolutionColor("text-green-400 text-center pt-5");
      setisCorrect("Correct Answer!");
      setSolution("Redirecting in 2 Seconds..");
      setTimeout(() => {
        window.history.back();
      }, 2000);
    } catch (e) {
      window.location.reload();
    }
  };
  //Change the setSolution String
  const wrong = async () => {
    if (isLoaded !== true) return;
    setTimeout(() => {
      try {
        setDoc(doc(db, "users", auth.currentUser.uid), {
          uid: auth.currentUser.uid,
          email: auth.currentUser.email,
          CorrectQuestions: Correct,
          WrongQuestions: Wrong + 1,
        });
        setSolutionColor("text-red-400 text-center pt-5");
        setisCorrect("Incorrect Answer!");
        setSolution(
          ".replace is a String function which will only replace characters, not change capital state etc. The compare to will return a negative value if the second number is greater than the first number"
        );
        setRedirectButton("Click to Redirect");
      } catch (e) {
        window.location.reload();
      }
    }, 1000);
  };
  //Paste the Question Html
  return (
    <div className="pt-20">
      <h1 className="text-center text-4xl">PTO Practice</h1>

      <div className=" flex flex-col text-2xl text-yellow-500 items-center">
        <h2 className="self-center pb-5">Question</h2>

        <div className="text-left bg-black-950 p-5 rounded-lg text-white md:shadow-none shadow-md shadow-white break-words w-2/3">
          <p>{"public class program"}</p>

          <p>{"{"}</p>

          <p>{"static void main()"}</p>

          <p>{"{"}</p>

          <p>{"System.out.println('ACHIEVEMENT'.replace('E','A'));"}</p>

          <p>{'System.out.println("DEDICATE".compareTo("DEVOTE"));'}</p>
        </div>
      </div>
      {/* Paste the Options here, give the Correct Option onClick={correct} and
      the rest onClick={wrong}*/}
      <div className=" flex flex-col  text-2xl text-yellow-500 m-10">
        <h2 className="self-center pb-5">Options</h2>
        <div className="flex flex-row flex-wrap justify-evenly items-baseline">
          <div
            className="text-left bg-black-950 md:bg-black-950 md:shadow-none shadow-md shadow-white p-5 rounded-lg text-white scale-90 hover:scale-100 transition-all ease-in-out duration-300 hover:cursor-pointer"
            onClick={correct}
          >
            <p>{"ACHIAVAMANT"}</p>

            <p>{"-18"}</p>
          </div>
          <div
            className="text-left bg-black-950 md:bg-black-950 md:shadow-none shadow-md shadow-white p-5 rounded-lg text-white scale-90 hover:scale-100 transition-all ease-in-out duration-300 hover:cursor-pointer"
            onClick={wrong}
          >
            <p>{"achiavamant"}</p>

            <p>{"-20"}</p>
          </div>
          <div
            className="text-left bg-black-950 md:bg-black-950 md:shadow-none shadow-md shadow-white p-5 rounded-lg text-white scale-90 hover:scale-100 transition-all ease-in-out duration-300 hover:cursor-pointer"
            onClick={wrong}
          >
            <p>{"ACHIAVAMANT"}</p>

            <p>{"18"}</p>
          </div>
        </div>
        <p className={SolutionColor}>{isCorrect}</p>
        <p className="text-center pt-5">{Solution}</p>
        <button
          className="pt-5 text-white text-center"
          onClick={() => {
            window.location.replace("/specificTest");
          }}
        >
          {RedirectButton}
        </button>
      </div>
    </div>
  );
}

export default Q3;

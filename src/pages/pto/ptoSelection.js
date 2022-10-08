import React, { useState, useEffect } from "react";
import { auth, db } from "../../firebase-config";
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRefresh } from "@fortawesome/free-solid-svg-icons";
import Random from "../../assets/random.svg";
import Specific from "../../assets/specific.svg";
function PtoSelection() {
  const [name, setName] = useState("");
  const [Correct, setCorrect] = useState(0);
  const [Wrong, setWrong] = useState(0);
  const [Total, setTotal] = useState(0);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (auth.currentUser.emailVerified !== true)
        window.location.replace("/verify");
      setName(currentUser.displayName);
      getDatabase();
      calcTotal();
    });
  });
  const getDatabase = async () => {
    const docRef = doc(db, "users", auth.currentUser.uid);
    const docGet = await getDoc(docRef);
    setCorrect(docGet.data().CorrectQuestions);
    setWrong(docGet.data().WrongQuestions);
  };

  const calcTotal = () => {
    setTotal(Math.round((Correct / (Correct + Wrong)) * 100));
    if (Correct === 0 && Wrong === 0) setTotal(0);
  };
  const specificClick = () => {
    window.location.assign("/specificTest");
  };
  return (
    <div className="">
      <p className="p-10"></p>
      <div className="text-center text-4xl m-5">
        <h1>
          Welcome Back <span className="text-yellow-400">{name}</span>
        </h1>
      </div>
      <div className="pt-10 flex flex-row justify-evenly text-3xl flex-wrap gap-4 m-5">
        <h3>
          Correct: <span className="text-yellow-400">{Correct}</span>
        </h3>
        <h3>
          Wrong: <span className="text-yellow-400">{Wrong}</span>
        </h3>
        <h3>
          Total: <span className="text-yellow-400">{Correct + Wrong}</span>
        </h3>
        <h3>
          Percentage: <span className="text-yellow-400">{Total}%</span>
        </h3>
      </div>
      <div className="flex items-center justify-center pb-5 border-b-2 border-white rounded-lg">
        <p
          className="mt-10 border-2 border-yellow-500 p-2 rounded-lg bg-yellow-500 hover:border-yellow-600 hover:bg-yellow-600 hover:shadow-sm hover:shadow-white hover:cursor-pointer transition-all ease-in-out duration-200"
          onClick={getDatabase}
        >
          Refresh <FontAwesomeIcon icon={faRefresh} />
        </p>
      </div>
      <div className="pt-20 flex flex-col text-center m-5">
        <h1 className="text-4xl underline decoration-yellow-400">
          Start a Test
        </h1>
        <div className="flex flex-col md:flex-row items-center md:justify-around">
          <div
            className=" md:w-1/5 bg-black-950 p-3 rounded-lg scale-90 hover:scale-100 transition-all ease-in-out duration-300 hover:cursor-pointer"
            onClick={specificClick}
          >
            <img src={Specific} alt={Specific} className="pb-2"></img>
            <h2 className="text-3xl text-yellow-400 md:p-4">Chapter Test</h2>
            <p className="text-lg">
              Take a test of 10 Board PTO Questions of a <br></br> Specific
              Chapter
            </p>
          </div>
          <div className=" md:w-1/5 bg-black-950 p-3 rounded-lg scale-90 hover:scale-100 transition-all ease-in-out duration-300 hover:cursor-pointer">
            <img src={Random} alt={Random} className="pb-2"></img>
            <h2 className="text-3xl text-yellow-400 md:p-4">Mixed Test</h2>
            <p className="text-lg">
              Take a test of 10 Board PTO Questions of all Chapters
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PtoSelection;
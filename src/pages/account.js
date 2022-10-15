import React, { useState } from "react";
import { auth, db } from "../firebase-config";
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRefresh,
  faArrowAltCircleLeft,
} from "@fortawesome/free-solid-svg-icons";
function Account() {
  const [Email, setEmail] = useState("");
  const [Name, setName] = useState("");
  const [Correct, setCorrect] = useState(0);
  const [Wrong, setWrong] = useState(0);
  const [Total, setTotal] = useState(0);
  onAuthStateChanged(auth, (currentUser) => {
    if (auth != null) {
      getDatabase();
      console.log("Run");
    }
  });
  const getDatabase = async () => {
    const docRef = doc(db, "users", auth.currentUser.uid);
    const docGet = await getDoc(docRef);
    setEmail(docGet.data().email);
    setName(auth.currentUser.displayName);
    setCorrect(docGet.data().CorrectQuestions);
    setWrong(docGet.data().WrongQuestions);
    calcTotal();
  };
  const signOut = async () => {
    auth.signOut().then(() => {
      window.location.assign("/login");
    });
  };
  const calcTotal = () => {
    setTotal(Math.round((Correct / (Correct + Wrong)) * 100));
    if (Correct === 0 && Wrong === 0) setTotal(0);
  };
  return (
    <div>
      <div className="flex flex-col justify-center text-4xl gap-5 pt-20 items-center pb-5 border-b-2 border-white rounded-lg text-center">
        <h1>
          Welcome Back <br />
          <span className="text-yellow-400">{Name}</span>
        </h1>
        <h2 className="text-2xl">
          Current User: <br /> <span className="text-yellow-400">{Email}</span>
        </h2>
      </div>
      <h2 className="text-center text-4xl pt-10">PTO Statistics</h2>

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
      <div className="flex items-center justify-center pb-5 border-b-2 border-white rounded-lg ">
        <p
          className="mt-10 border-2 border-yellow-500 p-2 rounded-lg bg-yellow-500 hover:border-yellow-600 hover:bg-yellow-600 hover:shadow-sm hover:shadow-white hover:cursor-pointer transition-all ease-in-out duration-200"
          onClick={getDatabase}
        >
          Refresh <FontAwesomeIcon icon={faRefresh} />
        </p>
      </div>
      <div className="flex flex-col items-center">
        <p
          className="mt-10 border-2 text-2xl border-yellow-500 p-2 rounded-lg bg-yellow-500 hover:border-yellow-600 hover:bg-yellow-600 hover:shadow-sm hover:shadow-white hover:cursor-pointer transition-all ease-in-out duration-200 mb-5"
          onClick={signOut}
        >
          Sign Out <FontAwesomeIcon icon={faRefresh} />
        </p>
        <p
          className="mt-10 border-2 text-2xl border-yellow-500 p-2 rounded-lg bg-yellow-500 hover:border-yellow-600 hover:bg-yellow-600 hover:shadow-sm hover:shadow-white hover:cursor-pointer transition-all ease-in-out duration-200 mb-5"
          onClick={() => {
            window.location.assign("/dashboard");
          }}
        >
          Back to Dashboard <FontAwesomeIcon icon={faArrowAltCircleLeft} />
        </p>
      </div>
    </div>
  );
}

export default Account;

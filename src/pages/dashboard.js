import React from "react";
import Account from "../assets/account.svg";
import Coding from "../assets/code.svg";
import { useEffect } from "react";
import { auth /*storage*/ } from "../firebase-config";
import { onAuthStateChanged } from "firebase/auth";
/* import { uploadBytes, ref } from "firebase/storage"; */
function Dashboard() {
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (auth.currentUser.emailVerified !== true)
        window.location.replace("/verify");
    });
  });
  /*
  const getStorage = () => {
    const storageRef = ref(storage, "Articles/Test");
    var file = new File(["foo", "bar"], "foobar.txt");
    uploadBytes(storageRef, file);
    console.log("Uploaded");
  };
  */
  return (
    <div>
      <h1 className="text-center text-4xl text-yellow-400 pt-20 pb-10">
        Dashboard
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-center md:gap-5">
        <div
          className=" flex flex-col justify-center items-center group pb-20 md:pb-0"
          onClick={() => {
            window.location.assign("/account");
          }}
        >
          <img
            src={Account}
            alt={Account}
            className="w-2/5 scale-75 group-hover:scale-100 group-hover:cursor-pointer transition-all ease-in-out duration-300"
          />
          <h1 className="text-yellow-400 pt-3 text-2xl scale-75 group-hover:scale-100 group-hover:cursor-pointer transition-all ease-in-out duration-300">
            Account
          </h1>
        </div>
        <div
          className=" flex flex-col justify-center items-center group "
          onClick={() => {
            window.location.assign("/pto");
          }}
        >
          <img
            src={Coding}
            alt={Coding}
            className="w-2/5 scale-75 group-hover:scale-100 group-hover:cursor-pointer transition-all ease-in-out duration-300"
          />

          <h1 className="text-yellow-400 pt-10 text-2xl scale-75 group-hover:scale-100 group-hover:cursor-pointer transition-all ease-in-out duration-300">
            PTO
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

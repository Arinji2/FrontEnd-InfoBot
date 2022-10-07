import React, { useState, useEffect } from "react";
import { auth, db } from "../firebase-config";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged, updateProfile } from "firebase/auth";
function Pto() {
  const [name, setName] = useState("");
  const [Correct, setCorrect] = useState(0);
  const [Wrong, setWrong] = useState(0);
  const [Total, setTotal] = useState(0);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setName(currentUser.displayName);
      getDatabase();
    });
  });
  const getDatabase = async () => {
    const docRef = doc(db, "users", auth.currentUser.uid);
    const docGet = await getDoc(docRef);
  };
  return (
    <div>
      <h1>Welcome Back {name}</h1>
    </div>
  );
}

export default Pto;

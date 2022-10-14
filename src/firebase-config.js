import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBidIYxmER28Jqw4ztc_OEydKbpFN88oBk",
  authDomain: "auth.infobot.uk",
  projectId: "auth-2216a",
  storageBucket: "auth-2216a.appspot.com",
  messagingSenderId: "83891577277",
  appId: "1:83891577277:web:138678e9aeef9371aa72d4",
  measurementId: "G-RSS316Y5YB",
  storageBucket: "gs://auth-2216a.appspot.com",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

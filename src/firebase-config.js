import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBidIYxmER28Jqw4ztc_OEydKbpFN88oBk",
  authDomain: "auth-2216a.firebaseapp.com",
  projectId: "auth-2216a",
  storageBucket: "auth-2216a.appspot.com",
  messagingSenderId: "83891577277",
  appId: "1:83891577277:web:138678e9aeef9371aa72d4",
  measurementId: "G-RSS316Y5YB",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

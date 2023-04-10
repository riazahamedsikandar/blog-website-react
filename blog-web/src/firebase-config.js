import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { addDoc, collection } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import firebase from "firebase/app"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDW52Yd_Q9_tc3SQwpyE0_thZbRR4xwmSs",
  authDomain: "blog-website-30a49.firebaseapp.com",
  projectId: "blog-website-30a49",
  storageBucket: "blog-website-30a49.appspot.com",
  messagingSenderId: "783516349284",
  appId: "1:783516349284:web:21bd1f020e4e00a75e8071",
  measurementId: "G-LMCGXG2Y4F",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
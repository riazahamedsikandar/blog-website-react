import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore/lite";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import firebase from "firebase/app";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optionalc
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

// add document to a collection
async function addDocument(collectionName, data, auth) {
  try {
    const docRef = await addDoc(collection(db, collectionName), data);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export { addDocument };
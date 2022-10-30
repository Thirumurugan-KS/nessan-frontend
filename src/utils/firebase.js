// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYEcbwDgUDrztCRyLPikrpRjE4yB8QUWM",
  authDomain: "nessan-technology.firebaseapp.com",
  projectId: "nessan-technology",
  storageBucket: "nessan-technology.appspot.com",
  messagingSenderId: "53704607370",
  appId: "1:53704607370:web:56e69a263eeca54a6fcf73",
  measurementId: "G-4ZK4P1735F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const provider = new GoogleAuthProvider();

export const auth = getAuth();




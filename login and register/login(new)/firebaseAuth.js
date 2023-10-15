// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  onAuthStateChanged,
  deleteUser,
  reauthenticateWithCredential,
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDp4JkXYK3oIvmgal8KwtgpFQdRNhXJpsE",
  authDomain: "fir-88e9e.firebaseapp.com",
  databaseURL: "https://fir-88e9e-default-rtdb.firebaseio.com",
  projectId: "fir-88e9e",
  storageBucket: "fir-88e9e.appspot.com",
  messagingSenderId: "188819781715",
  appId: "1:188819781715:web:a6f7a6bb184c227a2e6ea6",
  measurementId: "G-6MNNRPGELV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
// console.log(app);
export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  getAuth,
  onAuthStateChanged,
  deleteUser,
  reauthenticateWithCredential,
};

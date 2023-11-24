// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQpo0DDySuVCNLNvyn4jDNsl3vZFL5U1k",
  authDomain: "react-netfilx-clone-7635b.firebaseapp.com",
  projectId: "react-netfilx-clone-7635b",
  storageBucket: "react-netfilx-clone-7635b.appspot.com",
  messagingSenderId: "123467331788",
  appId: "1:123467331788:web:57c5ced931af70945daa69",
  measurementId: "G-PP9C7J8TTG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
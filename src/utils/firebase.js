// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsnxbVAMAfDIgweY3Xuv1Cn0CZC7CV6mk",
  authDomain: "netflix-3231a.firebaseapp.com",
  projectId: "netflix-3231a",
  storageBucket: "netflix-3231a.appspot.com",
  messagingSenderId: "677371560161",
  appId: "1:677371560161:web:b48807f03c9e20509577a0",
  measurementId: "G-P6LTYF2PDE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();

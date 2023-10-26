// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRVKlc26FJDbgWKPkySqVTyxwIeGhOFj4",
  authDomain: "duendemaquillista-8f457.firebaseapp.com",
  projectId: "duendemaquillista-8f457",
  storageBucket: "duendemaquillista-8f457.appspot.com",
  messagingSenderId: "816371325670",
  appId: "1:816371325670:web:66e021dde2603992b57927",
  measurementId: "G-5WEGQ6MCG8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
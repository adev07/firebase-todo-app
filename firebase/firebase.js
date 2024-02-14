// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCjKvS-iLGhCX_0UVL_jP7a2Hxm3fOZEQ",
  authDomain: "fir-todo-app-38b10.firebaseapp.com",
  projectId: "fir-todo-app-38b10",
  storageBucket: "fir-todo-app-38b10.appspot.com",
  messagingSenderId: "1077494609642",
  appId: "1:1077494609642:web:5aebf68e33af628cc20993"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
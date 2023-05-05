 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcHWdVYNPuXxRQifQzVnFUvZkyq_W3AN8",
  authDomain: "todo-app-430fb.firebaseapp.com",
  projectId: "todo-app-430fb",
  storageBucket: "todo-app-430fb.appspot.com",
  messagingSenderId: "701027296411",
  appId: "1:701027296411:web:b748c6e704256091c2d23e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "backend-84468.firebaseapp.com",
  projectId: "backend-84468",
  storageBucket: "backend-84468.appspot.com",
  messagingSenderId: "1061084680742",
  appId: "1:1061084680742:web:816d3e2497b3dc37ebcce7"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
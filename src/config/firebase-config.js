import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "data-8fa40.firebaseapp.com",
  projectId: "data-8fa40",
  storageBucket: "data-8fa40.appspot.com",
  messagingSenderId: "905403708323",
  appId: "1:905403708323:web:cebd1788ee5b272f182016"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
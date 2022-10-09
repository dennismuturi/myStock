import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "services-bbe0f.firebaseapp.com",
  projectId: "services-bbe0f",
  storageBucket: "services-bbe0f.appspot.com",
  messagingSenderId: "251479731219",
  appId: "1:251479731219:web:e3e6190b156ddd75f063e6"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
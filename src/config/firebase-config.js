import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyC9xxpc8LPMG_lV7TGW8T8LvogzJOpbUT0",
  authDomain: "stock-13d51.firebaseapp.com",
  projectId: "stock-13d51",
  storageBucket: "stock-13d51.appspot.com",
  messagingSenderId: "833452678944",
  appId: "1:833452678944:web:d21d3d48489b3564040145"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDg-dHHLv0OZAdHDv6VNAF29aqEoBNfkHc",
  authDomain: "stockapp-890a1.firebaseapp.com",
  projectId: "stockapp-890a1",
  storageBucket: "stockapp-890a1.appspot.com",
  messagingSenderId: "231893907849",
  appId: "1:231893907849:web:8cbeecedb75d9012a9c958"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
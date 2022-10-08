import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAlqAcR1UECKg2ASO4RH3l0KuVs_Oxyjgc",
  authDomain: "service-a6b6a.firebaseapp.com",
  projectId: "service-a6b6a",
  storageBucket: "service-a6b6a.appspot.com",
  messagingSenderId: "1051615315937",
  appId: "1:1051615315937:web:9a6ec080a763dbada2b4a0"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
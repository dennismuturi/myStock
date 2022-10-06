import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCBs5SIvMUSSxYKQBQOfDvehhoktitU0-E",
  authDomain: "mystockapp-f16e1.firebaseapp.com",
  projectId: "mystockapp-f16e1",
  storageBucket: "mystockapp-f16e1.appspot.com",
  messagingSenderId: "577654118689",
  appId: "1:577654118689:web:4b4784b39913a2ab974660"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
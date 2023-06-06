// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZ00yB-2ngexKtKCDcdyqveSu9hFxZoOY",
  authDomain: "first-firebase-project-1dbca.firebaseapp.com",
  projectId: "first-firebase-project-1dbca",
  storageBucket: "first-firebase-project-1dbca.appspot.com",
  messagingSenderId: "1095346384109",
  appId: "1:1095346384109:web:b353f95e8bc1665b2270e4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app)

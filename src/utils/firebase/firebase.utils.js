import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRhEboik-Ykdos78Zjr_-TIe5D5gD56u8",
  authDomain: "crown-clothing-75d82.firebaseapp.com",
  projectId: "crown-clothing-75d82",
  storageBucket: "crown-clothing-75d82.appspot.com",
  messagingSenderId: "960270945129",
  appId: "1:960270945129:web:e16b5288d2328c5cff4bf8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

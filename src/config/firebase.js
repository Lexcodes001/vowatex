import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCg7vzpkoyoc2PMa-Mjh7CYiODshb43uEg",
  authDomain: "vowatex-8f3af.firebaseapp.com",
  projectId: "vowatex-8f3af",
  storageBucket: "vowatex-8f3af.appspot.com",
  messagingSenderId: "721491558365",
  appId: "1:721491558365:web:0696446c3a575b292b0034",
  measurementId: "G-EVC9WHB4K6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage();
export const db = getFirestore();
export const auth = getAuth();
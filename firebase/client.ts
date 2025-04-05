// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2QQBUiz9TqFvG0heW8DKCdizszsV2j3I",
  authDomain: "prepitup-d82d4.firebaseapp.com",
  projectId: "prepitup-d82d4",
  storageBucket: "prepitup-d82d4.firebasestorage.app",
  messagingSenderId: "665724540966",
  appId: "1:665724540966:web:fcf86f7d47f9297c376ee7",
  measurementId: "G-YZL1B6HDY9",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);

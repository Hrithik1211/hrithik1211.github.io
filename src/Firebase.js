// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJx9A_hJpmsZdOxBl7UuuY0u_SJq9J23U",
  authDomain: "personal-website-e7277.firebaseapp.com",
  projectId: "personal-website-e7277",
  storageBucket: "personal-website-e7277.appspot.com",
  messagingSenderId: "539709710294",
  appId: "1:539709710294:web:dea02e6717f8f28a5cce77",
  measurementId: "G-3QHGVNTFJ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
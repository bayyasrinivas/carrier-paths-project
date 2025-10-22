// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIqe8LNsDkStNJtOCLTBuiT33A1r7rRi8",
  authDomain: "pdsy-f3afb.firebaseapp.com",
  projectId: "pdsy-f3afb",
  storageBucket: "pdsy-f3afb.firebasestorage.app",
  messagingSenderId: "355875285371",
  appId: "1:355875285371:web:8844bb9150d6a637ca35de",
  measurementId: "G-DMH1K7RWYW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkbadMfQA89BUkm88tyubnzU_jHRch9hc",
  authDomain: "react-ecommerce-flekenstein.firebaseapp.com",
  projectId: "react-ecommerce-flekenstein",
  storageBucket: "react-ecommerce-flekenstein.appspot.com",
  messagingSenderId: "131614036815",
  appId: "1:131614036815:web:d3d28ce70f1fc914302b3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
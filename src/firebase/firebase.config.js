// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBX-SQuc7fyzIwQ6uGCcj7v7-f3XmQqtVM",
  authDomain: "e-school-1ed06.firebaseapp.com",
  projectId: "e-school-1ed06",
  storageBucket: "e-school-1ed06.appspot.com",
  messagingSenderId: "580577069549",
  appId: "1:580577069549:web:1cad310539c742e5b6ffe4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
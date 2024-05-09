// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9s7ybUwHOL4ucZjXtJFCgYbJ9PZCx3vY",
  authDomain: "taskflow-97ad2.firebaseapp.com",
  projectId: "taskflow-97ad2",
  storageBucket: "taskflow-97ad2.appspot.com",
  messagingSenderId: "932803186188",
  appId: "1:932803186188:web:49195f8272d734f4fba829"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgEx6OtJOk0FagyU9xlBYF9i829G-3ObU",
  authDomain: "netflixclone-622fd.firebaseapp.com",
  projectId: "netflixclone-622fd",
  storageBucket: "netflixclone-622fd.appspot.com",
  messagingSenderId: "1072948108743",
  appId: "1:1072948108743:web:b3f8fe2f775fcc42fb8de2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth();

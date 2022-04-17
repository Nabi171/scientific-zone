// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "@firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB0x0oUE6-gIjZ__hjXXdY0tq36IIPA5d4",
    authDomain: "techno-fdaab.firebaseapp.com",
    projectId: "techno-fdaab",
    storageBucket: "techno-fdaab.appspot.com",
    messagingSenderId: "863214346460",
    appId: "1:863214346460:web:50bc17d892aeecb8ead419",
    measurementId: "G-VB3HT7KZYB"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

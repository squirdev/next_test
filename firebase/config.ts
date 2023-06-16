// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCxvEOh8SB-CdK8-6gGlkTpL5aKjWoaTto",
    authDomain: "police-devlop.firebaseapp.com",
    projectId: "police-devlop",
    storageBucket: "police-devlop.appspot.com",
    messagingSenderId: "283598943424",
    appId: "1:283598943424:web:9f764067e7dc3a1948e925",
    measurementId: "G-ETHXC8G8KP"
};

// Initialize Firebase
let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase_app;
// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzF6O7OLDUyfKU1VXjPOP2J6rIqcOKuHg",
  authDomain: "hspantryapp-cc80e.firebaseapp.com",
  projectId: "hspantryapp-cc80e",
  storageBucket: "hspantryapp-cc80e.appspot.com",
  messagingSenderId: "340500960397",
  appId: "1:340500960397:web:bc5564f837147af9503ec4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const firestore = getFirestore(app)
export {app,firestore}


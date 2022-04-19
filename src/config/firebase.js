// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA7URj1Hl6q_Ybqgjl1dSJXiGKX4P5S7VY",
    authDomain: "ecommerce-website-bd8c4.firebaseapp.com",
    projectId: "ecommerce-website-bd8c4",
    storageBucket: "ecommerce-website-bd8c4.appspot.com",
    messagingSenderId: "853486370250",
    appId: "1:853486370250:web:8850e5c21365fc8c176333",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  
  apiKey: "AIzaSyC0P2DRKcSgdB3YbbLQ1wi3MvZ8QfrDYbk",
  authDomain: "smartcommunityhub-54836.firebaseapp.com",
  projectId: "smartcommunityhub-54836",
  storageBucket: "smartcommunityhub-54836.firebasestorage.app",
  messagingSenderId: "987988767317",
  appId: "1:987988767317:web:2e52445648d1e16ff21adc",
  measurementId: "G-Q6Z3TFWVPL"
};

// Initialize Firebase


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
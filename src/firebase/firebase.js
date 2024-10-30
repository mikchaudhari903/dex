// Import the Firebase SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwEMgU5G1v0SaWLzoMjeCitw9G7hQf17E",
  authDomain: "dexcoder-dc2e1.firebaseapp.com",
  databaseURL: "https://dexcoder-dc2e1-default-rtdb.firebaseio.com/",
  projectId: "dexcoder-dc2e1",
  storageBucket: "dexcoder-dc2e1.appspot.com",
  messagingSenderId: "648434069626",
  appId: "1:648434069626:web:14955c8b450e596a878bc3",
  measurementId: "G-22W9BV2T7Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Services
export const auth = getAuth(app);
export const db = getDatabase(app);

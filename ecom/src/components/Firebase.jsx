// firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage"; // Import the storage module

const firebaseConfig = {
  apiKey: "AIzaSyCi-eCcL9QJddLTv9dhDacI-sOhw6twsHE",
  authDomain: "ecom-e61b0.firebaseapp.com",
  projectId: "ecom-e61b0",
  storageBucket: "ecom-e61b0.appspot.com",
  messagingSenderId: "841843588438",
  appId: "1:841843588438:web:8b9abca0bad93966d56af7",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app); // Export the storage object
export default app;

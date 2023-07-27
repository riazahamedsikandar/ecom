import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCi-eCcL9QJddLTv9dhDacI-sOhw6twsHE",
    authDomain: "ecom-e61b0.firebaseapp.com",
    projectId: "ecom-e61b0",
    storageBucket: "ecom-e61b0.appspot.com",
    messagingSenderId: "841843588438",
    appId: "1:841843588438:web:8b9abca0bad93966d56af7"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
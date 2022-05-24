// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDm86h9GP1GauWUsp9mM0UcMsbXhHCAijg",
    authDomain: "car-daddy.firebaseapp.com",
    projectId: "car-daddy",
    storageBucket: "car-daddy.appspot.com",
    messagingSenderId: "802454195151",
    appId: "1:802454195151:web:1d7f377e82445b2ee860ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
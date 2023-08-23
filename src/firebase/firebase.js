// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore,collection} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCK2yj7qPHS2IjJR6bfLwZk-6mE3aTfeRc",
  authDomain: "filmyverse-20ecf.firebaseapp.com",
  projectId: "filmyverse-20ecf",
  storageBucket: "filmyverse-20ecf.appspot.com",
  messagingSenderId: "544067804175",
  appId: "1:544067804175:web:880d3d294c5d88e939577a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


 export const db = getFirestore(app);
 export const moviesRef = collection(db,"movies");
 export const reviewsRef =collection(db,"reviews");
 export const usersRef = collection(db, "users");
 export default app;
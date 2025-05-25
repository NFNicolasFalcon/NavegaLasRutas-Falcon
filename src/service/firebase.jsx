// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmwpZqxnXuR0EvMyqrx6DL7QFSICQwvQw",
  authDomain: "coder-shop-falcon.firebaseapp.com",
  projectId: "coder-shop-falcon",
  storageBucket: "coder-shop-falcon.firebasestorage.app",
  messagingSenderId: "390016062747",
  appId: "1:390016062747:web:c18733e9174aeaf59e6fbe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "@firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBraMgf9M8zNiDZPdP5_eSZGvY_K0iCPZ0",
  authDomain: "vs-gallery.firebaseapp.com",
  projectId: "vs-gallery",
  storageBucket: "vs-gallery.appspot.com",
  messagingSenderId: "1029694537435",
  appId: "1:1029694537435:web:35c1188dfe6c812ded56fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { firestore, storage }


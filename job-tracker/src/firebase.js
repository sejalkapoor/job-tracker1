import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDfg5Cdxq3vhyvpnMsGIq9QlNlYSVqal2E",
  authDomain: "easyauthapp-3a0bc.firebaseapp.com",
  projectId: "easyauthapp-3a0bc",
  storageBucket: "easyauthapp.appspot.com",
  messagingSenderId: "709357711890",
  appId: "1:709357711890:web:e6fd8b3b22e343c1a8decb",
  measurementId: "G-9FXXN7QXZ3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db, collection, addDoc, getDocs, deleteDoc, doc };

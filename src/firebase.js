
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBlO3N_fQcaEBBqZ13NnIJ0VJhc-fVYD30",
  authDomain: "netflik-clone-da034.firebaseapp.com",
  projectId: "netflik-clone-da034",
  storageBucket: "netflik-clone-da034.appspot.com",
  messagingSenderId: "1044632276742",
  appId: "1:1044632276742:web:2a7f0dde096c0ea5dc5887"
};


const app = initializeApp(firebaseConfig);
const auth= getAuth();
const db =getFirestore();

export {app,auth,db} ;
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDnmdRngjoW0FumFaT3kf-G3m1hd_-BKKk",
  authDomain: "instagram-clone-3b7f8.firebaseapp.com",
  projectId: "instagram-clone-3b7f8",
  storageBucket: "instagram-clone-3b7f8.appspot.com",
  messagingSenderId: "983569213222",
  appId: "1:983569213222:web:f17ea0be6c2dc465c243e7",
};

let app;

getApps().length === 0
  ? (app = initializeApp(firebaseConfig))
  : (app = getApp());

const db = getFirestore();
const storage = getStorage();

export { app, db, storage };

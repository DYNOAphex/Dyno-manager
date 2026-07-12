import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDybMCrasvO8poehnr7hmJR_41dHIhbSa0",
  authDomain: "dyno-manager.firebaseapp.com",
  projectId: "dyno-manager",
  storageBucket: "dyno-manager.firebasestorage.app",
  messagingSenderId: "899215307208",
  appId: "1:899215307208:web:5607ed9ccd17265a8790fd"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

export const storage = getStorage(app);
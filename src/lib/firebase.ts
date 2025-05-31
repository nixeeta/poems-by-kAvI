// lib/firebase.ts
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBABn9ksH5OnXX1KHStwyIRcGKPje89_lw",
  authDomain: "poems-by-kavi.firebaseapp.com",
  projectId: "poems-by-kavi",
  storageBucket: "poems-by-kavi.firebasestorage.app",
  messagingSenderId: "160276366507",
  appId: "1:160276366507:web:f875da902e72ffe7b723ee",
  measurementId: "G-41HDDK9LYS"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

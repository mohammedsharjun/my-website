// src/lib/firebase.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBlUQ-zDQaSowrAVGVqxIr2GGD8ZAhRTmY",
  authDomain: "web-agency-73cb1.firebaseapp.com",
  projectId: "web-agency-73cb1",
  storageBucket: "web-agency-73cb1.firebasestorage.app",
  messagingSenderId: "199385968761",
  appId: "1:199385968761:web:0c83d77a9591a6016624a8"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Import the functions you need from the SDKs you need
import { getApps, getApp, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
// Firebase Configuration

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDI26Oh3_Ds0IJe2a7XLBLVJJbBjl9QQ8",
  authDomain: "trollo-clone.firebaseapp.com",
  projectId: "trollo-clone",
  storageBucket: "trollo-clone.firebasestorage.app",
  messagingSenderId: "274214294318",
  appId: "1:274214294318:web:0a878068faa69525b660bf",
  measurementId: "G-0XL64PR1YV"
};

// Initialize Firebase App
/*
The Firebase app is initialized or retrieve based on whether any Firebase apps
have already been initialized
*/
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

// Initialize Firebase Authentication
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

// Initialize Firestore
export const db = getFirestore(app);

// Sign in function
export const signInWithGoogle = async () => {
  try {
    await signInWithPopup(auth, provider);
  } catch (error) {
    console.error("Error signing in:", error);
  }
};

// Sign out function
export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Error signing out:", error);
  }
};

// Initialize Firebase only once (for SSR support in Next.js)
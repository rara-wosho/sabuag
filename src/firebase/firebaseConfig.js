// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKL0cze-H2BBj7pIQglrjtKli14iGDaQA",
  authDomain: "sabuag-c73ee.firebaseapp.com",
  projectId: "sabuag-c73ee",
  storageBucket: "sabuag-c73ee.firebasestorage.app",
  messagingSenderId: "1057992075587",
  appId: "1:1057992075587:web:098251aba7c092f769a7f6",
  measurementId: "G-H9EKTLG6CX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
export default app;

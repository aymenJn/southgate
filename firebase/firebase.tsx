import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBytF50TlWdHTMrSbbLAXGqxhy-9r_FBT0",
  authDomain: "southrn-213e5.firebaseapp.com",
  projectId: "southrn-213e5",
  storageBucket: "southrn-213e5.firebasestorage.app",
  messagingSenderId: "201276891476",
  appId: "1:201276891476:web:7dcff583fbb169601528c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

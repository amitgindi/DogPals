import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDgWrsQPDUuFnp_F1mdBDWZqlJ0k1Krt7U",
  authDomain: "dogpals-307c4.firebaseapp.com",
  projectId: "dogpals-307c4",
  storageBucket: "dogpals-307c4.appspot.com",
  messagingSenderId: "367532570653",
  appId: "1:367532570653:web:86a3c5a0c7848076eb6ef4",
  measurementId: "G-BD0252CN7B"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

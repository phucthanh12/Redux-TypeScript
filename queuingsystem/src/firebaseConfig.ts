import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAky9sy-5L99nvl2bgi-1B1w9tal-6NSC8",
  authDomain: "queuingsystem-6bc10.firebaseapp.com",
  projectId: "queuingsystem-6bc10",
  storageBucket: "queuingsystem-6bc10.appspot.com",
  messagingSenderId: "1014893065316",
  appId: "1:1014893065316:web:f8d67849736daf02f31b71",
  measurementId: "G-7CF7LMP2Q3"
};

  // Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

